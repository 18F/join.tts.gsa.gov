const sinon = require("sinon");
const tap = require("tap");

const archiver = require("./archive_closed_jobs.js");

tap.test("automatic job archival", async (t1) => {
  const RENDERED_CONTENT = "this is the rendered content";
  const sandbox = sinon.createSandbox();

  const core = {
    setOutput: sinon.stub(),
  };

  const fs = {
    access: sinon.stub(),
    readFile: sinon.stub(),
    rename: sinon.stub(),
    rm: sinon.stub(),
    writeFile: sinon.stub(),
  };

  t1.beforeEach(() => {
    sandbox.resetBehavior();
    sandbox.resetHistory();

    // Default behaviors
    fs.access.rejects();
    fs.rename.resolves();
    fs.readFile.resolves(RENDERED_CONTENT);
    fs.writeFile.resolves();
    fs.rm.resolves();
  });

  t1.test("with no closed jobs", async (t2) => {
    fs.readFile.withArgs("_site/jobs.json").resolves("[]");

    await archiver({ core, fs });

    t2.ok(fs.rename.notCalled, "no files were renamed");
    t2.ok(fs.rm.notCalled, "no files were removed");
    t2.ok(fs.writeFile.notCalled, "no files were written");
    t2.ok(core.setOutput.notCalled, "no GitHub action outputs are set");
  });

  t1.test("with a closed job", async (t2) => {
    const FRONTMATTER = [
      `---`,
      `title: "closed job #1"`,
      `layout: raw`,
      `---`,
    ].join("\n");

    t2.beforeEach(() => {
      const closed = [
        {
          name: "the_filename.md",
          title: "closed job #1",
          status: "closed",
          url: "https://tts.gsa.gov/path/name",
        },
      ];

      fs.readFile.withArgs("_site/jobs.json").resolves(JSON.stringify(closed));
    });

    t2.test("archiving it would cause a filename collision", async (t3) => {
      t3.test("just one time", async (t4) => {
        fs.access.withArgs("archive/name").resolves();

        await archiver({ core, fs });

        t4.ok(fs.rename.calledWith("_site/path/name", "archive/name_1"));
        t4.ok(
          fs.writeFile.calledWith(
            "archive/name_1/index.html",
            `${FRONTMATTER}\n${RENDERED_CONTENT}`
          )
        );
        t4.ok(fs.rm.calledWith("positions/the_filename.md"));
      });

      t3.test("multiple times", async (t4) => {
        fs.access.withArgs("archive/name").resolves();
        fs.access.withArgs("archive/name_1").resolves();
        fs.access.withArgs("archive/name_2").resolves();

        await archiver({ core, fs });

        t4.ok(fs.rename.calledWith("_site/path/name", "archive/name_3"));
        t4.ok(
          fs.writeFile.calledWith(
            "archive/name_3/index.html",
            `${FRONTMATTER}\n${RENDERED_CONTENT}`
          )
        );
        t4.ok(fs.rm.calledWith("positions/the_filename.md"));
      });
    });

    t2.test("there is no conflict with existing archives", async (t3) => {
      fs.access.withArgs("archive/name").rejects();

      await archiver({ core, fs });

      t3.ok(fs.rename.calledWith("_site/path/name", "archive/name"));
      t3.ok(
        fs.writeFile.calledWith(
          "archive/name/index.html",
          `${FRONTMATTER}\n${RENDERED_CONTENT}`
        )
      );
      t3.ok(fs.rm.calledWith("positions/the_filename.md"));
    });
  });
});

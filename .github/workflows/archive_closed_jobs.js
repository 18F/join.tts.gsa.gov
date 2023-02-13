const _fs = require("fs/promises");
const _path = require("path");

// Checks if a path exists. Can be a directory or a file. Not STRICTLY a check
// that the path exists, but rather than the calling user has permission to
// access it. If it doesn't exist, the user won't have access. Since in this
// context, our "user" has access to all the paths that we might be checking,
// we can say the two are basically the same thing.
const exists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (e) {
    return false;
  }
};

// core is provided by the GitHub Actions runner. It is an instance of the
// Actions toolkit core:
//   https://github.com/actions/toolkit/tree/main/packages/core
//
// fs and path are provided here as injected dependencies in case we decide we
// need to write tests for this function.
const runArchiver = async ({ core, fs = _fs, path = _path }) => {
  // The jobs.json file is created by Jekyll during the build. It
  // contains a list of all the jobs currently in the /positions
  // folders. The jobs are structued like this:
  //
  // {
  //    url: "full url to the published page",
  //    title: "the title of the job",
  //    status: "(upcoming | open | closed)",
  //    name: "the filename of the source file in /positions"
  // }
  //
  // We want to find the closed jobs and move them into the archives.
  const jobs = JSON.parse(await fs.readFile("_site/jobs.json"));
  const closed = jobs.filter(({ status }) => status === "closed");

  for await (const job of closed) {
    // From the URL, derive the filesystem path. This makes a critical
    // assumption: jobs DO NOT use the permalink feature of Jekyll. If
    // a job uses a permalink that differs from where Jekyll would put
    // it anyway, this will break. :(
    //
    // NOTE: Jobs from /positions are rendered to:
    //   /join/[filename slug]/index.html
    const pathname = new URL(job.url).pathname;
    const renderedPath = path.join("_site", pathname);

    // For its archival location, we just yoink out the last directory
    // name from the URL. We're just going to move the whole directory
    // rather than deal with moving index files and renaming them and
    // all that. This is easier.
    const archivePath = await (async () => {
      const archiveBase = path.join("archive", path.basename(pathname));
      let archivePath = archiveBase;
      let offset = 1;
      while (await exists(archivePath)) {
        archivePath = `${archiveBase}_${offset}`;
      }
      return archivePath;
    })();

    // Move the rendered job posting into the archive. We keep the
    // rendered page instead of the source because we don't want the
    // archival copy to change if our underlying templates or data
    // change. What we rendered is what we want to preserve.
    await fs.rename(renderedPath, archivePath);

    // In order for the past-positions page to make sense of the
    // archived pages, the archived pages need frontmatter. Since we
    // are archiving the renders, they don't have any frontmatter. But
    // we can add it now! Here we open the index file from the
    // archived position and read in its contents.
    const indexPath = path.join(archivePath, "index.html");
    const content = await fs.readFile(indexPath, { encoding: "utf-8" });

    // Then we slather on some sweet, sweet frontmatter and save it
    // back to disk.
    const frontmatter = [
      "---",
      `title: ${job.title}`,
      `layout: raw`,
      "---",
    ].join("\n");

    await fs.writeFile(indexPath, `${frontmatter}\n${content}`, {
      encoding: "utf-8",
    });

    // And finally, delete the closed job from the source.
    await fs.rm(path.join("positions", job.name));
  }

  // If we closed anything, output a true so steps further
  if (closed.length > 0) {
    core.setOutput("archived", "true");
    core.setOutput(
      "archived_jobs",
      closed.map(({ title }) => `- ${title}`).join("\n")
    );
  }
};

module.exports = runArchiver;

#!/usr/bin/env python

# Silly little utility to rename files with URL friendly slug style names.
# YMMV!
import pathlib
import re
import sys
import urllib


def slugname(name):
    """
    Convert name to a slug alternative, replacing characters requiring
    URL encoding with dashes.
    """
    n = name.rsplit(".", 1)
    n[0] = n[0].rstrip(" ").lstrip(" ")
    n[0] = urllib.parse.quote(n[0])
    n[0] = re.sub(r"%[a-f0-9]{2}", "-", n[0], flags=re.IGNORECASE)
    n[0] = re.sub(r"-+", "-", n[0])

    return ".".join(n).lower()


def cleanup(dir, ignore=[]):
    """
    Move all files to slugnames and return a list of (oldname, newname)
    tuples.
    """
    diff = []
    dirpath = pathlib.Path(dir)

    for f in dirpath.glob("*"):
        if f.name in ignore:
            continue

        slug = slugname(f.name)
        if f.name != slug:
            diff.append((f.name, slug))
            f.rename(slug)

    return diff


def main():
    if len(sys.argv) != 2:
        sys.stderr.write(
            f"{sys.argv[0]} - Rename files to slug-like form and return a CSV diff\n\n"
            "You must specify a path to clean up\n"
        )
        sys.exit(1)

    diff = cleanup(sys.argv[1], ignore=["README.md"])

    if len(diff) == 0:
        sys.stderr.write("All files already sluggy\n")
        sys.exit(0)

    sys.stderr.write(f"Renames {len(diff)} files\n")

    print("oldname,newname")
    for p in diff:
        print(",".join(p))

    sys.exit(0)


if __name__ == "__main__":
    main()

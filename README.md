[![CircleCI](https://circleci.com/gh/18F/join.tts.gsa.gov.svg?style=svg&circle-token=66a2eadcbf6cdcb69800da140971211bb0c78e3a)](https://circleci.com/gh/18F/join.tts.gsa.gov)

# Usage

## Job posting

For **new job postings**, copy from [the template](pages/positions/template_upcoming-position.md).

To **open an upcoming job**, change the `state` to `open` in the "frontmatter" (the metadata between the horizontal lines at the top).

To **close a job posting**, change the `state` to `closed`.

To **reuse a job posting**, change the `state` to `upcoming`, and modify the page as appropriate.

## Local development

This site is built on the [uswds-jekyll](https://github.com/18F/uswds-jekyll) theme, so you'll find configuration information there.

To work on the site locally:

1. Install Ruby.
1. Install packages.

    ```sh
    bundle install
    ```

1. Run the site.

    ```sh
    bundle exec jekyll serve
    ```

1. Open http://127.0.0.1:4000/.

# Public domain

This project is in the worldwide [public domain](LICENSE.md).

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

# Special Thanks

Special thanks to the team at [18F](https://18f.gsa.gov/) for their open and transparent model which benefits citizens, government, and technology.

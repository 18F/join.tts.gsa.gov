# Join TTS site

## Adding a new job posting

To add a new job posting, first copy [the template](positions/_TEMPLATE.md).
The easiest way to copy it is to open
[this raw view](https://raw.githubusercontent.com/18F/join.tts.gsa.gov/main/positions/_TEMPLATE.md),
select all, and copy. Then create a new file by [opening this link](https://github.com/18F/join.tts.gsa.gov/new/main/positions).
On the page that opens, paste the template you copied earlier into the body.
Add a filename (at the top), and then follow the instructions in the template.

If the job you're posting doesn't have opens or closes dates yet, leave them
blank and you can add them later when you know. The job will show as "upcoming"
until then. Once you add dates, you **_do not_** have to edit the job again to
change it from upcoming to open to closed; it will updated automatically every
night.

### Tips that might be helpful

For the most part, the template should take care of all the formatting you will
need to do. However, if you have an unusual job that doesn't fit neatly into the
template, the site builder provides some tools that can be helpful when creating
your custom job posting page.

#### Dates

- If you want to include the opening date of a job, you can write this into your
  markdown to have it displayed nicely-formatted, based on the `opens` data
  at the top of the file:

  ```liquid
  {% include jobs/open_date.html %}
  ```

- Similarly, you can include the closing date. This one includes `at 11:59 pm ET`
  at the end:

  ```liquid
  {% include jobs/close_date.html %}
  ```

- For other dates, you can get a nicely-formatted output using the "human_friendly"
  filter. Be sure the date you provide is in the `YYYY-MM-DD` format in order
  for this to work:

  ```liquid
  {% 2023-01-01 | human_friendly %}
  ```

  ...outputs `Sunday, January 1st, 2023`

#### Alert boxes

- If you need to call a visitor's attention to some information, you can use a
  [USWDS alert box](https://designsystem.digital.gov/components/alert/). To make
  that easier, you can use this shortcut to put one on your page:

  ```liquid
  {% include alert.html
       heading="Alert heading, in big bold letters"
       body="The main content of your alert. Something the user needs to see."
       type="(info | warning | error | success)"
       icon="(true | false)"
  %}
  ```

  The `body` portion is required. The rest may be omitted. If you do not include
  `type`, the alert will be an info box. These values are permitted for `type`:

  - `info`
  - `warning`
  - `error`
  - `success`

  If you do not include `icon`, the alert
  icon will be displayed. You can turn off the icon by setting `icon="false"`.

## API

The Join TTS site has a [static API](https://join.tts.gsa.gov/jobs.json) that
provides a list of upcoming and open jobs. The static API is updated whenever
the site is rebuilt, which includes when jobs are added or updated and the
nightly automatic rebuild. As a result, the static API always reflects the same
information as the site.

## Automations

### Open and closed jobs

The Join TTS site is automatically redeployed every night. As a result, jobs
will automatically move from upcoming to open, and from open to closed, based on
the `opens` and `closes` dates in the job. Once both values have been set, the
job will go through the stages automatically. There is no need to manually
update them.

### Archived jobs

Once a job has closed, it will also be automatically archived. Archived jobs are
moved from the `/positions` folder into the `/archive` folder. A job is archived
by copying the job's ***BUILT*** directory from the `_site/join/` directory into
the `/archive` directory and adding this frontmatter:

```
---
layout: raw
title: "{{ the job title }}
```

Where `{{ the job title }}` is taken from the ***SOURCE*** file for the job. The
automatic procedure runs every night and creates a
[pull request](/18F/join.tts.gsa.gov/pulls) to make the archival permanent. It
is not necessary to archive a job for it to be removed from the front page.
Archival is just a tool to help keep the repo tidy and easy to navigate.

> **IMPORTANT NOTE:** The **BUILT** job is used for the archive so we can be
> certain it won't change in the future if we need to change the behavior of
> layouts, includes, or other components of the site. Archiving the original
> source could result in archives having different information in the future
> than they had at the time the position was posted.

## Development

### Running locally

This site is built with Jekyll using the
[uswds-jekyll](https://github.com/18F/uswds-jekyll) theme, so you'll find
configuration information there.

#### Docker

Docker is the preferred method of working on this site.

1. **Install Docker** : Try typing `docker version` in your terminal to see if
   it's already installed. If it's not, [Docker Desktop](https://www.docker.com/products/docker-desktop)
   is an easy way to install.

2. **Running the site**: `docker-compose up` then open http://127.0.0.1:4000

3. **Running tests**: `docker-compose run --rm web bundle exec rake test`

4. Debugging
   - SSH into the Docker container with `docker-compose run web /bin/bash`

#### Without Docker

Some developers have trouble getting Jekyll to run in Docker on certain Macs.
You may be able to run the site without Docker using Ruby directly. Getting the
right version of Ruby setup is an exercise left to the reader, but it should be
Ruby `2.7.*`.

Once Ruby is installed, run the following commands from the project directory:

```bash
gem install bundler

# Install gems into a local directory, to avoid global
# pollution. The .vendor directory is ignored from git
bundler config set path ./vendor

# Install dependencies. This could take a while.
bundle install

bundle exec jekyll serve --host 0.0.0.0 --livereload
```

Assuming everything goes well, you'll be able to view your development version
live at [http://localhost:4000](http://localhost:4000).

### Project structure

#### Layouts

The default `layout` is provided by the USWDS theme and is used as the basis for
the `page` and `job` layouts. There is also a `raw` layout which adds no markup
and outputs the contents alone.

| layout  | use                                                                                    |
| ------- | -------------------------------------------------------------------------------------- |
| default | The `index.md` page, represeting the landing page for the site                         |
| page    | All pages in the `pages/` directory. Adds a side navigation bar                        |
| job     | All pages in the `positions/` directory. Adds info sessions and a side navigation bar  |
| raw     | All pages in the `archive/` directory. Does not add any markup to the provided content |

#### Includes

There are three general-purpose includes and several more that are only meant to
be used on job pages. First, the general-purpose includes:

- **footer.html** - Used by the USWDS `default` theme to add a site footer.
- **meta.html** - Used by the USWDS `default` theme to add meta content to pages.
- **alert.html** - Used to display a [USWDS alert component](https://designsystem.digital.gov/components/alert/).
  The `body` property is required, but the others are optional. `type` defaults
  to `info` and `icon` defaults to `true`.

  ```liquid
  {% include alert.html
       heading="Alert heading, in big bold letters"
       body="The main content of your alert. Something the user needs to see."
       type="(info | warning | error | success)"
       icon="(true | false)"
  %}
  ```

There are also several includes that should only be used on jobs pages. These
includes make assumptions that the page will have the frontmatter that is
expected on jobs pages. They do not accept any arguments and take all of their
input from the `page` variable.

- **job/apply_button.html** - Using the job's opens/closes dates and application
  link, displays a button linking candidates to the actual application page if
  the job is open. Otherwise displays a link to subscribe to the newsletter.
- **job/appointment_type.html** - Displays appropriate text according to the
  job's appointment type.
- **job/close_date.html** - Using the job's closes date, displays a nicely
  formatted date, with `at 11:59pm ET` appended to the end.
- **job/full_info_on_usajobs.html** - Displays text indicating that the full
  information for this job is or will be available on USAJOBS. If there is an
  application link for the job, it will be included in this text.
- **job/info_sessions.html** Using the job's info sessions data, if any, to
  display the upcoming info sessions for the job.
- **job/key_objectives.html** Using the job's key objectives, if any, to display
  those key objectives. This exists primarily to help enforce consistency.
- **job/open_date.html** - Using the job's opens date, displays a nicely
  formatted date.
- **job/status_alert.html** - Using the job's opens/closes dates, displays an
  alert banner announcing the job's current status (upcoming, open, or closed).
- **job/salary_range.html** - Using the job's gs property, or the provided
  values, displays the salary range for the job.

  ```liquid
  {% include job/salary_range.html
       min="$10"
       max="$15"
  %}
  ```

  Both arguments are optional. If omitted, the salary range will be taken from
  step 1 and step 10, respectively, of the lowest and highest locality areas,
  also respectively. This is taken from the `_data/pay_ranges.yml` file and must
  be updated whenever GS pay tables are modified.

#### Filters

- `human_friendly` - this filter can be applied to Date objects to turn them
  into nicely formatted strings. E.g.:

  ```liquid
  {{ 2022-07-19 | human_friendly }}
  ```

  produces `Tuesday, July 19th, 2022`

- `open_positions` - this filter can be applied to a list of job postings and
  will return only the job postings that are currently open

- `upcoming_positions` - this filter can be applied to a list of job postings
  and will return only the job postings that are upcoming

- `job_posting_status` - this filter can be applied to a single job posting and
  will return a string indicating the posting's current status: `upcoming`,
  `open`, or `closed`. This is derived from the opens and closes data in the
  posting frontmatter. If either is missing or not a valid date, the job is
  `upcoming`.

- `future_info_sessions` - this filter can be applied to a list of info sessions
  (such as general info sessions) and will return a list of info sessions that
  are either today or in the future.

- `future_info_sessions_for_job` - this filter can be applied to a single job
  posting and will return a list of info sessions for the job that are either
  today or in the future.

- `string_is_link` - this filter can be applied to a text string and will return
  `true` if the string begins with `http://` or `https://`, or `false` otherwise.

## Public domain

This project is in the worldwide [public domain](LICENSE.md).

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

## Special Thanks

Special thanks to the team at [18F](https://18f.gsa.gov/) for their open and transparent model which benefits citizens, government and technology.

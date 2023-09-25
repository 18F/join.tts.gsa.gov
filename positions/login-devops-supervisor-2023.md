---
# This is the position title and the org that is doing the hiring. Please format
# your title as "Org: Position Title" (in quotes!). The organization should be
# a full name rather than an acronym. For example:
#   - U.S. Digital Corps, not USDC
#   - Presidential Innovation Fellows, not PIF
# The exception to this is a TTS role, for which you can just say TTS. 
#
# NOTE: Be sure to leave the "title: " part at the beginning! These line
# headings are how the site builder knows what the data is. For the rest of the
# frontmatter, please be careful not to delete the headings!
#🔻🔻🔻🔻🔻
title: "Login.gov: DevOps/Site Reliability Supervisory Engineer GS15"

# Put the opening and closing dates of your posting here, if you have them. The
# values you set here will be turned into user-friendly text in other parts of
# this post. Setting it here means you won't have to copy it over and over.
#
# These dates MUST be formatted as YYYY-MM-DD, where month and day are 2-digits.
# If the month number or day of the month are less than 10, add a 0 to the
# front (eg, May would be 05 instead of just 5). This is the only format the
# site builder automatically understands. Anything else will not be understood
# as a date.
#🔻🔻🔻🔻🔻
opens: 2023-09-25
closes: 2023-10-02
# These dates are also used to determine whether a position is upcoming, open,
# or closed. Here's how we decide:
#
# The job is upcoming if:
#   opens is empty OR
#   opens is in the future
#
# The job is open if:
#   opens is in the past OR
#   closes is in the future
#
# The job is closed if:
#   closes is in the past
#
# If either opens or closes is empty, missing, or not a date, the position is
# considered to be upcoming.

# If the position can also close when the maximum number of applications are
# received, include the maximum number of applications here. Remove this line
# or set the value to 0 if the job does not have an application cap.
#🔻🔻🔻🔻🔻
max applications: 400

# Is this a permanent or term appointment? Use either "perm" or "term". This
# will be used to fill in the appointment type on the page with consistent
# language.
#🔻🔻🔻🔻🔻
appointment type: perm

# Put the GS grade this position is being advertised at. For SES positions, set
# the level to 20.
#🔻🔻🔻🔻🔻
gs: 15
# The information you put here will be used to automatically pull salary range
# information.
#
# ⚠️⚠️⚠️ IMPORTANT NOTE: The automatic salary ranges are based on 100% remote
# positions and use the lowest and highest locality areas. If this position is
# not 100% remote, you will need to delete the automatic salary range and input
# it yourself down below. Look for 💰💰💰 to indicate where to do that.
#
# The salary range data is stored in this file:
#
#   _data/pay_ranges.yml
#
# The data file will need to be updated each year to reflect any pay changes.

# List key objectives here. Key objectives and sub-bullets will be displayed in
# the order they are listed here. You do not need to include key objective
# numbers. They will be added automatically.
#
# Each key objective starts on a new line and must start with a dash. It does
# not need to include a number at the beginning. A key objective can be spread
# across multiple lines if you want.
#
# To add sub-bullets to your key objective, add a new line below the key
# objective and indent it with spaces. (The number of spaces does not matter, as
# long as it is more than one). Then, add a dash and your sub-bullet.
# Sub-bullets can also take up multiple lines as long as all of the lines are
# indented the same amount so they line up.
#
# The placeholder information below shows an example of how to format the key
# objectives. This example indents sub-bullets with two spaces:
#🔻🔻🔻🔻🔻
key objectives:
  - Operate Login.gov with high standards of performance and reliability.
    - Define key success metrics for Login.gov infrastructure and drive improvement toward those measuresLead a cross-functional team of researchers, designers, and engineers to
    ensure product delivery.
    - Create and improve monitoring systems to collect data about the application, notify on any errors, and improve visibility/observability into application behavior.
    - Assist application teams in deploying code to the application regularly and as automatically as possible.
    - Lead incident response and mitigate site errors as they occur.
    - Lead postmortem discussions and drive continuous improvement to prevent similar outages.
    - Participate and coordinate on call shifts, serving as first-line support for incidents.
  - Build Login.gov’s infrastructure using modern cloud infrastructure techniques.
    - Use infrastructure-as-code (currently Terraform) and configuration management (currently Chef) to automate Login.gov’s AWS infrastructure
    - Review code and consult with other engineers on new features and their implications for site performance, reliability, and security for the security of Login.gov Ruby on Rails services.
    - Conduct load tests to ensure the application is ready to handle projected user traffic.
    - Improve automation and fault tolerance of the deployment process.
    - Drive long-term improvement in Login.gov system availability by removing single points of failure.
  - Supervise Platform Engineering within Login.gov team and outside partners.
    - Handle site issues from partner agencies, dealing both with engineers and non-engineers.
    - Oversee procurement process for tools and services used by Login.gov.
    - Advocate for modern information security principles throughout the system.
    - Balance agile development with mandatory government security compliance policies.
  -  Grow, develop & support growth of your team.
    - Research, develop, and encourage best practices in the key discipline(s) of your unit. Create space for experimentation and iteration.
    - Identify and fill knowledge gaps for strategic projects.
    - Identify Login.gov processes in need of improvement and oversee improvement activities. 
    - Promote collective success; make time for collaborative decision-making in project work; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
    - Champion diversity, equity, inclusion, and accessibility.
    - Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences.
    - Collaborate across roles and organizations to build strategic relationships, achieve common goals, and to resolve sensitive issues.
    - Work alongside talent specialists to continue hiring new engineers and project managers into the team.

# If there are any info sessions associated with this position, list them here.
# Each info session needs three pieces of information: the link, the date, and
# the time. See the placeholder below for an example of how to add an info
# session. If the position does not have any info sessions, you can just delete
# the lines that begin with spaces.
#
# IMPORTANT: The date MUST be formatted as YYYY-MM-DD, where the month and day
# are TWO digits. If the month or day is less than 10, add a zero to the front.
# The date is used to sort the info sessions on the page so they are shown
# nearest to furthest. Only info sessions schedule for the future will be shown.
#🔻🔻🔻🔻🔻
info sessions:
  - link: https://www.eventbrite.com/...
    date: 2023-02-13
    time: 1:30-2:30pm ET (10:30am -11:30am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/751014700
# This is the end of the frontmatter. After this line is Markdown.
---

{% comment ------------------------------------------------------------------ %}
If you want to include a closed/upcoming/open alert at the top of your page,
leave the following line. The status of the position will be determined by the
opens/closes dates at the top of this document

If you do not want the closed/upcoming/open alert, delete the line below that
says {% include job/status_alert.html %}
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}

{% include job/status_alert.html %}

## Basic information

Open to U.S. citizens or nationals (residents of American Samoa and Swains
Island). Subject to background check. {% include job/full_info_on_usajobs.html %}

**Supervisory status:** Supervisory

**Job title:** {{ page.title }}

{% comment ------------------------------------------------------------------ %}
The job title on USAJOBS is not always the same as the job title as we list it.
To help applicants find the right jobs on USAJOBS, put the title as it appears
on USAJOBS here.
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
**Official title in USAJOBS:** IT Specialist (OS/INFOSEC) 

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Number of vacancies:** 1

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Location:** Anywhere in the U.S. (remote)

{% comment ------------------------------------------------------------------ %}
💰💰💰
The salary range for the job can be populated automatically based on the GS
grade this posting is advertised at, based on the lowest and highest locality
rates.

💰💰💰
If this position is not remote and has geographic restrictions, you can instead
specify the salary min and max. For example, if the position is advertised at
GS-15 and the position location is only Washington, DC, then (using 2023 pay
rates):

Minimum:
  GS-15 Step 1: $172,075
Maximum:
  GS-15 Step 10: $183,500

So you would update the line below to look like this:

    {% include job/salary_range.html min="$172,075" max="$183,500" %}

To use the autoomatic salary ranges, leave the lines as-is.

🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
{% include job/salary_range.html min="" max="" %}

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location. Please note the maximum salary available
for the GS pay system is $183,500. For specific details on locality pay, please
visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/)
or for a salary calculator
[OPM's 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/). You can find more
information in our
[compensation and benefits section]({% link pages/compensation-and-benefits.md %}).

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Travel requirement:**
Occasional travel may be required up to 10%-20% per year.

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Work schedule:**
Full time.

{% comment ------------------------------------------------------------------ %}
The next {% include ... %} line will pull in the appropriate text based on the
appointment type for this job. If you need to use different text, delete that
line and write your custom text in its place.
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
{% include job/appointment_type.html %}

Learn more about the benefits of working at
[GSA](https://www.gsa.gov/portal/category/26702) and
[TTS]({% link pages/compensation-and-benefits.md %}).

## Role summary

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
Login.gov provides the public simple, secure access to multiple government services through one verified account. Login.gov has over 10 million users and is growing the team as we scale quickly.  Login.gov is committed to providing the best experience to everyone using government digital services and making accessing government services easy while combating fraud and abuse. 
Login.gov is seeking a qualified Platform Engineering Supervisor to join our infrastructure team. A qualified candidate will be able to immediately lead the team to: 
- Use platform engineering best practices to build and operate the Login.gov infrastructure at scale.
- Respond to incidents and lead incident response and postmortem review.
- Create automation in areas such as security compliance and code deployment.
- Meet with engineers and executives from prospective government agency customers to determine how Login.gov can adapt to meet their user identity needs.
The Login.gov team works in the open as a distributed, agile team. The core product is open source, hosted in modern cloud infrastructure, and built for scale. With over ten million users we aim to be the preferred entrypoint for all government digital services. Login.gov is used to access benefits, apply for government jobs, and collect funds awarded through grant programs.
As part of the Login.gov infrastructure engineering team, you will make government services more secure and accessible to the public.



## Key objectives

{% comment ------------------------------------------------------------------ %}
Key objectives are automatically converted from the information provided at the
top of the page. The automatic conversion helps ensure that all of our postings
are consistent. If you do not want to use the automatic template, delete the
line below that says {% include job/key_objectives.html %} and add your custom
content in its place.
{% endcomment --------------------------------------------------------------- %}

{% include job/key_objectives.html %}

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your
previous experience. Follow our
[guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Failure to provide required information may result in disqualification.

For each job on your resume, provide:

- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

**SPECIALIZED EXPERIENCE REQUIREMENTS:**

To qualify, you must have one (1) year of specialized experience at the next
lower GS-grade (or equivalent). 

## How to Apply

{% include job/apply_button.html %}

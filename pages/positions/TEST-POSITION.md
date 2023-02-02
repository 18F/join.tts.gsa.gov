---
permalink: test
layout: new-blank

# This is the position title. This will be shown as the first heading on the
# page and will be used as the link text on the front page for upcoming and
# open positions.
title: My test job
org: Login.gov

# Put the opening and closing dates of your posting here, if you have them. The
# values you set here will be turned into user-friendly text in other parts of
# this post. Setting it here means you won't have to copy it over and over.
#
# These dates are also used to determine whether a position is upcoming, open,
# or closed. Here's how we decide:
#
# upcoming:
#   opens is empty
#   opens is in the future
#
# open:
#   opens is in the past
#   closes is in the future
#
# closed:
#   closes is in the past
opens: 2023-01-07
closes: 2023-02-06

# List out which GS levels this position is being advertised at. Put each GS
# level on its own line, starting with two spaces, a dash, and another space
# before the level number. For example, if a job is advertised at GS-13, GS-14,
# and GS-15, it should look like this (without the # at the start):
#
# gs:
#   - 13
#   - 14
#   - 15
#
# If it is only advertised at GS-15, it should look like this:
#
# gs:
#   - 15
#
# The information you put here will be used to automatically pull salary range
# information. Each GS level listed here will be shown in the salary range
# table.
gs:
  - 14
  - 15

# List key objectives here. Key objectives and sub-bullets will be displayed in
# the order they are listed here. You do not need to include key objective
# numbers. They will be added automatically.
#
# Each key objective starts on a new line. It starts with two spaces and a dash.
# It does not need to include a number at the beginning. A key objective can be
# spread across multiple lines if you want, just make sure the other lines are
# indented so they line up with the first line.
#
# To add sub-bullets to your key objective, start with FOUR spaces and a dash.
# Sub-bullets can also take up multiple lines as long as all of the lines are
# indented so they line up.
#
# The placeholder information below shows an example of how to format the key
# objectives:
key objectives:
  - Implement the product vision and lead end-to-end product development
    - Lead a cross-functional team of researchers, designers, and engineers to
      ensure product delivery.
    - Identify and proactively monitor and address product risks.
    - Work with the team to set and meet quality standards for any product you
      build.
  - Build institutional expertise around product management
    - Share best practices and tools with your peers across the organization
    - Share lessons learned from your work at Login.gov with peers and leaders
      to help guide our approach to digital transformation.

# If there are any info sessions associated with this position, list them here.
# Each info session needs three pieces of information: the link, the date, and
# the time. See the placeholder below for an example of how to add an info
# session. If the position does not have any info sessions, you can just delete
# the lines that begin with spaces.
#
# Example:
# info sessions:
#   - link: https://www.eventbrite.com/...
#     date: 2023-02-03
#     time: 1:30-2:30pm ET (10:30am-11:30am PT)
#
# IMPORTANT: The date MUST be formatted as YYYY-MM-DD, where the month and day
# are TWO digits. If the month or day is less than 10, add a zero to the front.
# (This is called the ISO 8601 standard format.) We use the date to sort the
# info sessions on the page so they are shown nearest to furthest. Only info
# sessions schedule for the future will be shown.
info sessions:
  - link: https://www.eventbrite.com/e/us-digital-corps-deputy-director-info-session-tickets-519800426067
    date: 2023-02-03
    time: 1:30-2:30pm ET (10:30am -11:30am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
application link: https://usajobs.gov/job/apply/whatever
---

{% comment ================================================================== %}
If you want to include a closed/upcoming/open alert at the top of your page,
leave the following line. The status of the position will be determined by the
opens/closes dates at the top of this document

If you do not want the closed/upcoming/open alert, delete the line below that
says {% include job/status_alert.html %}
{% endcomment =============================================================== %}

{% include job/status_alert.html %}

## Opportunity overview

content goes here

## Role summary

content goes here

## Key objectives

{% comment ================================================================== %}
Key objectives are automatically converted from the information provided at the
top of the page. The automatic conversion helps ensure that all of our postings
are consistent. If you do not want to use the automatic template, delete the
line below that says {% include job/key_objectives.html %} and add your custom
content in its place.
{% endcomment =============================================================== %}

{% include job/key_objectives.html %}

## Basic information

**Location:**
Virtual (100% Remote)

**Salary Range:**

{% comment ================================================================== %}
The salary range for the job can be populated automatically based on the GS
levels this posting is advertised at. For each GS level, the template will show
the minimum and maximum possible salary for that GS level. If you need to
customize how the salary is displayed, delete the line below that says
{% include job/salary_range.html %} and put in your custom content.
{% endcomment =============================================================== %}

{% include job/salary_range.html %}

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location.

You can find more information about this in the [compensation and benefits
section on our site](/compensation-and-benefits/).

For specific details on locality pay, please visit
[OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/)
or for a salary calculator
[OPM's 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$183,500**.

Note: You may not be eligible for the maximum salary as it is locality
dependent. Please refer to the maximum pay for your locality.

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains
Islands).

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year.

**Security clearance:**
Public trust. Background investigation required.

**Work schedule:**
Full time.

**Appointment type:**
This is a term limited appointment with the ability to extend for a total of
eight years. 

**Job Family (Series):**
2210 IT 

**Employee benefits:**
[Learn more about the benefits we offer.](https://join.tts.gsa.gov/compensation-and-benefits/)
  - Health insurance (choose from a wide range of plans)
  - Life insurance coverage with several options
  - Sick leave and vacation time, including 10 paid holidays per year
  - Thrift Savings Plan (similar to a 401(k) plan)
  - Flexible work schedules and telework
  - Transit and child care subsidies
  - Training and development
  - Flexible spending accounts
  - Long-term care insurance
  - Training and development
  - Direct Deposit of salary check to financial organization required.

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your
previous experience. Follow our
[guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the
required information. Failure to provide required information may result in
disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

All applications will be reviewed by a panel of subject matter experts against a
scoring rubric created for this role. In order to properly be able to evaluate
your previous experience, we recommend being as detailed as possible in your
resume and following our general guidance on creating federal style resume.

**BASIC REQUIREMENTS**  

Have IT-related experience demonstrating EACH of the four competencies listed below:
- Attention to Detail - This skill is generally demonstrated by assignments
  where the applicant investigates and evaluates “state of the art” technology
  of the industry.
- Customer Service - This skill is generally demonstrated by assignments where
  the applicant confers with users to evaluate the effectiveness of, or identify
  the need for, computer programs or management systems.
- Oral Communication - This skill is generally demonstrated by assignments where
  the applicant persuades others to take a particular course of action or to
  accept findings, recommendations, changes, or alternative viewpoints.
- Problem Solving - This skill is generally demonstrated by assignments where
  the applicant identifies and accommodates technology and resource constraints;

AND

To qualify, you must have one (1) year of specialized experience at the next
lower GS-grade (or equivalent).  Specialized experience is defined as follows:

**GS-15 qualifications:**
- Experience leading the development, delivery or integration of highly complex
  digital products or services.
- Experience applying leading industry practices in the design, development and
  delivery of digital products or services. This experience may include
  experimentation based frameworks, iterative development methodologies,
  user-centered design, planning tools or continuous delivery methodologies.
- Experience crafting or creating product vision, strategy or road maps.
- Experience working with cross-functional teams.

## How to Apply

{% comment ================================================================== %}
Maybe an alert for special cases?
{% endcomment =============================================================== %}

Submit a complete online application prior to {% include job/close_date.html %}.
Please fill out all applicable fields.

{% comment ================================================================== %}
The "Click here to apply" button is automatically populated with the application
link provided at the top of the document. It is formatted so that it conforms to
USWDS. If you don't want to use the standard button, delete the line below that
says {% include job/apply_button.html %} and put in your custom content.
{% endcomment =============================================================== %}

{% include job/apply_button.html %}

**Need Assistance in applying or have questions regarding this job opportunity,
please email the TTS Talent Team at** <jointts@gsa.gov>.


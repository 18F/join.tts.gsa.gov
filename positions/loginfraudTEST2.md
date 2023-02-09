---
################################################################################
#                                                                              #
# INSTRUCTIONS                                                                 #
#                                                                              #
# -----------------------------------------------------------------------------#
# If you are editing this file on GitHub, first make sure you are creating a   #
# new file, and are not editing the template file! To create a new file, go to #
# https://github.com/18F/join.tts.gsa.gov/new/main in your browser.            #
#                                                                              #
# On the new file page, you can paste in the contents of the template file.    #
# Also be sure to type in a filename in the small textbox above the file body  #
# box. You will see the text join.tts.gsa.gov / [ Name your file ...] in main. #
# Type your filename into that box.                                            #
#                                                                              #
# NOTE ABOUTE FILENAMES: Your filename should be descriptive about the job     #
# posting that you're creating, and it MUST end with ".md". Don't stress out   #
# about filenames too much, though. They are used for the URL, which can help  #
# people make sure they're on the right page, but most users will probably not #
# notice the URL. Instead, try to make it meaningful to you and others on the  #
# Talent Team so you can find it easily in the future if you need to edit it.  #
#                                                                              #
# For example, if you are posting a job for a content designer, you might      #
# choose names like:                                                           #
#                                                                              #
#    tts-content-designer-2023.md                                              #
#    login-content-designer-2023.md                                            #
#    content-designer-2023.md                                                  #
#    content-designer-june-2023.md                                             #
#                                                                              #
# For the rest of the file, follow the directions as you go, but here are a    #
# couple more tips to help you as you work:                                    #
#                                                                              #
# You are currently inside the portion of the document called "frontmatter."   #
# The frontmatter is the part that starts with just "---" on the first line    #
# and ends with another line that only contains "---" (further down). This     #
# part of the document is not DIRECTLY shown to the user. Instead, this is     #
# where you can set data that will be shown to the user in other parts of the  #
# page, or data that is used to configure how the page is displayed. For       #
# example, the opens and closes dates are set in the frontmatter, but they     #
# will never be shown to the user the way you type them in. Instead, they are  #
# used to determine whether the posting is upcoming, open, or closed, and they #
# will be turned into more human-friendly text when they are displayed.        #
#                                                                              #
# Within this frontmatter block, lines that begin with a hash (#) symbol are   #
# comments. They do not contribute to the web page at all, but they are a nice #
# way of explaining what the data in the frontmatter is. It is okay to delete  #
# these comments when you are done, and it is also okay to leave them if they  #
# might be helpful when editing the page later.                                #
#                                                                              #
# The parts you need to fill out are marked with five red triangles above them #
# like this:                                                                   #
#🔻🔻🔻🔻🔻                                                                   #
#                                                                              #
# After the frontmatter, the rest of the document is in a special version of   #
# Markdown used by the website builder. You will see comments in that section  #
# as well, but they will look like this:                                       #
#                                                                              #
#    {% comment ----------------------------------------------------------- %} #
#    The contents in between these two lines are comments and do not           #
#    contribute to the web page.                                               #
#    {% endcomment -------------------------------------------------------- %} #
#                                                                              #
# It is safe to remove the Markdown comments as well.                          #
#                                                                              #
################################################################################

# This is the position title and the org that is doing the hiring. These will be
# combined into the the first heading on the page and will be used as the link
# text on the front page for upcoming and open positions.
#🔻🔻🔻🔻🔻
title: Login.gov Fraud GS-15
org: Login.gov

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
opens: 2023-02-14
closes: 2023-02-21
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
#
# If either opens or closes is empty, missing, or not a date, the position is
# considered to be upcoming.

# If the position can also close when the maximum number of applications are
# received, include the maximum number of applications here. Remove this line
# or set the value to 0 if the job does not have an application cap.
#🔻🔻🔻🔻🔻
max applications: 400

# List out which GS levels this position is being advertised at. Put each GS
# level on its own line, starting with two spaces, a dash, and another space
# before the level number.
#🔻🔻🔻🔻🔻
gs:
  - 13
  - 14
  - 15
#
# For example, if a job is advertised at GS-13, GS-14, and GS-15, it should look
# like this (without the # at the start):
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
# NOTE: For SES positions, set the level to 20.
#
# The information you put here will be used to automatically pull salary range
# information. Each GS level listed here will be shown in the salary range
# table. GS grades will be listed in ascending order.
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
# NOTE: This is just the information about key objectives. They will be included
# in the page further down, so you will still have a chance to rearrange them
# on the page if you want to!
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
#🔻🔻🔻🔻🔻
key objectives:
  - Lead and evolve Login.gov’s anti-fraud practice
    - Develop a roadmap for anti-fraud considering best practices in fraud prevention.
    - Set program-wide goals for anti-fraud initiatives.
    - Assess and mitigate identity fraud risk by working with product, platform, and security teams.
    - Oversee alert/case quality and production to meet/improve Service Level Agreements (SLAs).
    - Apply knowledge of software product delivery in a DevOps environment.
  - Provide subject matter expertise on identity fraud controls to Login.gov leadership
    - Create privacy-preserving identity fraud detection, mitigation, investigation, and redress practices. 
    - Provide guidance on privacy-preserving device and identity verification technologies.
    - Create identity theft investigative and redress workflows.
    - Understand how suspicious actors can steal or compromise Login.gov accounts
    - Communicate with internal and external partners to share Login.gov’s fraud posture, priorities, risks, and operational processes.
    - Act as subject matter expert, understanding how to protect users privacy while building out identity fraud controls. 
  - Effectively collaborate with distributed, agile teams
    - Share knowledge and work collaboratively to integrate anti-identity fraud principles into product and engineering practices. 
    - Participate in regular retrospectives and provide feedback to help improve the way the team works.
    - Promote a work environment of respect, diversity, equity, inclusion, accessibility, mutual support, continuous learning, and commitment to customer / partner needs. 

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
# The date is used to sort the info sessions on the page so they are shown
# nearest to furthest. Only info sessions schedule for the future will be shown.
#🔻🔻🔻🔻🔻
info sessions:
  - link: https://www.eventbrite.com/e/tts-hiring-information-session-tickets-483362469157
    date: 2023-02-16
    time: 12:30-1:30pm ET (9:30-10:30am PT)
#
# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/701405200

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

## Opportunity overview

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
This opportunity is located in the Technology Transformation Services (TTS) Solutions Division’s Login.gov group. Our remote-first team comprises experts across product development, software engineering, cybersecurity, and platform engineering. 

Login.gov is a secure sign-in service created for the public to access participating government agency sites, products, and services. At its core, Login.gov is both an authentication and identity verification service available to all levels of government: federal, state, and local.

Login.gov has over 30 agency partners. Our product is integrated with over 300 live applications and services including 12 Cabinet-level agencies such as the Department of Defense, Department of Homeland Security, and the Department of Energy. Over 40 million people have signed up to use Login.gov, across all applications.

## Role summary

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
As a Fraud Technical Expert, you will report to Login.gov’s product security branch chief. In this fully-remote position, you will provide strategic guidance to Login.gov’s leadership team, helping to set objectives for Login.gov’s identity fraud program. You will lead efforts associated with improving Login.gov’s privacy-preserving fraud controls, investigative procedures, and redress procedures. You will research emerging threats and work closely with Login.gov’s security team to build threat models and to plan and conduct test exercises.

If you have a passion for developing identity theft solutions that preserve user privacy, this role could be a great fit for you. 

## Key objectives

{% comment ------------------------------------------------------------------ %}
Key objectives are automatically converted from the information provided at the
top of the page. The automatic conversion helps ensure that all of our postings
are consistent. If you do not want to use the automatic template, delete the
line below that says {% include job/key_objectives.html %} and add your custom
content in its place.
{% endcomment --------------------------------------------------------------- %}

{% include job/key_objectives.html %}

## Basic information

**Location:**
{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
Virtual (100% Remote)

**Salary Range:**

{% comment ------------------------------------------------------------------ %}
💰💰💰
The salary range for the job can be populated automatically based on the GS
levels this posting is advertised at. For each GS level, the template will show
the minimum and maximum possible salary for that GS level, based on the lowest
and highest locality rates.

💰💰💰
If this position is not remote and has geographic restrictions, you can instead
write your salary ranges below to have them formatted into a salary range table.
To do that, update the lines below the next set of red triangles to include the
minimum and maximum salary for each GS level that the position is advertised at,
in order from lowest GS level to highest.

For example, if the position is advertised at GS-14 and GS-15 and the position
location is only Washington, DC, then (using 2023 pay rates):

Minimums:
  GS-14 Step 1: $132,368
  GS-15 Step 1: $172,075

Maximums:
  GS-14 Step 10: $155,700
  GS-15 Step 10: $183,500

So you would update the lines to look like this, with values ordered by GS level
and separated by semicolons and inside the quotation marks:

    {% assign min_ranges = "$132,368; $155,700" %}
    {% assign max_ranges = "$172,075; $183,500" %}

To use the autoomatic salary ranges, leave the lines as-is.
{% endcomment --------------------------------------------------------------- %}

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
{% assign min_ranges = "" %}
{% assign max_ranges = "" %}

{% include job/salary_range.html min=min_ranges max=max_ranges %}

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location.

You can find more information about this in the [compensation and benefits
section on our site]({% link pages/compensation-and-benefits.md %}).

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
Permanent hire. This is not a term limited opportunity. Applicants who are selected for this opportunity will have career conditional status in the federal government for their first three years of employment and transition to career after three years. This means you will be a permanent federal employee with no expiration date.  

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
  - Experience with identity fraud detection, mitigation, investigation, redress or analytics practices. 
  - Experience assessing, developing, implementing, or improving strategies for identity theft investigative and redress workflows.
  - Experience working with product, platform, or security teams to assess or mitigate identity fraud risk.
  - Experience working with cross-functional teams.
  - Experience building alignment with stakeholders.

## How to Apply

{% comment 🟦🟦🟦 FOR GREG 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 %}
Maybe an alert for special cases?
{% endcomment 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 %}

{% include job/apply_button.html %}
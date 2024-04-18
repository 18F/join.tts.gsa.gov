---
################################################################################
#                                                                              #
# INSTRUCTIONS: TTS JOB TEMPLATE                                               #
#                                                                              #
# -----------------------------------------------------------------------------#
# If you are editing this file on GitHub, first make sure you are creating a   #
# new file, and are not editing the template file! To create a new file, go to #
# https://github.com/18F/join.tts.gsa.gov/new/main/positions in your browser.  #
#                                                                              #
# On the new file page, you can paste in the contents of the template file.    #
# Also be sure to type in a filename in the small textbox above the file body  #
# box. You will see the text join.tts.gsa.gov / [ Name your file ...] in main. #
# Type your filename into that box.                                            #
#                                                                              #
# NOTE ABOUT FILENAMES: Your filename should be descriptive about the job      #
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
title: "Office of Solutions: FedRAMP Director"

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
opens: 2024-04-16
closes: 2024-04-17
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
  - You will expand the size and diversity of the FedRAMP marketplace.
    - Identify and understand the present and future needs of the federal government, and focus the FedRAMP program on bringing into government the cloud service providers that will safely help agencies meet those needs. 
    - Increase the capacity and speed of the FedRAMP ecosystem, including by working collaboratively with federal agencies and others to create more channels and processes for authorizing cloud providers.
    - Serve as the primary spokesperson for the FedRAMP program with industry, government, and the media.
    - Manage relationships and forge partnerships with key government partners, including the FedRAMP Board, the Executive Office of the President, the Cybersecurity and Infrastructure Security Agency, the National Institute of Standards and Technology, and others.
  - You will accelerate and simplify the FedRAMP process for federal agencies and cloud service providers.
    - Orient FedRAMP around agile delivery principles, by enabling cloud providers to operate using secure agile software development practices and rapid delivery of security updates and features.
    - Transition FedRAMP to an automation-first, API-driven program, in its internal operations as well as through customer-facing services for automated self-validation and submission.
    - Establish and publish customer-oriented key performance metrics for the program, and drive program improvements along those metrics to demonstrate visible progress to public and government stakeholders.
    - Continuously optimize the fundamental processes of the FedRAMP program, as well as the processes agencies and third parties operate to participate in FedRAMP.
  - You will grow FedRAMP’s reputation as a trusted independent evaluator of cloud services. 
    - Protect and build the FedRAMP brand as a meaningful and rigorous security and risk management process, whose authorizations can consistently be presumed adequate for use by any federal agency.
    - Build the overall technical and information security expertise of the FedRAMP program, through recruitment, training, and ongoing staff development.
    - Keep FedRAMP focused on the biggest security threats to the federal government and the commercial cloud ecosystem.
    - Ensure the program maintains oversight of any third-party organizations involved in the assessment and review of cloud services.


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
  - link: https://gsa.zoomgov.com/meeting/register/vJItd-2spzgvEkQMmqV2Z4zY6vVFip9_AJ4
    date: 2024-04-01
    time: 2:30-3:30pm ET (11:30am -12:30pm PT)

    
  - link: https://gsa.zoomgov.com/meeting/register/vJIsdeyhrToiExlQxCkEGTyMHwMUh4m1lr8
    date: 2024-04-03
    time: 12:30-1:30pm ET (9:30am -10:30am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/786815800
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
**Official title in USAJOBS:** IT Program Manager PLCYPLN/INFOSEC

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

    {% include job/salary_range.html min="$172,075" max="$191,900" %}

To use the autoomatic salary ranges, leave the lines as-is.

🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
{% include job/salary_range.html min="" max="" %}

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location. Please note the maximum salary available
for the GS pay system is $191,900. For specific details on locality pay, please
visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/)
or for a salary calculator
[OPM's 2024 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2024/general-schedule-gs-salary-calculator/). You can find more
information in our
[compensation and benefits section]({% link pages/compensation-and-benefits.md %}).

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Travel requirement:**
Occasional travel may be required up to 15% per year.

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
The Director of FedRAMP leads the federal government’s initiative to make it straightforward and safe for Federal agencies to use modern cloud-based software and infrastructure to deliver on their mission. 

The position serves as the principal leader and point of contact for the Federal Risk Management and Authorization Program (FedRAMP). 

FedRAMP was created in 2011 to accelerate the government’s use of commercial cloud services, by creating a standardized process for security review and authorization and making security information easily available to agencies. More generally, FedRAMP operates as a bridge between the public and private sectors, to help companies that offer innovative services navigate federal security expectations and to bring the best of the private sector into government. 

Since its creation, the cloud sector has changed substantially and agency needs have focused more on software-as-a-service products. In recent years, Congress and the White House have updated the program’s mission and authorities, with a mandate to scale and modernize the program, while continuing to ensure the high bar of security that the public expects around government data and operations.

The Director will oversee FedRAMP’s strategy to achieve this. The position is a dynamic role that will engage with government and private sector stakeholders, make key policy and operational decisions affecting government-wide use of cloud products, while supervising program staff and resources. The role will require information security expertise, a vision for change, and entrepreneurial spirit to position the program as a cybersecurity leader, maintain trust in the FedRAMP brand, and operate efficiently and consistently.


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
lower GS-grade (or equivalent). Specialized experience is defined as follows:

- Developing or leading the development of cloud-based infrastructure and software in commercial or government cloud environments.
- Implementing or leading the implementation of information security design and architecture principles.
- Working with information security compliance frameworks, such as FedRAMP, FISMA, SOC2, PCI, ISO 27001, or other relevant frameworks used in the public or private sector.
- Building coalitions across distinct stakeholder groups, such as customers, partners, and oversight or governance bodies.

## How to Apply

{% include job/apply_button.html %} Please choose cybersecurity or executive management from the role list of options to be notified about this position. This position will open for application on USAJOBS on Tuesday, 4/16/24. The application link will update on Tuesday. 

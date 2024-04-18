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
title: "10x: Principal Software Engineer"

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
opens: 2024-04-18
closes: 2024-04-25
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
max applications: 0

# Is this a permanent or term appointment? Use either "perm" or "term". This
# will be used to fill in the appointment type on the page with consistent
# language.
#🔻🔻🔻🔻🔻
appointment type: term

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
  - You will contribute high-quality, well-tested, maintainable code across an entire project lifecycle, using modern software development best practices.
    - Practice and enthusiastically share engineering methodologies and tools throughout all stages of the project lifecycle.
    - Use usability research, analytics, and other metrics to influence project planning and design.
    - Participate in preparing yes or no pitch recommendations for additional funding when your project come to the end of each phase
    - Participate in code review, architecture discussions, and feature prioritization.
    - Take pride of ownership in all projects you touch; leave code and docs better than you found them.
    - Contribute to shared best practices for documentation, tests, style fixes, accessibility, performance, security, etc.
    - Deliver code that is easy to deploy, update, and monitor by ensuring the tooling for this is present at the beginning of the software development cycle or by introducing tooling into an existing project as needed.
  - You will participate as part of the engineering team, practicing and enthusiastically share agile methodologies throughout all stages of the project lifecycle. 
    - Work within a distributed multidisciplinary agile team(s) by participating in constructive discussions, sharing knowledge openly, and demonstrating value (story-telling) for technical and non-technical contributions. 
    - Support a safe and inclusive workplace as well as a positive team culture where diversity and individual differences are valued and leveraged.
    - Provide visibility into progress, communicate blockers and challenges, and ask for help when necessary.
    - Understand elements of agile methodology (scrum, kanban, etc) without being overzealous about any particular tool or strategy.
    - Practice human centered design, user testing, feature prioritization, DevOps, and other foundational best-practices of modern software product development. 

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
application link: https://www.usajobs.gov/job/787345100
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

**Supervisory status:** Non-Supervisory

**Job title:** {{ page.title }}

{% comment ------------------------------------------------------------------ %}
The job title on USAJOBS is not always the same as the job title as we list it.
To help applicants find the right jobs on USAJOBS, put the title as it appears
on USAJOBS here.
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
**Official title in USAJOBS:** IT Specialist (APPSW)

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
  GS-15 Step 1: $143,736
Maximum:
  GS-15 Step 10: $191,900

So you would update the line below to look like this:

    {% include job/salary_range.html min="$143,736" max="$191,900" %}

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
10x, the federal government's very own venture studio, is seeking a versatile and talented individual to join our team as a Software Engineer. In this role, you will have the unique opportunity to work on a diverse range of projects combining your skills in software development with research, product and design-thinking to create exceptional digital experiences for the American public. 
Check out 10x website, process, and our public project board to see the types of projects we work on. If you are committed to improving government services for all who need them, and to helping the civil servants who deliver those services, this is the position for you. 

**Position Summary:**

As a Software Engineer at 10x, you will be a researcher, product designer, builder and a catalyst. As a rotating member of various product teams, you will solve large complex problems while spreading a user-centered, open, and transparent work culture. You might be writing code one day, going to meet with members from partner agencies another day, and launching a new product that will impact the lives of Americans across the country the next week. 10x is an open source team, so most of what you work on will be open source.
This role is perfect for you if you have a multidisciplinary skill-set and care deeply about building great public-facing digital products and services. You should have a deep interest in AI and other emerging technologies, with a focus on improving how the government builds technology, makes sure that new technologies serve the best interests of the public, and appropriately manages new types of risks. 

**10x’s relationship to AI:**

Currently, around 15% of the 10x investment pipeline entails potential AI solutions, though we expect this number to grow steadily over time. Put another way, 15% of our work relates to problems which might admit to solutions involving ML, NLP and related technologies, but which also might be effectively solved with more conventional tools. 

As a principal engineer at 10x, you will be expected to know the difference, and to be capable of bringing software solutions from concept through MVP and to validation in the market, regardless of the underlying technology required. 
The majority of 10x work entails figuring out if a problem is worth solving, or if a particular solution is likely to be fruitful. Additionally, 85% of our current pipeline is unlikely to benefit from AI tooling, so if you’re looking for a place to spend the majority of your time building AI solutions, this probably isn’t the right fit.
We are not looking for AI evangelists, nor are we looking for AI skeptics. We’re looking for civic technologists with a passion for choosing the right tool for the job and a deep well of experience making difficult, fuzzy, early product decisions.

10x is one of a small number of teams tasked with improving technology acumen across the federal government. The opportunities and challenges presented by using AI in day-to-day government operations are myriad, but the technical talent needed to be able to identify the correct technology stack for any solution is rare and unevenly distributed. The proliferation of capable foundational AI models has created a need for software engineers with a strong product focus to be able to serve on multi-disciplinary teams and bring the knowledge necessary to help guide the technical discovery, feasibility and risk management work, in addition to development, that will help 10x figure out the most appropriate technology around which to build a given product or service.
Make no mistake, opportunities to deploy AI foundation models in government already exist. Whether we are looking at using NLP tools to ascertain the public’s intent through plain language interfaces, exploring opportunities to deliver heretofore impossible document automation tools to government staff, or providing semantic search and summarization for niche sets of documents, there are prototypes to be built, assumptions to tested, products to be designed and risks to be actively managed today.

**Skill set:**

You’ll need to be capable of building scalable web applications from the ground up, you should have decent experience with devops best practices and a reasonable familiarity with security, privacy and web accessibility best practices. You should understand the basics of building ETL pipelines, and you should be unafraid to dive into integrating with legacy systems written in unfamiliar languages and which use unfamiliar application patterns or infrastructure (though this is relatively rare). 

10x’s core languages are Ruby, Python, JavaScript, and Go. You should have extensive experience with at least one of those languages and should be at least reasonably comfortable in python. You should be proficient in web development, relational databases, and using Unix-like operating systems. You should understand engineering best practices such as source control, automated testing, continuous integration and deployment, and peer review. You should be excited to build your expertise in security, privacy and compliance best practices. Good candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment. 

Additionally, you should be familiar with accessing AI foundation models via API interfaces and with common LLM workflow design patterns such as query routing, DAG-defined multi-step flows and tool-enabled workflows. You’ll also be expected to be able to stand-up basic prototypes using open source models such LLaMa-2 variants for the purpose of running spikes on technical feasibility and discovery. You should be familiar with the trade-offs and general capabilities of fine-tuning, such as the balance between improving niche query performance and the loss of general query performance. Everything else can be learned along the way.

The best candidates will have experience participating in challenging, but productive, small-group discussions about key directional decisions for products and services that have not yet proven their value. 
As a software engineer on the 10x Delivery Team, your duties will extend to all phases of the development cycles for all types of digital products and services, both AI-enabled and not.


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

- Experience delivering projects, tools or products as part of an engineering team. This includes experience developing or architecting complex modern web applications or cloud infrastructure using approaches such as test-driven development, continuous integration & deployment, or distributed version control such as github. Candidates should demonstrate experience providing project leadership and experience with agile development methodologies.


## How to Apply

{% include job/apply_button.html %}

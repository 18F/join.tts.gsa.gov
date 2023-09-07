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
title: "Data & Analytics Portfolio: Product Manager"

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
opens: 2023-10-01
closes: 2023-10-08
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
max applications: 300

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
  - Build or steward the product vision and lead end-to-end product development
    - You are an experienced product manager who can unite vision and execution to lead an interdisciplinary team in delivering the right value to the right people. You’re skilled at defining a meaningful end goal to galvanize your team, whether that means generating a product vision and strategy with your team or helping agency partners articulate and focus their vision and strategy.
      - Establish a vision and ensure all team members and stakeholders have a shared understanding of product objectives, goals, and metrics
      - Analyze market demand and market fit, do competitive analysis, and guide build vs. buy or reuse approaches
      - Create a product strategy and roadmap and develop a communications strategy supporting product goals
      - Identify and proactively monitor and address product risks
      - Lead or facilitate a cross-functional team of researchers, designers, and engineers to ensure the right product is delivered to the right audience
      - Work with the team to set and meet quality standards for any product you build
      - Use evidence (user research, analytics, and other metrics) to make product decisions, ask “why” a lot, and recognize the difference between “we can’t do that because of bureaucracy” and “we can’t do that because of the law”
      - Energize and motivate the team by recognizing successes and learning from failures
      - Ensure that products comply with federal regulations such as the 21st Century IDEA Act, the Federal Information Security Modernization Act (FISMA), and Section 508 of the Rehabilitation Act of 1973.
  - Support agency partners in delivering results to the public
    - As a product manager at TTS, you’ll uphold a modern product development mindset and make sure every project you touch is set up for sustained long-term success. As part of that, you’ll share your expertise and experience with your teammates and stakeholders in order to ensure that you are not a single point of success.
      - Help partners understand how to deliver value, rather than features, to their users
      - Help teammates and stakeholders navigate complex bureaucratic relationships to bring stakeholders together around a common product vision and strategy
      - Advocate for and explain agile, open source, and user-centered principles so that teammates, stakeholders, and government partners understand the value these practices bring
      - Improve the government’s product management capacity by coaching and mentoring more junior product managers
      - Work with partners to establish relationships with their security, operations, and IT teams that will help sustain the product in the long term
      - Work with teammates and stakeholders to develop communications strategies to sustain the product in the short and long term
  - You’ll meet customer expectations, along with personal and organizational goals. You’ll produce high-quality results by applying technical knowledge, analyzing problems, and calculating risk.
    - Hold yourself and your team accountable for measurable, high-quality, timely, and cost-effective results
    - Demonstrate your credibility in your area of expertise, deliver high-quality work, and accept responsibility for mistakes
    - Meet the needs of internal and external customers
    - Make well-informed, effective, and timely decisions
    - Identify and analyze problems in a constructive manner
    - Explain technical issues and concepts clearly to both technical and non-technical audiences
  - Lead in your program area(s)
    - While the entire team will have and continually enhance core expertise in technology and organizational modernization, each team member will also further hone one or more Focus Areas that contribute to the collective, cross-functional capabilities within TTS’s Data & Analytics Portfolio.
      - Data.gov is the United States government's open data website. It provides access to datasets published by agencies across the federal government. Data.gov is intended to provide access to government open data to the public, achieve agency missions, drive innovation, fuel economic activity, and uphold the ideals of an open and transparent government. As an Open Data Product Manager for Data.gov, your responsibilities will include -
        - Product Strategy & Development - Developing and maintaining a product strategy for Data.gov, ensuring alignment with broader federal open data efforts, the OPEN Government Data Act, and agency objectives and priorities.
        - Design & Analytics Integration - Overseeing the product design process, working closely with UX/UI Designers to create intuitive and user-friendly features for Data.gov, and managing the design and delivery of features such as data visualization tools, dashboards, and reporting systems.
        - Stakeholder Engagement & Data Management - Establish and maintain strong relationships with internal and external stakeholders; ensuring effective communication of product updates, progress, and performance. Represent Data.gov in interagency efforts addressing issues such as metadata schemas applicable to federal data.
      - The Feedback Analytics Program develops and manages government-wide services that collect and report quantitative and qualitative customer feedback to aid service improvement and decision-making. This includes methods to evaluate progress toward achieving customer experience goals and inform continual improvements to service design and delivery. As a Product Manager for Feedback Analytics, your responsibilities will include - 
        - Product Strategy & Development - Developing and maintaining a product strategy for Feedback Analytics products including the use cases served by Touchpoints, ensuring alignment with broader federal feedback and public experience initiatives, the 21st Century Digital Experience Act, and agency objectives and priorities.
        - Design & Analytics Integration - Overseeing the product design process, working closely with UX/UI Designers to create intuitive and user-friendly features for Feedback Analytics, and managing the design and delivery of features such as data visualization tools, dashboards, and reporting systems.
        - Stakeholder Engagement & Data Management - Establish and maintain strong relationships with internal and external stakeholders; ensuring effective communication of product updates, progress, and performance. Represent Feedback Analytics in interagency efforts addressing issues such as metadata schemas applicable to federal data.

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
application link: https://usajobs.gov/job/apply/whatever
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
**Official title in USAJOBS:** IT Specialist - DATAMGT-INET

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
TTS is hiring for the role of GS-15 Product Managers to support our Data & Analytics Portfolio. Several business units within TTS are hiring for this role. Product Managers are crucial to TTS significantly improving our products, platforms, and services. This is an opportunity to make a huge difference in the lives of the public and other federal agencies. This page contains a high-level summary of the roles we are trying to fill.

These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.

TTS is looking for talented product managers who will help our partner agencies deliver better digital services to the public. You’ll lead cross-functional teams to solve large, complex problems and deliver user-centered products using agile methodologies and modern software development practices.

TTS is looking for product managers in both client services and product development roles, including:
  - Leading cross-functional development teams to own and grow existing, in-market products
  - Joining cross-functional teams to partner with other government agencies and help them deliver mission-critical software
  - Partnering with government agencies evolve their culture and establish sustainable best practices for product development

These roles will be a great fit for you if you are a:
  - Strategic thinker who is comfortable defining a compelling vision and designing a measurable strategy to achieve that vision
  - Decisive leader who knows how to motivate cross-functional teams to build the right thing
  - Strong executor that is able to deliver results to agencies and the public

Our ideal candidates will be equally excited about sticky technical issues and intricate human ones. The strongest candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment.

If you are interested in any or all of these roles, you should apply. You may be matched with multiple teams across TTS during the interview process based on your skills, experience, and interests.

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
lower GS-grade (or equivalent). Specialized experience for this role is defined as: 
  - Experience developing and implementing a product strategy that aligns with strategic objectives and user needs
  - Experience leading cross-functional teams of software engineers, data analysts, user experience/user interface designers to develop and deliver features
  - Experience overseeing product design and working with designers to create user-friendly tools, dashboards and reporting systems
  - Experience utilizing web and data analytics and data management tools to inform product strategy and monitor performance
  - Experience developing and maintaining relationships with internal and external stakeholders to represent and advance program interests

## How to Apply

{% include job/apply_button.html %}

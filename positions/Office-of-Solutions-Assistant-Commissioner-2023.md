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
title: "Office of Solutions: Assistant Commissioner"

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
opens: 2023-08-21
closes: 2023-09-20
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
appointment type: perm

# Put the GS grade this position is being advertised at. For SES positions, set
# the level to 20.
#🔻🔻🔻🔻🔻
gs: 20
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
  - Program Execution & Governance
    - Drive the successful execution and delivery of TTS technology products and
    services through the supervision of large cross-functional teams made up of
    senior-level product managers, product owners, engineers, data scientists
    and analysts, and designers for the development of digital solutions in the
    public sector.
    - Leverage best practices and lead strategic and tactical organizational
    change such as internal process improvements (e.g. agile transformations) or
    structural realignments
    - Establish internal controls and oversight for product development programs
    and operations ensuring ethical standards and compliance with legal and policy
    requirements.
    - Continually promote TTS’s values by making a strong case for iterative,
    user-centered design on every project.
  - Stakeholder Engagement
    - Collaborate with other parts of GSA and other government agencies to expand
    the impact and potential of TTS’ products and services
    - Collaborate with senior-level customers and/or stakeholders to define the
    strategy, evaluating feasibility and opportunity while managing risk to arrive
    at a balanced portfolio of products and programs.
    - Partner with other program and product leaders within TTS to enable success
    for the entire organization
    - Represent TTS at conferences and events to connect with government leaders
    and others in the civic technology space
  - Team Leadership
    - Collaborating with TTS talent acquisition, GSA human resources, and procurement
    to identify full-time and temporary staffing options and secure appropriately
    skilled talent
    - Hire and onboard team members with clear training plans and performance
    expectations that include annual performance goals for each role
    - Assist in the development of individual career paths through identifying
    professional goals, development opportunities, and learning needs. 
    - Serve as a coach, mentor, and teacher to the team
    - Holds TTS Solutions’ teams accountable for delivering their outcomes and goals
    - Strengthen and support TTS’ values, practices, and organizational health
  - Organizational Strategy
    - Contribute to refining the overall direction and vision of TTS
    - Develop long-term strategies to achieve TTS Solutions’ goals and objectives
    - Anticipate changes and suggest adaptations of TTS’ strategies accordingly
    - Identify potential risks to TTS’ and implements strategies to mitigate them

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
  - link: https://bit.ly/GSAAsstCommOfcSol8Sep23
    date: 2023-09-08
    time: 1:00-2:00pm ET (10:00am -11:00am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/744285900
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
**Assistant Commissioner, Office of Solutions:**

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
{% include job/salary_range.html min="$141,022" max="$201,720" %}

You can find more
information in our
[compensation and benefits section]({% link pages/compensation-and-benefits.md %}).

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Travel requirement:**
Travel may be required up to 15% per year.

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
The Office of Solutions Assistant Commissioner is responsible for supplying the 
federal government with the technology solutions (i.e., technology products, platforms, 
and programs) it needs to meet the needs of the American public. The Assistant 
Commissioner represents and speaks for the Deputy Director, TTS on technology 
solutions initiatives and services with senior GSA officials, top level executives 
from other federal agencies and the public and private sectors, Congressional 
representatives, the news media and other public media outlets.

The ideal candidate will encompass the following:

- An experienced leader who knows from successes and failures the best practices in
software development for digital products and network service;
- An influential facilitator who knows how to effectively communicate and motivate
cross-functional teams; 
- A strategic thinker able to define or redefine product strategies and roadmaps
based on rigorous and inclusive research and service design, designing a measurable
strategy to achieve that vision, communicating the vision, and driving delivery
against the strategy;
- A pragmatic detective comfortable with uncertainty and ambiguity using both
quantitative and qualitative methods to evaluate the direction of products;
- An empathetic coach, teacher, and advocate who helps staff develop their skills. 


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

All applicants must meet the Mandatory Technical and Executive Core Qualification 
requirements listed below to be eligible for consideration. Eligibility will be based 
on a clear demonstration that the applicant's training and experience are of the scope, 
quality and level of responsibility sufficient to successfully perform the duties and r
esponsibilities of this executive position.

**MANDATORY TECHNICAL COMPETENCIES:**

1. Demonstrated senior-level experience leading medium to large scale (100+) digital 
technical organizations through the development and delivery of products and services 
to end users (consumer or business). This experience must include:
  - Defining and/or redefining product strategies and roadmaps based on newly discovered
  consumer or business needs based on data-driven insights and measured outcomes.
  - Delivering direct value to end users through software delivery or innovation,
  ensuring continuous discovery of business and user needs, or the operational
  improvement of a product or service in production.
  - Experience crafting or creating product vision, strategy or road maps.
  - Experience working with cross-functional teams.
2. Demonstrated senior-level experience leading medium to large scale (100+) technical
organizations through the improvement of internal operational processes.
This experience must include:
  - Extensive experience in communicating/coordinating with internal and external
  stakeholders to negotiate and successfully implement program objectives.
  - Experience leading large cross-functional teams made up of senior-level product
  managers, product owners, engineers, data scientists and analysts, and designers
  for the development and employment of digital solutions in the private or public sector
  - Experience hiring, training, and supervising first and/or second line supervisors,
  manager, and staff (technical and non-technical) focused on building, delivering and
  maintaining technology products and services.
  - Experience leading strategic and tactical organizational change such as internal
  process improvements (e.g. agile transformations) or structural realignments
  - Creating and delivering talent growth and development plans through a culture of
  continuous improvement that include succession planning for key positions.
3. Demonstrated executive-level experience in managing the performance of medium to
large digital technology organizations (service providers, consulting).
This experience must include:
  - Collaborating with senior-level customers and/or stakeholders to define the
  strategy evaluating feasibility and opportunity while managing risk to arrive at a
  balanced portfolio of products and programs.
  - Providing oversight for operational management of business agreements, financial
  planning, hiring practices, stakeholder communications, and partner relationships.

**EXECUTIVE CORE QUALIFICATIONS - ECQs:**

**1. Leading Change:** This core qualification involves the ability to bring about strategic
change, both within and outside the organization, to meet organizational goals. Inherent
to this ECQ is the ability to establish an organizational vision and to implement it in
a continuously changing environment.
**2. Leading People:** This core qualification involves the ability to lead people toward
meeting the organization's vision, mission, and goals. Inherent to this ECQ is the
ability to provide an inclusive workplace that fosters the development of others,
facilitates cooperation and teamwork, and supports constructive resolution of conflicts.
**3. Results Driven:** This core qualification involves the ability to meet organizational
goals and customer expectations. Inherent to this ECQ is the ability to make decisions
that produce high-quality results by applying technical knowledge, analyzing problems,
and calculating risks.
**4. Business Acumen:** This core qualification involves the ability to manage human,
financial, and information resources strategically.
**5. Building Coalitions:** This core qualification involves the ability to build coalitions
internally and with other Federal agencies, State and local governments, nonprofit and
private sector organizations, foreign governments, or international organizations to achieve
common goals.

## How to Apply

{% include job/apply_button.html %}

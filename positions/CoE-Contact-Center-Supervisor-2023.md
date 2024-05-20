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
title: "Centers of Excellence: Supervisory Contact Center Modernization Specialist"

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
opens: 2024-01-24
closes: 2024-01-31
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
  - Provide coaching, mentorship, and professional development opportunities; support employee wellbeing
    - Ensure continued Contact Center Modernization in modern project management best practices (such as Agile) and delivery within the Contact Center Center of Excellence.
    - Communicate regularly with your team, as a group and in 1:1s, to provide mentorship and guidance, and help remove obstacles to their success.
    - Steward staff’s professional development by identifying appropriate training, developmental assignments, and/or details. Incorporate equity and inclusion into training, speaking events, and experiential learning opportunities. Tailor approaches to individuals’ needs.
    - Work with individuals to identify and develop their strengths, helping team members pursue opportunities that enhance their talents.
    - Constructively address situations, issues, and behaviors that impede success. Initiate difficult conversations and clearly communicate and follow through with corrective actions.
    - Ensure employees receive reasonable accommodations and that team events are accessible.
    - Support the onboarding of new staff.
    - Document employee performance plans and conduct mid-year and end-of-year performance evaluations.
    - Promote collective success; make time for collaborative decision-making in project work; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
    - Collaborate across roles and organizations to build strategic relationships, achieve common goals, and to resolve sensitive issues.
    - Collaborate across organizations to build strategic relationships, achieve common goals, and to resolve sensitive issues.
  - Provide technical leadership to project teams
    - Manage and direct highly complex and innovative projects related to the delivery of Contact Center products, platforms, or services to agencies and the public.
    - Find entrepreneurial and creative solutions to organizational challenges.
    - Translate client needs into scoped engagements that match CoE’s value proposition and areas of expertise.
    - Help to shepherd partners through the agreements process.
    - Help teams align on and adhere to shared processes, maintain high standards, and resolve conflicts. Connect teams to resources, amplify team successes, and help teams to pivot or adapt as needed.
    - Identify risks to project delivery and seize opportunities.
    - Help create enduring change at agencies, including the adoption of innovative tools and techniques.
    - Utilize modern project management practices to oversee engagements financial and contractual compliance.
    - Promote collective success; make time for collaborative decision-making in project work; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
    - Develop and maintain positive relationships at various levels within  organizations and champion diversity, equity, inclusion, and accessibility.
    - Serve as a central leader partnering with other CoE supervisors to resolve client specific and delivery challenges.
    - Promote client needs inside of CoE / TTS / GSA in order to refine agency offerings
    - Set customer meetings, align stakeholders, and provide timely responses to inquiries and urgent requests.
  - Provide strategic leadership
    - Along with the rest the CoEs leadership, set the vision for the Centers, aligning with TTS vision, mission, and values.
    - Coordinate with other members of the CoE leadership team to develop guidance and organizational communication.
    - Collect feedback to discuss successes and challenges, and share patterns and key feedback with the rest of the CoE leadership team.
    - Research, develop, and encourage delivery best practices and create space for experimentation and iteration.
    - If involved in hiring actions, ensure Equal Employment Opportunity (EEO) regulations are followed throughout recruitment, hiring, and selection processes.
    - Set strategy for knowledge management such that key information is carried forward, to make the Center resilient to turnover.
    - Maintain a work environment of respect, diversity, equity, inclusion, accessibility, mutual support, flexibility, collaboration, continuous learning, and commitment to partner needs. Ensures all perspectives are valued and included. Uphold TTS values of inclusion, integrity, and impact.
    - Promote transparency in how decisions are made. Regularly includes others in planning and decision-making.
    - Participate in and lead partner-facing work and business development efforts.
    - Represent CoE to external parties, such as speaking at conferences, writing blogs, or speaking to the press.
    - Collaborate with the head of Partnership and client agencies to define goals, outline statements of work, and produce deliverables.
    - Use a consultative sales approach to qualify and close new business leads on introductory, subject matter expert (SME), and follow-up calls.
    - Comfortably speak to the value of our methodologies (iterative, human-centered, open) to a variety of audiences.
    - Where appropriate, find opportunities to integrate execution of roadmap with other TTS-wide services/products (e.g., login, cloud.gov).
    - Deepen customer relationships and retain clients by balancing their needs with budget, innovation, and long-term growth potential. 
  - You will help federal agencies develop and execute contact center and customer experience modernization strategies incorporating leading technology, and best practices to ensure solutions can meet their current and future needs in an efficient, sustainable, agile, and adaptable manner.
    - Design enterprise-level contact center solutions using user story definition, and holistic journey mapping while also incorporating standard operating procedures and best-practice methodologies
    - Ability to collect and analyze current contact center operations, data and reports to develop future-state recommendations for optimization and transformation.
    - Lead the development and maintenance of  strategic application technology portfolios, and roadmaps, to support or drive solution development or product selection
    - Ability to incorporate standard operating procedures, training, QA programs and best practice methodologies into contact center operations
    - Partner with agency program leads to drive alignment and integration of new contact center technology and integration with other third-party or internal applications
    - Incorporate knowledge management and customer relationship management systems best practices to improve the agent experience and the agency’s overall customer experience
    - Support the implementation of intelligent system solutions to leverage robotic process automation (RPA) & artificial intelligence (AI) to help anticipate user needs, augment conversations and automate routine tasks
    - Interface with agency data and security teams to address gaps and risks and assist in the overall design and build of security features
    - Develop and track performance metrics, customer feedback, quality assurance and other KPI’s

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
  - link: https://gsa.zoomgov.com/meeting/register/vJItduqhqjIrGrFyGGgAwgt95BnoTzMJ_LM#/registration
    date: 2023-11-28
    time: 1:00-2:00pm ET (10:00am -11:00am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/762174000
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
**Official title in USAJOBS:** Supervisory Information Technology Specialist (SYSANALYSIS)

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
We are looking for a Contact Center Modernization Specialist to join the Technology Transformation Service (TTS) as part of the IT Modernization Centers of Excellence (COE)  to help develop and improve the contact center capabilities and services of our partner agencies.

The CoE deploys technology modernization leaders with industry support across the federal government to bring about enterprise-wide, lasting organizational change and deliver value to the American public.

As the Supervisory Contact Center Modernization Specialist you will oversee a group of experienced, mid- to senior-level Contact Center Modernization experts whose mission is to improve the lives of the public and public servants by transforming how the government uses technology. You will accelerate our growth by creating and maintaining partnerships with government agencies and programs. You'll help agency leadership make sense of the complex digital landscape and how CoE’s services can benefit their Contact Center programs and users. You’ll establish and maintain trusted relationships with our government partners, and set up and lead engagements to be successful. 

You will lead a team of expert contact center modernization consultants, and serve as senior subject matter expert in the areas of contact center multi-channel and/or omnichannel technologies, platforms and operations.  You will collaborate with agency partners to design, plan, and deliver on key contact center and customer experience modernization strategies that will drive optimizations and improvements in the security, agility, responsiveness, and efficiency of the agency’s public facing infrastructure and processes.

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

- Supervising the work of an organization through efforts involving identifying, developing, delivering, and/or supporting introduction of new technologies to rework IT business practices and delivery.
- Performing system analyses, application of process reengineering concepts, and new information technology sufficient to define opportunities for new, improved, or enhanced business process IT systems solutions.
- Developing and interpreting guidelines, procedures, and strategies governing planning and delivery of IT systems solutions.
- Applying interrelationships of multiple IT specialties.

## How to Apply

{% include job/apply_button.html %}

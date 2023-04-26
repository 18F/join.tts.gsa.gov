---
################################################################################
#                                                                              #
# INSTRUCTIONS                                                                 #
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

# This is the position title and the org that is doing the hiring. Please format
# your title as "Org: Position Title" (in quotes!). The organization should be
# a full name rather than an acronym. For example:
#   - U.S. Digital Corps, not USDC
#   - Presidential Innovation Fellows, not PIF
#
# NOTE: Be sure to leave the "title: " part at the beginning! These line
# headings are how the site builder knows what the data is. For the rest of the
# frontmatter, please be careful not to delete the headings!
#🔻🔻🔻🔻🔻
title: "18F: Engineering Director GS15"

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
opens: 2023-04-26
closes: 2023-05-02
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
  - Develop and enable your team 
    - Define and communicate engineering standards at 18F, and provide the training and resources necessary for the engineering supervisors and team to meet those standards. 
    - Communicate regularly with your team, as a group and individually, to provide mentorship and guidance, and help remove obstacles to their success.
    - Develop the supervisory people management capabilities of the Engineering Chapter, including growing supervisors’ skills in areas of performance management, employee development and career growth, coaching others through difficult project and technical problems, and sponsoring team members pursuing growth opportunities.
    - Develop the supervisory business management capabilities of the chapter by breaking down 18F’s engineering business needs into pieces of work that supervisors can learn to do and coaching supervisors to do them effectively. These include capabilities such as shaping inbound opportunities to set project teams up for success and assembling cross-functional teams by matching engineers to projects.
    - Constructively address situations, issues, and behaviors. Initiate difficult conversations and clearly communicate corrective actions.
    - Oversee employee performance plans.. Provide performance evaluations for supervisors and assist them in conducting and documenting performance evaluations for staff.
    - Recognize and flag stress and fatigue in your chapter. Work with supervisors to determine support that might improve individuals’ wellbeing and mechanisms to provide that support.
    - Collaborate with other members of 18F leadership to identify and support strategic and technical training opportunities.
    - Support supervisors in the onboarding of new Engineering Chapter staff.
    - Ensure continued technical excellence in the Engineering Chapter and engineering practices at 18F.
    - Steward the Engineering Chapter’s professional development by identifying appropriate training and developmental opportunities.  Incorporate equity,inclusion, and accessibility into training, speaking events, and experiential learning opportunities. Assist supervisors in tailoring approaches to individuals’ needs.

  - Provide strategic leadership
    - Set the vision for the 18F Engineering Chapter, aligning with 18F, TTS and GSA vision, goals, and values.
    - Represent the chapter in the 18F Leadership Team  and communicate information back to the chapter. Convey the needs, skills and capacity of the Engineering Chapter to the broader organization. Promote transparency in how decisions are made. Regularly include others in planning and decision-making.
    - Represent 18F’s engineering and technical approaches to relevant audiences (18F, TTS, GSA, and external) and proactively pursue opportunities to share those approaches broadly and publicly, and to develop connections with other leaders in government and civic technology.
    - Lead strategic 18F initiatives as determined by the leadership team and 18F Director.
    - Coordinate with other members of the 18F leadership team to develop guidance and organizational communication around hiring, business development, project support, performance evaluation, and more.
    - Collect feedback to discuss successes and challenges, and share patterns and key feedback with the rest of 18F leadership.
    - Craft strategic, data-driven hiring plans for the Engineering Chapter that align with 18F’s hiring strategy and trends in partner needs. Include sourcing strategies and interview practices to ensure a diverse candidate pool and inclusive hiring process.  Ensure Equal Employment Opportunity (EEO) regulations are followed throughout recruitment, hiring, and selection processes.
    - Set strategy for knowledge management such that key information is carried forward and key skills are learned, to ensure chapter resilience.
    - Create a work environment that fosters trust, respect, and collaboration. Uphold TTS values of inclusion, integrity, and impact.
    - Identify power dynamics; respond thoughtfully and create space for less dominant voices.
    - Promote collective success and leadership growth among chapter members. Ensure there is time for collaborative decision-making; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
    - Continue to iterate and improve on 18F’s engineering approaches.
    
  - Help 18F build strong organization-wide practices
    - Set the vision for the 18F Engineering Chapter, aligning with 18F, TTS and GSA vision, goals, and values.
    - Lead and support your team in developing engineering discipline skills, a learning culture, and supportive relationships, especially in areas of practice specific to government technology needs.
    - As part of 18F leadership, continue to align 18F on shared processes, maintain high standards, and resolve conflicts. Connect teams to resources, amplify team successes, and help teams to pivot or adapt as needed.
    - Working in the open and sharing our stories, challenges, success, examples, and more is a critical component of how 18F strengthens technology practices governmentwide. Help create the structures and practices which support refining those stories and artifacts from our project and making them broadly and publicly available. 
    - As part of 18F leadership, provide oversight of partner engagements and help members of the Engineering Chapter contribute meaningfully to partner and user success.
    - Collaborate with the 18F Leadership Team and staffing leads to ensure projects are staffed with engineering expertise to ensure outcomes that  meet the needs of partners as well as to support skills growth of team members.

  


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
  - link: https://www.eventbrite.com/e/18f-product-engineering-director-info-session-tickets-597833254357
    date: 2023-04-12
    time: 12:30-1:30pm ET (9:30-10:30am PT)
  - link: https://www.eventbrite.com/e/18f-product-engineering-director-info-session-tickets-597839242267
    date: 2023-04-19
    time: 3:30-4:30pm ET (12:30-1:30pm PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/721812100
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
**Official title in USAJOBS:** Supervisory IT Specialist

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
Occasional travel may be required up to 10% per year.

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
18F is an office of federal employees within the General Services Administration (GSA) that collaborates with other agencies to fix technical problems, build products, and improve how government serves the public through technology. 18F is part of the Technology Transformation Services, which is within the Federal Acquisition Service.

18F envisions a country whose government consistently offers digital services that instill pride and trust, meet user needs, are secure, and are delivered quickly and at reasonable cost. 

The 18F Director of the Engineering is responsible for the engineering staff (~40 people) and engineering discipline needs of 18F. As Engineering Director, you’ll support employee development, foster inclusion, belonging, and growth within your team; lead hiring for 18F’s Engineering chapter; coach and mentor supervisors as they support their direct reports; and set the vision for engineering work on cross-functional teams to deliver digital products & services while strengthening government technology practices in ways that last beyond our formal partnerships. You’ll represent the Engineering chapter as a member of 18F Leadership.  In this role, you’ll help shape how 18F creates meaningful change for our partners, government-wide practitioners, and ultimately the American public.


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

- Experience managing individuals who work in the technology space 
- Experience leading a cross-functional or multidisciplinary team that provides or supports delivery of modern IT systems, software systems, or digital services
- Experience supporting the overall planning, management, and direction of a program or business, or multiple projects or products
- Experience building alignment with stakeholders 



## How to Apply

{% include job/apply_button.html %}

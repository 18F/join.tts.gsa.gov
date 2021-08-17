---
title: ENTER OFFICE HERE - ENTER ROLE TITLE HERE
# permalink: /join/ENTER ROLE TITLE HERE/
# state: ENTER STATE HERE (open, closed, upcoming)
# job_post_type: ENTER TYPE HERE (tts or usajobs)
# related_performance_profiles:
#  - name: NAME OF PERFORMANCE PROFILE
#    link: /join/ENTER PERFORMANCE PROFILE PAGENAME HERE
#  - name: (repeat as necessary)
#    link: (repeat as necessary)
# info_sessions:
#  - text: TEXT FOR INFO SESSION LINK
#    link: EVENTBRITE LINK
#  - text: (repeat as necessary)
#    link: (repeat as necessary)

# INSTRUCTIONS UPCOMING: These fields are required for upcoming
# role_name: ENTER THE NAME OF THE ROLE HERE (Without Org)
# opens: MONTH DAY, YEAR, TIME EDT
# closes: MONTH DAY, YEAR, TIME EDT
# location: ENTER LOCATIONS - 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% Remote)'
# gs_level: ENTER GS LEVEL (13, 14, 15, etc)
# salary_min: 'ENTER SALARY MIN' (XXX,XXX)
# salary_max: 'ENTER SALARY MAX' (XXX,XXX)
# org: 'ENTER ORG NAME HERE' (18F, Centers of Excellence, etc.)
# contact_name: 'TTS Talent Team'
# contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

# job_announcement_number: 'ENTER JOB ANNOUNCEMENT NUMBER'
# pd_job_title: 'Innovation Specialist' (ENTER TITLE IF DIFFERENT)
# num_vacancies: 'ENTER NUMBER OF VACANCIES'
# series: '0301' ENTER SERIES IF DIFFERENT
# apply_url: APPLICATION URL
# ohrm_contact_email: 'ENTER OHRM CONTACT EMAIL'
# ohrm_contact_name: 'ENTER OHRM CONTACT NAME'
# bargaining_unit: 'Non Bargaining Unit'
# promotion_potential: 'ENTER THE GS LEVEL' (13, 14, 15, etc.)
# supervisory_status: 'YES' or 'NO'
---
{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for GS-{{ page.gs_level }} - {{ page.role_name }} roles.
  {% if page.opens == 'tbd' %} The target date for when these positions will be officially open to application has not yet been determined. If you'd like to be
  notified when these positions are open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {% endif %}
  
  Applications will be open for submission on {{ page.opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process. 
{% endif %}

{% if page.state != 'upcoming' %}
{{ page.org }} is hiring for the role of GS-{{ page.gs_level }} {{ page.role_name }}. **There are several {{ page.org }} teams hiring for this role..** This page contains a high-level summary of the role and links to more specific descriptions for each {{ page.title }}. **When the position becomes live for applications, you will have the opportunity to select which role(s) you’re interested in applying for.**
{% endif %}

{% for session in page.info_sessions %}
- [{{session.text}}]({{session.link}})
{% endfor %}

## Opportunity overview

ENTER OPPORTUNITY INFORMATION HERE.

## {{ page.org }} teams hiring for this role

**There are several {{ page.org }} teams hiring for this role.** The links below provide more specific descriptions of these opportunities. Candidates will submit one application and will indicate which position(s) they want to be considered for. 

{% for profile in page.related_performance_profiles %}
  - [{{profile.name}}]({{profile.permalink}})
{% endfor %}

Once applications are reviewed, hiring teams will identify candidates that they are interested in interviewing. We will then follow up with candidates to discuss their interest in the role(s). Candidates may interview for roles with multiple teams.

## Basic information

**Location:**
{{ page.location }}

**Salary Range:**
The salary range for this position is: GS-{{ page.gs_level }} Step 1 - ${{ page.salary_min }} to GS-{{ page.gs_level }} Step 10 ${{ page.salary_max }}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a
salary calculator [OPM's 2021 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2021/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$172,500** 

Note: You may not be eligible for the maximum salary as it is locality dependent. Please refer to the maximum pay for your locality.

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands)

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year

**Security clearance:**
Public trust. Background investigation required.

**Work schedule:**
Full time.

**Appointment type:**
Permanent hire. This is not a term limited opportunity. Applicants who are selected for this opportunity will have career conditional status in the federal government for their first three years of employment and transition to career after three years. This means you will be a permanent federal employee with no expiration date.

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
To qualify for this role, you must have one year of specialized experience equivalent to the GS-14 in the federal service. Specialized experience for this role will be listed here as soon as it is available.

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

## How to apply
We will be accepting applications through the Public Notice on USAJOBS.
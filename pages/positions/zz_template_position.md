---
title: Test Job
permalink: join/thisisonlyatest/
state: upcoming
job_announcement_number: 123456
pd_job_title: Innovation Specialist
num_vacancies: 1
gs_level: 15
series: 301
location: Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% Remote)
salary_min: $0
salary_max: $123,456
org: TTS
opens: June 21, 2018, 8:00am EDT
closes: June 22, 2018, 8:00am EDT
apply_url: www.google.com
contact_name: Tester
contact_email: jointts@gsa.gov
ohrm_comtact_email: ohrm@gsa.gov
ohrm_contact_name: Jacqueline Coleman
bargaining_unit: Non Bargaining Unit
job_post_type: tts



# state: ENTER STATE HERE (open, closed, upcoming)
# job_announcement_number: ENTER JOB ANNOUNCEMENT NUMBER
# pd_job_title: Innovation Specialist ENTER TITLE IF DIFFERENT
# num_vacancies: ENTER NUMBER OF VACANCIES
# gs_level: ENTER GS LEVEL (13, 14, 15, etc)
# series: 301 ENTER SERIES IF DIFFERENT (DO NOT USE A LEADING '0', IT WILL NOT WORK)
# location: ENTER LOCATIONS (Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% Remote) ) 
# salary_min: ENTER SALARY MIN ($XXX,XXX)
# salary_max: ENTER SALARY MAX ($XXX,XXX)
# org: ENTER ORG NAME HERE
# opens: MONTH DAY, YEAR, TIME EDT
# closes: MONTH DAY, YEAR, TIME EDT
# apply_url: APPLICATION URL
# contact_name: NAME
# contact_email: jointts@gsa.gov
# ohrm_comtact_email: ENTER OHRM CONTACT EMAIL
# ohrm_contact_name: ENTER OHRM CONTACT NAME
# bargaining_unit: Non Bargaining Unit
# job_post_type: ENTER THE TYPE OF POST (tts OR usajobs)

---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} {{ page.title }}. Applications will be open for submission on {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more the application process.

**Quick Links to Posting Sections**
- [Role summary](#role-summary)
- [Qualifications](#qualifications)
- [How to apply](#how-to-apply)

## Basic Information

**Location:**
{{ page.location }}

**Salary Range:**
Base salary - {{ page.salary_min }} to {{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are selected. Total compensation may include locality pay based on the individual's duty location. For more salary information including locality pay details, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/). 

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:

### {{ page.title }} - GS-{{ page.gs_level }}

ENTER POSITION SUMMARY FROM PERFORMANCE PROFILE

## Key Objectives

### Key objective #1:
-
-
-

### Key objective #2:
-
-
-

### Key objective #3:
-
-
-

### Key objective #4:
-
-
-

## Minimum Qualifications

The information in this sections outlines the criteria that your application will be evaluated against to determine if you meet the Minimum Qualifications for the position. There are two very important things to note about this step in the process:

- Only applications found "minimally qualified" are shared with the hiring manager and are the only candidates eligible to be interviewed
- The Minimum Qualification determination can only be made using the information that's directly within your resume and directly associated your listed work experience.
  - Examples of stuff that can't be used:
    - Links to portfolios or other external materials (Yes, the links themselves may be "directly" on the resume but the information is not).
    - Information you include in cover letters, responses to questions, etc. as these are not directly associated with your work experience
    - Lists of tools, technologies, programming languages, etc. that are listed separately from your work experience
 
The Minimum Qualification process is a bureaucratic requirement that we are stuck with. It's best to think about it as the most intense and rigorous resume review you've ever heard of. To get through this process you need make sure your resume directly reflects the qualifications listed below. We also have more guidance on creating a federal style resume on [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/)

### Specialized Experience

To qualify for this role, you must have one year of specialized experience equivalent to the GS {{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

ENTER SE THAT WILL BE ON JOB ANNONOUCEMENT SENT TO HR

{% else %}

{{ page.org }} is hiring for GS-{{ page.gs_level }} {{ page.title }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more the application process.

**Quick Links to Posting Sections**
- [Role summary](#role-summary)
- [Qualifications](#qualifications)
- [How to apply](#how-to-apply)

## Basic Information

**Job announcement number:** 
{{ page.job_announcement_number }}

**Opening and closing period for this job application:**
{{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }} to {{ page.closes | date: '%l:%M%P %Z on %A, %B %e, %Y' }}

**Job Title:**
{{ page.pd_job_title }}

**Series & Grade:**
{{ page.series }} - GS-{{ page.gs_level }}

**Location:**
{{ page.location }}

**Salary Range:**
Base salary - {{ page.salary_min }} to {{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are selected. Total compensation may include locality pay based on the individual's duty location. For more salary information including locality pay details, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/). 

**Number of vacancies:**
{{ page.num_vacancies }} - (Additional vacancies may be filled from this announcement as needed)

**Supervisory status:** 
No

**Travel requirement:** 
Occasional travel may be required up to 10%-20% per year

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

**Security clearance:** 
Public trust. Background investigation required. 

**Work Schedule:** 
Full time 

**Appointment Type:**
Excepted Service: Not to exceed 24 months (2 years); may be extended for an additional 2 years for a maximum of 4 years total.

## Role Summary:

### {{ page.title }} - GS-{{ page.gs_level }}

ENTER POSITION SUMMARY FROM PERFORMANCE PROFILE

## Key Objectives

### Key objective #1:
-
-
-

### Key objective #2:
-
-
-

### Key objective #3:
-
-
-

### Key objective #4:
-
-
-

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS {{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

ENTER SE THAT WILL BE ON JOB ANNONOUCEMENT SENT TO HR

{% endif %}

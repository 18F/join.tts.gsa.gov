---
title: Test Job
permalink: join/thisisonlyatest/
state: open
job_announcement_number: 123456
pd_job_title: Innovation Specialist
num_vacancies: 1
gs_level: GS-15
series: 0301
location: Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual
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

# state: ENTER STATE HERE (open, closed, upcoming, usajobs)
# job_announcement_number: ENTER JOB ANNOUNCEMENT NUMBER
# pd_job_title: Innovation Specialist ENTER TITLE IF DIFFERENT
# num_vacancies: ENTER NUMBER OF VACANCIES
# gs_level: ENTER GS LEVEL (GS-13, GS-14, GS-15, etc)
# series: 0301 ENTER SERIES IF DIFFERENT
# location: ENTER LOCATIONS (Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual) 
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

---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a {{ page.gs_level }} {{ page.title }}. The estimated date for when the official application will be open for submission is {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Please note that this is just an estimate and it's possible that the posting is delayed. You can sign up to our <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-HCWKQp_3TKJs0ss-3IqzbI0HY16rH5LnV8CRpIBykeH07g/viewform?usp=sf_link">mailing list</a> if you would like to be notified when applications are open or new positions are being posted. To learn more about the application process at [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/).
{% else %}
{{ page.org }} is hiring for {{ page.gs_level }} {{ page.title }}. This page contais information related to the role as well as a link to submit your application. To learn more about the application process at [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/).
{% endif %}

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
{{ page.series }} - {{ page.gs_level }}

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

### {{ page.title }} {{ gs_level }}

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
and following our general recommendations for a federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-14 in the Federal service.
Specialized experience is:

ENTER SE THAT WILL BE ON JOB ANNONOUCEMENT SENT TO HR

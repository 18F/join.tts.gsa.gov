---
title: Login.gov - DevOps/Site Reliability Engineer (IT Specialist)
permalink: /join/devops-engineer/
state: closed
job_post_type: usajobs


# INSTRUCTIONS UPCOMING: These fields are required for upcoming

role_name: DevOps/Site Reliability Engineer (IT Specialist)
opens: 'November 11, 2020 at 9:00am EST'
closes: 'March 1, 2021 at 11:59pm EST'
location: 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% remote)'
gs_level: 15
salary_min: '128,078'
salary_max: '172,500'
org: 'Login.gov'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open
job_announcement_number: '21FASC052LUOTR'
pd_job_title: 'IT Specialist (APPSW)'
num_vacancies: '1'
series: '2210'
apply_url: https://www.usajobs.gov/GetJob/ViewDetails/584187800
ohrm_contact_email: 'loyola.ukpokodu@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'
---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} - {{ page.role_name }}.
  {% if page.opens == 'tbd' %} The target date for when this position will be officially open to application has not yet been determined. If you'd like to be notified when this position is open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {% endif %}
  
  Applications will be open for submission on {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process. 
{% endif %}

{% if page.state != 'upcoming' %}
  {{ page.org }} is hiring for GS-{{ page.gs_level }} - {{ page.role_name }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process. **We will be reviewing applications on a rolling basis so we encourage candidates to apply as soon as possible for consideration.**
  
  **Please note, this is a shared application with the 18F Consulting Software Engineer (IT Specialist) role. Candidate will fill out one application to be considered for both opportunities.**
{% endif %}

**Location:**
{{ page.location }}

**Salary Range:**
The base salary range for this position is: GS-{{ page.gs_level }} Step 1 - ${{ page.salary_min }} to GS-{{ page.gs_level }} Step 10 ${{ page.salary_max }}

Please note the maximum salary available for the GS pay system is **$172,500**

Salary to be determined upon selection, depending on duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM's 2021 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2021/general-schedule-gs-salary-calculator/).

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) 

## Role Summary:

### {{ page.role_name }} - GS-{{ page.gs_level }}

Login.gov gives the public simple, secure access to multiple government services through one verified account. Login.gov has
over 10 million users and is growing the team as we scale quickly.

Login.gov is looking for qualified Site Reliability / DevOps engineers to join our infrastructure team. We care deeply about
providing the best possible experience to anyone using government digital services and we are committed to making the process
of accessing government services easy while combating fraud and abuse. A qualified candidate is ready to quickly jump in and
help in a number of areas: using site reliability engineering best practices to build and operate the Login.gov 
infrastructure at scale, responding to incidents and leading incident response and postmortem review, creating automation 
in areas such as security compliance and code deployment, and meeting with engineers and executives from prospective 
government agency customers to determine how Login.gov can adapt to meet their user identity needs.

The Login.gov team operates like a startup within the government, working in the open as a distributed, agile team. The core
product is open source, hosted in modern cloud infrastructure, and built for scale. Tens of millions of people have Login.gov
accounts, and we aim to be the preferred entrypoint for all government digital services. Our users today include people 
accessing benefits, applying for government jobs, serving in the military, and collecting funds awarded through grant 
programs.

As part of the Login.gov infrastructure engineering team, you will play a key role in making government services more secure
and accessible to the public.



## Key Objectives

### Objective #1: Operate Login.gov with high standards of performance and reliability:

- Define key success metrics for Login.gov infrastructure and drive improvement toward those measures
- Create and improve monitoring systems to collect data about the application, notify on any errors, and improve 
visibility/observability into application behavior.
- Assist application teams in deploying code to the application regularly and as automatically as possible
- Lead incident response and mitigate site errors as they occur
- Lead postmortem discussions and drive continuous improvement to prevent similar outages
- Participate in oncall shifts, serving as first-line support for incidents. Drive down page frequency as low as possible
(We currently page ~1-2 times per month)

### Objective #2: Build Login.gov’s infrastructure using modern cloud infrastructure techniques:

- Use infrastructure-as-code (currently Terraform) and configuration management (currently Chef) to automate Login.gov’s AWS
infrastructure
- Review code and consult with other engineers on new features and their implications for site performance, reliability, and security for the security of Login.gov Ruby on Rails services
- Conduct load tests to ensure the application is ready to handle projected user traffic
- Improve automation and fault tolerance of the deployment process
- Drive long-term improvement in Login.gov system availability by removing single points of failure

### Objective #3: Collaborate with the Login.gov team and outside partners:

- Handle site issues from partner agencies, dealing both with engineers and non-engineers
- Oversee procurement process for tools and services used by Login.gov
- Work alongside talent specialists to continue hiring new engineers and project managers into the team
- Advocate for modern information security principles throughout the system
- Balance agile development with mandatory government security compliance policies
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual 
differences

{% if page.state != 'upcoming' %}

## Basic Information

**Location:**
{{ page.location }}

**Salary Range:**
Base salary GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are selected. Total compensation may include locality pay based on the individual's duty location. For more salary information including locality pay details, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/).

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

**Job announcement number:**
{{ page.job_announcement_number }}

**Opening and closing period for this job application:**
{{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }} EDT to {{ page.closes | date: '%l:%M%P %Z on %A, %B %e, %Y' }} EDT

**Job Title:**
{{ page.pd_job_title }}

**Series & Grade:**
{{ page.series }} - {{ page.gs_level }}

**Promotion Potential:**
GS-{{ page.promotion_potential }}

**Number of vacancies:**
{{ page.num_vacancies }} (Additional vacancies may be filled from this announcement as needed)

**Supervisory status:**
{{ page.supervisory_status }}

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year

**Security clearance:**
Public trust. Background investigation required.

**Work Schedule:**
Full time

**Appointment Type:**
Excepted Service: Not to exceed 24 months (2 years); may be extended for an additional 2 years for a maximum of 4 years total.
  
## Job Summary
  
This Notice is issued under direct-hire authority to recruit new talent to occupations for which there is a severe shortage of candidates. We have a severe shortage of qualified applicants for our Information Technology  Specialist positions. To help us fill these jobs, we have been granted “Direct Hire Authority” or DHA for IT Specialist by Executive Order 13833. This means that when we have a vacant job, we can hire any qualified candidate, either from this notice or from any source. The benefit of applying to this notice is that your application may be shared with a hiring manager if they request resumes from this notice.

Initial appointments are made lasting longer than 1 year, but not to exceed 4 years. GSA, may extend an appointment up to 4 additional years.  No individual hired under this DHA can serve in excess of 8 years with GSA, and cannot be transferred to positions that are not IT positions.

**Key facts about this DHA notice:**

- TTS is seeking to fill multiple TERM appointments at the GS15 level.
- Positions may be located in Washington, DC; San Francisco, CA; Chicago, IL;  New York, NY or Full-time Telework.
- Salary to be determined upon selection, depending on duty location.  
- Full Time telework is negotiable after the selection (i.e., official worksite/duty location is the residence of the selectee).
- Current civil service employees will receive new appointments if selected under this Direct Hire Authority.
- Current GSA employees on competitive service appointments will not be considered.
GSA has been repeatedly named as one of the ['Best Places to Work'](http://bestplacestowork.org/BPTW/rankings/overall/mid)  in the federal government.
You will have access to many [benefits](http://www.gsa.gov/portal/category/26702) including:

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

## Key Requirements

1. You must be a U.S. Citizen or National (residents of American Samoa and Swains Islands)
2. Suitable for federal employment, determined by a background investigation
3. You may be required to serve a trial period
4. Direct Deposit of salary check to financial organization required
5. Register with Selective Service, if you are required by https://www.sss.gov/Registration-Info/Who-Registration

## Employment Requirements

- Serve a one year trial period, if required
- Undergo and pass a background investigation.  You must be granted this clearance before you can start the job
- Have your identity and work status eligibility verified if you are not a GSA employee.  We will use the Department of Homeland Security’s e-Verify system for this
- Any discrepancies must be resolved as a condition of continued employment
- Complete a financial disclosure report to verify that no conflict, or an appearance of conflict, exists between your financial interest and this position

## Evaluation

We will use a method called Category Rating to assess your application.

**Here’s how it will work:**

BASIC REQUIREMENTS:  Have IT-related experience demonstrating EACH of the four competencies listed below:

You will be scored based on a review of your application materials, measuring your possession of each of the following competencies

- **Attention to Detail** - This skill is generally demonstrated by assignments where the applicant keeps abreast of latest technology, information, research, etc., to maintain knowledge in field of expertise (for example, reads trade journals, participates in professional/technical associations, maintains credentials).

- **Customer Service** - skill is generally demonstrated by assignments where the applicant promotes or develops and maintains good working relationships with key individuals or groups.

- **Oral Communication** - This skill is generally demonstrated by assignments where the applicant serves on panels, committees, or task forces as a representative for the organization on technical or professional issues.

- **Problem Solving** - This skill is generally demonstrated by assignments where the applicant monitors current trends or events (for example, technological, economic, political, social, educational, or employment trends or events) and applies the information as appropriate

{% endif %}

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }} in the Federal service. Specialized Experience is:
**Specialized experience for this role is defined as experience delivering projects, tools or products as part of an engineering team. This includes experience developing or architecting complex modern web applications or cloud infrastructure using approaches such as test-driven development, continuous integration & deployment, or distributed version control such as github. Candidates should demonstrate experience providing project leadership and experience with agile development methodologies.**


Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:

- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

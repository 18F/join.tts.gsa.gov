---
title: Login.gov - DevOps/ Site Reliability Engineer 
permalink: /join/devops-engineer/
state: closed
job_post_type: tts

# INSTRUCTIONS UPCOMING: These fields are required for upcoming

opens: 'March 18, 2019, 8am EDT'
closes: 'March 22, 2019, 8pm EDT'
locations: 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% remote)'
gs_level: 15
salary_min: '105,123'
salary_max: '136,659'
org: '18F'
contact_name: 'Elizabeth Scott'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

job_announcement_number: '1900320JCOTR'
pd_job_title: 'Innovation Specialist'
num_vacancies: '1'
series: '0301'
apply_url: https://docs.google.com/forms/d/e/1FAIpQLSfLRSJVurp-PdHauF2ZjSDSe6f5j9sS80_kl1dvmked06lVnw/viewform
ohrm_contact_email: 'jacqueline.coleman@gsa.gov'
ohrm_contact_name: 'Jacqueline Coleman'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'
---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} {{ page.title }}.
{% if page.opens == 'tbd' %}
The target date for when this position will be officially open to application has not yet been determined. If you'd like to 
be notified when this position is open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
{% else %}
Applications will be open for submission at {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check 
out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
{% endif %}

## Basic Information

**Locations:**
{{ page.locations }}

**Salary Range:**
Base salary GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are 
selected. Total compensation may include locality pay based on the individual's duty location. For more salary information 
including locality pay details, please visit 
[OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/).

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:
### {{ page.title }} - GS {{ page.gs_level }}

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



## Minimum Qualifications

The information in this sections outlines the criteria that your application will be evaluated against to determine if you 
meet the Minimum Qualifications for the position. There are two very important things to note about this step in the process:

- Only applications found "minimally qualified" are shared with the hiring manager and are the only candidates eligible to 
be interviewed
- The Minimum Qualification determination can only be made using the information that's directly within your resume and 
directly associated your listed work experience.
  - Examples of stuff that can't be used:
    - Links to portfolios or other external materials (Yes, the links themselves may be "directly" on the resume but the 
    information is not).
    - Information you include in cover letters, responses to questions, etc. as these are not directly associated with your 
    work experience
    - Lists of tools, technologies, programming languages, etc. that are listed separately from your work experience

The Minimum Qualification process is a bureaucratic requirement that we are stuck with. It's best to think about it as the 
most intense and rigorous resume review you've ever heard of. To get through this process you need make sure your resume 
directly reflects the qualifications listed below. We also have more guidance on creating a federal style resume on [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/)

### Specialized Experience
To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }}
in the Federal service. Specialized experience is:

1. Experience being a part of a team to deliver digital products or services. This experience must include **ALL** of the following:
- Providing technical support or product development for clients
- Delivering tools or products with high uptime or availability requirements (i.e. SLAs of 99.9%+)
- Experience using Site Reliability Engineering or DevOps practices in a production environment


2. Experience providing technical expertise on projects or initiatives to deliver digital products or services. This experience must include **ONE** of the following:
- Conducting technology evaluations
- Making architectural decisions
- Developing new software features by writing code
- Reducing technical debt
- Leading incident response


3. Experience deploying, operating, maintaining, or running a cloud infrastructure or platform. This experience must include **TWO** of the following: 
- Using a cloud computing platform
- Using cloud computing infrastructure
- Using continuous integration or continuous deployment tools
- Using infrastructure automation tooling
- Using infrastructure monitoring tooling
- Developing and using software in the Ruby language ecosystem

{% else %}

{{ page.org }} is hiring for GS-{{ page.gs_level }} {{ page.title }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.

**Quick Links to Posting Sections**
- [Basic Information](#basic-information)
- [Qualifications](#qualifications)
- [How to apply](#how-to-apply)

## Role Summary:
### {{ page.title }} - GS {{ page.gs_level }}

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



## Basic Information

**Job announcement number:**
{{ page.job_announcement_number }}

**Opening and closing period for this job application:**
{{ page.opens | date: '%A, %B %e, %Y' }} to {{ page.closes | date: '%l:%M%P %Z EDT on %A, %B %e, %Y' }}

**Job Title:**
{{ page.pd_job_title }}

**Series & Grade:**
{{ page.series }} - {{ page.gs_level }}

**Promotion Potential:**
GS-{{ page.promotion_potential }}

**Salary Range:**
Base Salary - ${{ page.salary_min }} to ${{ page.salary_max }}

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pa
y-leave/salaries-wages/) or for a salary calculator [OPM's 2018 General Schedule (GS) Salary Calculator](https://www.opm.gov/
policy-data-oversight/pay-leave/salaries-wages/2018/general-schedule-gs-salary-calculator/). If you are a new federal 
employee, your starting salary will likely be set at the Step 1 of the grade for which you applied to.

**Locations:**
{{ page.locations }}

**Number of vacancies:**
{{ page.num_vacancies }} (Additional vacancies may be filled from this announcement as needed)

**Supervisory status:**
{{ page.supervisory_status }}

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and non-GSA employees/contractors 
are eligible to apply.

**Security clearance:**
Public trust. Background investigation required.

**Work Schedule:**
Full time

**Appointment Type:**
Excepted Service: Not to exceed 24 months (2 years); may be extended for an additional 2 years for a maximum of 4 years 
total.


## Job Summary

This is a Schedule A position under 5 CFR 213.3102(r) to hire unique technical skills to develop innovative digital tools 
and services in the Excepted Service. TTS is charged with developing innovative digital tools and services. TTS uses lean 
start­up and agile development principles to make easy things easy and hard things possible.

As an Innovation Specialist the incumbent serves the government and makes an impact on a truly massive scale. The position 
requires that fellows perform work of an exceptional degree of difficulty across a wide range of topics at the convergence of
technology, policy, and delivery. The incumbent leverages his/her experience deploying high quality, user centric platforms 
and services to lead major initiatives, consult on systems and policy proposals, and provide technical, policy, and 
programmatic guidance to government. The position involves access to PII data.

This position is located within the General Services Administration (GSA),  Federal Acquisition Service (FAS), 
Technology Transformation Service (TTS), Office of 18F.

GSA has been repeatedly named as one of the ['Best Places to Work'](http://bestplacestowork.org/BPTW/rankings/overall/mid)  
in the federal government.
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
- Have your identity and work status eligibility verified if you are not a GSA employee.  We will use the Department of 
Homeland Security’s e-Verify system for this
- Any discrepancies must be resolved as a condition of continued employment
- Complete a financial disclosure report to verify that no conflict, or an appearance of conflict, exists between your 
financial interest and this position

## Duties
Typical duties include but are not limited to: Conceiving/recommending projects/studies to advance the state of the art in
the specialty area; applying forward thinking design and development principles to product or services development, delivery
and program management, such as lean startup, user centered design, and agile development; Analyzing and scoping the 
technical and policy requirements needed to implement complex digital solutions; Assessing the state of digital services 
provided by the Federal Government, and working to align strategies and practice; conferring with key government/private 
officials and top experts in the field, representing the agency at technical symposia and/or conferences; Developing 
authoritative papers/reports; developing and leading adoption of government wide standards for digital services, leading to 
their adoption across citizen and business facing government Services; Demonstrating thought leadership and contributing 
best practices in a variety of technologies and principles; Contributing to a talent strategy that includes recruiting
innovators and entrepreneurs to participate in solving complex and esoteric challenges.

## Evaluations
We will use a method called Category Rating to assess your application.

**Here’s how it will work:**

You will be scored based on a review of your application materials, measuring your possession of each of the following 
competencies

- **Maintainable Software Development:** Knowledge and ability to develop software, with emphasis on reliability, automation, testing, measuring, and scaling infrastructure
- **Modern Infrastructure Practices and Architecture:** Ability to operate complex software at scale in a cloud environment 
using principles of Site Reliability Engineering and DevOps
- **Production Operations:** Ability to operate production systems at scale with high availability
- **Communication:** Ability to communicate effectively with a variety of audiences and stakeholders to establish a shared 
vision and understanding of a project’s technical implementation, objectives, and goals 
- **TTS Core Values Alignment:** Working with integrity, transparency and resiliency in civic minded or high impact driven environment

If found to be eligible and at least minimally qualified for the position, your score will be used to place you in a 
category (Best Qualified, Well Qualified, or Qualified).

If your resume does not support your possession of the competencies listed above, we may lower your score, which could place
you in a lower category.

Within each category, veterans will receive selection priority over non-veterans if supported by appropriate documentation.

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

1. Experience being a part of a team to deliver digital products or services. This experience must include **ALL** of the following:
- Providing technical support or product development for clients
- Delivering tools or products with high uptime or availability requirements (i.e. SLAs of 99.9%+)
- Experience using Site Reliability Engineering or DevOps practices in a production environment


2. Experience providing technical expertise on projects or initiatives to deliver digital products or services. This experience must include **ONE** of the following:
- Conducting technology evaluations
- Making architectural decisions
- Developing new software features by writing code
- Reducing technical debt
- Leading incident response


3. Experience deploying, operating, maintaining, or running a cloud infrastructure or platform. This experience must include **TWO** of the following:
- Using a cloud computing platform
- Using cloud computing infrastructure
- Using continuous integration or continuous deployment tools
- Using infrastructure automation tooling
- Using infrastructure monitoring tooling
- Developing and using software in the Ruby language ecosystem

{% endif %}

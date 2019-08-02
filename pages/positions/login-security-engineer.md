---
title: Login.gov - Security Ops Engineer
permalink: /join/security-ops-engineer/
state: closed
job_post_type: tts

# INSTRUCTIONS UPCOMING: These fields are required for upcoming
role_name: Security Ops Engineer
opens: 'TBD'
closes: 'TBD'
location: 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% remote)'
gs_level: 15
salary_min: '106,595'
salary_max: '138,572'
org: 'Login.gov'
contact_name: 'Leigh Finkel'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

job_announcement_number: 'TBD'
pd_job_title: 'Innovation Specialist'
num_vacancies: '1'
series: '0301'
apply_url: https://docs.google.com/forms/d/e/1FAIpQLSc0dwDHy4BShFm-PWKnzeG7RCwf5DIquz_cgTxriPZbCFANbA/viewform?usp=sf_link
ohrm_contact_email: 'jacqueline.coleman@gsa.gov'
ohrm_contact_name: 'Jacqueline Coleman'
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
  {{ page.org }} is hiring for GS-{{ page.gs_level }} - {{ page.role_name }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
{% endif %}

**Locations:**
{{ page.location }}

**Salary Range:**
The base salary range for this position is: GS-{{ page.gs_level }} Step 1 - ${{ page.salary_min }} to GS-{{ page.gs_level }} Step 10 ${{ page.salary_max }}

Please note the maximum salary available for the GS pay system is **$166,500**

The base salary range does not include any adjustment for locality. Your locality is most likely going to be determined by where you live since most of our positions are remote. If the position isn't remote, then your locality will be determined by the location of the office where the position is based.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM's 2019 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2019/general-schedule-gs-salary-calculator/).

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:

### {{ page.role_name }} - GS-{{ page.gs_level }}

Login.gov gives the public simple, secure access to multiple government services through one verified account. Login.gov has
over 10 million users is growing the team as we scale quickly.

Login.gov is looking for qualified engineers to join our product team. We care deeply about providing the best possible 
experience to anyone using government digital services and we are committed to making the process easy while combating fraud
and abuse of government systems. A qualified candidate is ready to quickly jump in and help in a number of areas: using 
security best practices and encryption to protect user data, improving the security of the application and its underlying 
infrastructure, using data and analytics to improve the platform and fight fraud, building in support for many multi-factor 
authentication options including Webauthn and PKI Authentication, providing the best possible identity verification 
experience, and generally improving the overall user experience.

The Security Ops Engineer role on the Login.gov team is perfect for you if you are a DevOps engineer who also practices the
art of security with a passion for cybersecurity and a sound awareness of the latest threats and trends.  

The Login.gov team operates like a startup within the government, working in the open as a distributed, agile team. The core
product is open source, hosted in modern cloud infrastructure, and built for scale. Tens of millions of people have Login.gov
accounts, and we aim to be the preferred entrypoint for all government digital services. Our users include people accessing 
benefits, applying for government jobs, serving in the military, and collecting funds awarded through grant programs. 

As part of the Login.gov engineering team, you will play a key role in making government services more secure and accessible
to the public.

## Key Objectives

### Objective #1: Operate within Cloud Services, ensuring security of sensitive data.

- Guide and perform security activities including vulnerability testing and analysis, code review, static and dynamic code 
testing, ethical hacking and business logic exploit testing
- Implement automation framework within cloud computing infrastructure around security events
- Automate infrastructure security testing and penetration testing
- Identify, analyze and correct security related issues within a open source, live services environment

### Objective #2: Collaborate effectively on a distributed, agile team.

- Work within a distributed, multidisciplinary agile team by participating in constructive discussions, openly sharing 
knowledge, and demonstrating value for technical and non-technical contributions
- Demonstrate a strong understanding of the elements of agile methodology (scrum, kanban, and so on)
- Work alongside DevOps Engineers to ensure that security vulnerabilities are assessed and fixed during development
- Peer review code submitted by team members in a fair and respectful manner and have your own code peer reviewed by team 
members
- Participate in regular retrospectives and provide feedback to help improve the way the team works
- Take on self-guided initiatives that may be experimental in nature
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual 
differences

### Objective #3: Participate in decision-making that leads to a platform with the right balance of security and usability for end-users and integrating partners.

- Provide perspective and expertise to help make product decisions
- Contribute to building the product roadmap
- Develop creative approaches to solve difficult problems with many constraints and competing interests
- Interact with agency partners & lead partner engagements 
- Prioritize available work and direct effort towards the highest value goals

{% if page.state != 'upcoming' %}

## Basic Information

**Locations:**
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

**Salary Range:**
Base Salary - ${{ page.salary_min }} to ${{ page.salary_max }}

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pa
y-leave/salaries-wages/) or for a salary calculator [OPM's 2019 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2019/general-schedule-gs-salary-calculator/). If you are a new federal 
employee, your starting salary will likely be set at the Step 1 of the grade for which you applied to.

**Locations:**
{{ page.locations }}

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
  
This is a Schedule A position under 5 CFR 213.3102(r) to hire unique technical skills to develop innovative digital tools and services in the Excepted Services, US Digital Service 18F Fellowship Program. The 18F office is charged with developing innovative digital tools and services and uses lean startup and agile development principles to collaborate with other agencies to fix technical problems, build products, and improve how government serves the public through technology.

As an Innovation Specialist, the team member serves the government and makes an impact on a massive scale. The position requires that fellows perform work of an exceptional degree of difficulty across a wide range of topics at the convergence of technology, policy, and delivery. The incumbent leverages their experience deploying high quality, user centric platforms and services to lead major initiatives, consult on systems and policy proposal, and provide technical, policy, and programmatic guidance to government.

This position is located within the General Services Administration (GSA),  Federal Acquisition Service (FAS), Technology Transformation Service (TTS), Office of 18F.

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

## Duties

Typical duties for the fellow include but are not limited to:
Conceiving/recommending projects/studies to advance the state of the art in the specialty area; applying forward­ thinking design and development principles to product or services development, delivery and program management, such as lean startup, user­centered design, and agile development; Analyzing and scoping the technical and policy requirements needed to implement complex digital solutions; Assessing the state of digital services provided by the Federal Government, and working to align strategies and practice; conferring with key government/private officials and top experts in the field, representing the agency at technical symposia and/or conferences; Developing authoritative papers/reports; developing and leading adoption of government­wide standards for digital services, leading to their adoption across citizen and business­facing government services; Demonstrating thought leadership and contributing best practices in a variety of technologies and principles; Contributing to a talent strategy that includes recruiting innovators and entrepreneurs to participate in solving complex and esoteric challenges.

{% endif %}

{% if page.state == 'upcoming' %}

## Application Evaluation

The information in this sections outlines the criteria that your application will be evaluated against to determine if you meet the Qualifications for the position. There are two very important things to note about this step in the process:

1. Only applications found "minimally qualified" are shared with the hiring manager and are the only candidates eligible to be interviewed
2. The Minimum Qualification determination can only be made using the information that's directly within your resume and directly associated your listed work experience.
  - Examples of stuff that can't be used:
    - Links to portfolios or other external materials (Yes, the links themselves may be "directly" on the resume but the information is not).
    - Information you include in cover letters, responses to questions, etc. as these are not directly associated with your work experience
    - Lists of tools, technologies, programming languages, etc. that are listed separately from your work experience

  The Qualification process is a bureaucratic requirement that we are stuck with. It's best to think about it as the most intense and rigorous resume review you've ever heard of. To get through this process you need make sure your resume directly reflects the Qualifications listed below. We also have more guidance on creating a federal style resume on [Join TTS Hiring Process]({{site.baseurl}}/resume/)

{% endif %}  

{% if page.state != 'upcoming' %}

## Evaluation

We will use a method called Category Rating to assess your application.

**Here’s how it will work:**

You will be scored based on a review of your application materials, measuring your possession of each of the following competencies

- **Maintainable Software Development with Security Practices:** Knowledge and ability to develop software, with emphasis on security reviews, automation, testing, auditing, and securing infrastructure
- **Modern Infrastructure Practices and Architecture:** Ability to operate complex software at scale in a cloud environment using principles of DevOps
- **Production Security Operations:** Ability to operate and secure production systems which scale with high availability
- **Communication:** Ability to communicate effectively with a variety of audiences and stakeholders to establish a shared vision and understanding of a project’s technical implementation, objectives and goals
- **TTS Core Values Alignment:** Working with integrity, transparency and resiliency in civic minded or high impact driven environment

If found to be eligible and at least minimally qualified for the position, your score will be used to place you in a category (Best Qualified, Well Qualified, or Qualified).

If your resume does not support your possession of the competencies listed above, we may lower your score, which could place you in a lower category.

Within each category, veterans will receive selection priority over non-veterans if supported by appropriate documentation.

{% endif %}

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

1. Experience being a part of a team to deliver digital products or services. This experience must include **ALL** of the following:
- Delivering tools and measures to address new security threats
- Experience in DevOps practices 
- Experience in Security Operations Center practices 

2. Experience providing technical expertise on projects or initiatives to deliver digital products or services. This experience must include **ONE** of the following:
- Making architectural decisions that improves security of software and underlying services
- Leading security incident response
- Leading efforts to support governance, risk management and compliance activities

3. Experience deploying, or securing a cloud infrastructure or platform. This experience must include **TWO** of the following:
- Using a cloud computing platform
- Using cloud computing infrastructure
- Using  integration or continuous deployment tools
- Using infrastructure security monitoring tooling
- Using infrastructure security vulnerability detection tooling
- Developing and using software in a cloud and security services ecosystem

Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:

- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

---
title: 18F - Recruiter
permalink: /join/recruiter/
state: closed 
job_post_type: tts 

# INSTRUCTIONS UPCOMING: These fields are required for upcoming

opens: 'tbd'
closes: 'tbd'
location: 'Virtual (100% Remote); Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Boston, MA'
gs_level: 15
salary_min: '134,778' 
salary_max: '164,200' 
org: '18F' 
contact_name: 'Amanda Schonfeld'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

job_announcement_number: 'ENTER JOB ANNOUNCEMENT NUMBER'
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
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} {{ page.title }}.
{% if page.opens == 'tbd' %}
The target date for when this position will be officially open for applying has not yet been determined. If you’d like to be notified when this position is open, sign up to our [mailing list]({{ site.baseurl }}/newsletter) and select Operations.
{% else %}
Applications will be open for submission at {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
{% endif %}

## Basic Information

**Location:**
{{ page.location }}

**Salary Range:**
GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}


**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:

### {{ page.title }} - GS-{{ page.gs_level }}

As a Talent Acquisition Lead for the Office of 18F, Recruitment as a Service, you’ll act as an
ambassador for our agency partners, representing their work and job opportunities to a diverse set of highly skilled
candidates. You will potentially be recruiting for a wide range of disciplines including: design, engineering, product
managers, strategists and business operations. You’ll work closely with hiring managers to implement targeted attraction
strategies, and you’ll also ensure that all of the candidates have a pleasant application experience.



## Key Objectives

### You'll attract highly qualified and engaged candidates to our agency partners and shepherd them through the federal application process.   
- Increase awareness of and clarify GSA’s and TTS’ mission and service offerings
- Develop and nurture relationships with the technology contracting community 
- Showcase impact of TTS’ work 
- Move engagement stakeholders from awareness to action
- Build the TTS brand and support recruitment efforts 


### Key objective #2: You will develop and institutionalize a comprehensive and highly successful recruitment strategy for your discipline. 
- Cultivate a deep knowledge of and curiosity about the technology space
- Identify gaps and issues with the hiring process by conducting user research; use concrete data (user analytics) to develop
solutions
- Generate high-impact, tailored content for outreach materials, presentations, and communications; find ways to meaningfully
connect with candidates
- Diligently maintain applicant data and find new ways to use that data to inform hiring strategies


### Key objective #3: You will maintain strong relationships and advise our agency partners who need recruitment as a service.
- Navigate bureaucratic relationships and complex organizational structures to get buy-in from hiring managers around a
talent acquisition strategy
- Spend time understanding our partners’ business in order to effectively build talent acquisition strategies for them
- Maintain relationships through responsive and proactive touchpoints

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

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }}
in the Federal service. Specialized experience is:

Experience developing and executing a talent acquisition program and managing hiring manager/client relationships. 
This experience must include **ALL** of the following:  

- Leading stakeholders/clients through participation in the talent acquisition process
- Recruiting for open source technology positions that function in an agile and user centered design environment
- Recruiting for additional disciplines including: design (visual, UX, or content) or product managers
- Developing and implementing targeted recruitment attraction and acquisition strategies
- Conducting direct recruitment outreach via a variety of methods (e.g. networking, email, social media, events, job postings and cold calling)
- Sourcing candidates using Boolean, LinkedIn and alternative search techniques
- Working with hiring teams to drive recruiting efforts, increase hiring efficacy, and improving process efficiency
- Working on cross functional teams using collaboration, open communication, or working across functional borders


{% else %}

{{ page.org }} is hiring for GS-{{ page.gs_level }} {{ page.title }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.

**Quick Links to Posting Sections**
- [Basic Information](#basic-information)
- [Qualifications](#qualifications)
- [How to apply](#how-to-apply)

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
Base salary GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM's 2018 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2018/general-schedule-gs-salary-calculator/). If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you applied to.

**Location:**
{{ page.location }}

**Number of vacancies:**
{{ page.num_vacancies }} (Additional vacancies may be filled from this announcement as needed)

**Supervisory status:**
{{ page.supervisory_status }}

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and non-GSA employees/contractors are eligible to apply.

**Security clearance:**
Public trust. Background investigation required.

**Work Schedule:**
Full time

**Appointment Type:**
Excepted Service: Not to exceed 24 months (2 years); may be extended for an additional 2 years for a maximum of 4 years total.


## Job Summary

This is a Schedule A position under 5 CFR 213.3102(r) to hire unique technical skills to develop innovative digital tools and services in the Excepted Service. TTS is charged with developing innovative digital tools and services. TTS uses lean start­up and agile development principles to make easy things easy and hard things possible.

As an Innovation Specialist the incumbent serves the government and makes an impact on a truly massive scale. The position requires that fellows perform work of an exceptional degree of difficulty across a wide range of topics at the convergence of technology, policy, and delivery. The incumbent leverages his/her experience deploying high quality, user centric platforms and services to lead major initiatives, consult on systems and policy proposals, and provide technical, policy, and programmatic guidance to government. The position involves access to PII data.

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
2. Suitable for federal employment, determined by a background investigation.
3. You may be required to serve a trial period.
4. Direct Deposit of salary check to financial organization required.
5. Register with Selective Service, if you are required by [https://www.sss.gov/Registration-Info/Who-Registration](https://www.sss.gov/Registration-Info/Who-Registration).

## Employment Requirements
- Serve a one year trial period, if required.
- Undergo and pass a background investigation.  You must be granted this clearance before you can start the job.
- Have your identity and work status eligibility verified if you are not a GSA employee.  We will use the Department of Homeland Security’s e-Verify system for this.
- Any discrepancies must be resolved as a condition of continued employment.
- Complete a financial disclosure report to verify that no conflict, or an appearance of conflict, exists between your financial interest and this position.

## Duties
Typical duties include but are not limited to: Conceiving/recommending projects/studies to advance the state of the art in the specialty area; applying forward thinking design and development principles to product or services development, delivery and program management, such as lean startup, user centered design, and agile development; Analyzing and scoping the technical and policy requirements needed to implement complex digital solutions; Assessing the state of digital services provided by the Federal Government, and working to align strategies and practice; conferring with key government/private officials and top experts in the field, representing the agency at technical symposia and/or conferences; Developing authoritative papers/reports; developing and leading adoption of government wide standards for digital services, leading to their adoption across citizen and business facing government Services; Demonstrating thought leadership and contributing best practices in a variety of technologies and principles; Contributing to a talent strategy that includes recruiting innovators and entrepreneurs to participate in solving complex and esoteric challenges.

## Evaluations
We will use a method called Category Rating to assess your application.

**Here’s how it will work:**

You will be scored based on a review of your application materials, measuring your possession of each of the following competencies

COPY AND PASTE THE COMPETENCY BULLET POINTS FROM THE SPECIALIZED EXPERIENCE

If found to be eligible and at least minimally qualified for the position, your score will be used to place you in a category (Best Qualified, Well Qualified, or Qualified).

If your resume does not support your possession of the competencies listed above, we may lower your score, which could place you in a lower category.

Within each category, veterans will receive selection priority over non-veterans if supported by appropriate documentation.

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

ENTER SE THAT WILL BE ON JOB ANNONOUCEMENT SENT TO HR

Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:
- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

{% endif %}

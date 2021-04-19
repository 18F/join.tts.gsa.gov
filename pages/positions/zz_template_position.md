---
title: ENTER OFFICE HERE - ENTER ROLE TITLE HERE
# permalink: /join/ENTER ROLE TITLE HERE/
# state: ENTER STATE HERE (open, closed, upcoming)
# job_post_type: ENTER TYPE HERE (tts or usajobs)

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
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} - {{ page.role_name }}.
  {% if page.opens == 'tbd' %} The target date for when this position will be officially open to application has not yet been determined. If you'd like to be notified when this position is open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {% endif %}
  
  Applications will be open for submission on {{ page.opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process. 
{% endif %}

{% if page.state != 'upcoming' %}
  {{ page.org }} is hiring for GS-{{ page.gs_level }} - {{ page.role_name }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
{% endif %}

**Location:**
{{ page.location }}

**Salary Range:**
The salary range for this position is: GS-{{ page.gs_level }} Step 1 - ${{ page.salary_min }} to GS-{{ page.gs_level }} Step 10 ${{ page.salary_max }}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM's 2021 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2021/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$172,500** 

Note: You may not be eligible for the maximum salary as it is locality dependent. Please refer to the maximum pay for your locality. 

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:

### {{ page.role_name }} - GS-{{ page.gs_level }}

18F is looking for talented software developers who will help our partner agencies deliver better digital services to the public. As a Consulting Engineer at 18F, you will be a builder, contributor, and catalyst. Working with folks across the organization, you will solve large, complex problems while promoting user-centered, open, and transparent culture. The role involves diverse responsibilities — you might be writing code one day, meeting with members from partner agencies another day, and launching a new product that will impact the lives of Americans across the country the next week. [18F is an open-source team](https://18f.gsa.gov/2014/07/29/18f-an-open-source-team/), so most of what you work on will be open source.

This role may be perfect for you if you have the technical skills to tackle engineering problems, the social skills to face human-factors problems, and the judgment to differentiate between the two. Our ideal candidate will be equally excited about sticky technical issues and intricate human ones. Impact in this role can’t be measure on a GitHub contribution graph; ideal candidates should be equally comfortable solving technical problems by writing code, explaining technical design architecture to technical and less technical folks alike, and leading organizational strategy and change.

18F’s core languages are Ruby, Python, JavaScript, and Go. You should have strong, demonstrable experience with at least one of these languages and should be proficient in web development, relational databases, and using Unix-like operating systems. You should understand engineering best practices such as source control, automated testing, continuous integration and deployment, and peer review. The strongest candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment.

## Key Objectives

### Key objective #1: You’ll contribute high-quality, well-tested, maintainable code across an entire project lifecycle, using best practices for modern software development.

- Practice and enthusiastically share engineering methodologies and tools throughout all stages of the project lifecycle
- Influence project planning and design using usability research, analytics, and other metrics
- Participate in code review, architecture discussions, and feature prioritization
- Take pride of ownership in all projects you touch; leave code better than you found it
- Contribute to documentation, tests, style fixes, accessibility, performance, security, and more
- Deliver code that’s easy to deploy, update, and monitor by ensuring that the necessary tooling is present early in the project development cycle or by introducing tooling into an existing project, as needed

### Key objective #2: You’ll positively contribute to the culture and knowledge of the engineering team, practicing and enthusiastically sharing agile methodologies throughout all stages of the project lifecycle.

- Work within a distributed, multidisciplinary agile team by participating in constructive discussions, openly sharing knowledge, and demonstrating value for technical and non-technical contributions
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences
- Provide visibility into each project’s progress, communicate blockers and challenges, and ask for help when you need it
- Demonstrate a strong understanding of the elements of agile methodology (scrum, kanban, and so on)
- Practice human-centered design, user testing, feature prioritization, DevOps, and other relevant concepts

### Key objective #3: You’ll meet customer expectations, along with personal and organizational goals. You’ll produce high-quality results by applying technical knowledge, analyzing problems, and calculating risk.

- Hold yourself and your team accountable for measurable, high-quality, timely, and cost-effective results
- Demonstrate your credibility in your area of expertise, deliver high-quality work, and accept responsibility for mistakes
- Meet the needs of internal and external customers
- Make well-informed, effective, and timely decisions
- Identify and analyze problems in a constructive manner
- Explain technical issues and concepts clearly to both technical and non-technical audiences

### Key objective #4: You’ll lead change, both within and outside the organization, to meet organizational goals. You’ll help establish an organizational vision and implement it in a continuously changing environment.

- Develop new insights into situations and question conventional approaches
- Develop, implement, and drive technical strategy in engineering-specific and organization-wide contexts
- Keep up-to-date on policies and trends that affect the organization and shape stakeholders’ views
- Adapt to change and quickly integrate new information
- Formulate and execute consistently against objectives and priorities
- Take a long-term view and build a shared vision with people across TTS, GSA, and across the US Government

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
{{ page.opens | date: '%A, %B %e, %Y' }} EDT to {{ page.closes | date: '%l:%M%P %Z on %A, %B %e, %Y' }} EDT

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

- **Software Engineering Technical Experience:** Deliver technical solutions and products using software engineering technology
- **Software Engineering Practices:** Deliver innovative technical solutions and products using established engineering best practices
- **Communication:** Communicate effectively with a variety of audiences, particularly in consulting scenarios, to establish a shared vision and understanding of a project’s technical implementation, objectives and goals
- **Technical Strategy:** Advising on technical strategy, agile development, software tools, and technical architecture
- **TTS Core Values Alignment:** Working with integrity, transparency and resiliency in civic minded or high impact environment

If found to be eligible and at least minimally qualified for the position, your score will be used to place you in a category (Best Qualified, Well Qualified, or Qualified).

If your resume does not support your possession of the competencies listed above, we may lower your score, which could place you in a lower category.

Within each category, veterans will receive selection priority over non-veterans if supported by appropriate documentation.

{% endif %}

## Qualifications

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In
order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume
and following our general guidance on creating federal style resume.

To qualify for this role, you must have one year of specialized experience equivalent to the GS-{{ page.gs_level | minus: 1 }} in the Federal service. Specialized experience is:

1. Experience as a consultant or internal developer managing client, partner, or account relationships to deliver on large or complex projects as part of a cross-functional team. This experience must include **ONE** of the following:
- Delivering projects with complex requirements, multiple stakeholders with disparate views or high levels of bureaucracy
- Delivering public-facing products or features on public-facing products with a large number of users (i.e. 100,000+)
- Delivering tools or products with high uptime or availability requirements (i.e. SLAs of 99.9%+)

2. Experience developing full-stack web applications using test-driven development, delivering measurable results for clients. This experience must include **ALL** of the following:
- Developing digital applications using **ONE** of the following server-side languages: Python, Ruby, Go or Node.js
- Developing digital applications using a relational or non-relational data layers
- Developing digital applications using test-driven development and software testing tools

3. Experience deploying or operating digital applications on cloud technologies. This experience must include **ONE** of the following:
- Developing digital applications using Infrastructure-as-a-Service (IaaS)
- Developing digital applications using Platform-as-a-Service (PaaS)
- Developing digital applications using containerization technologies
- Developing digital applications using configuration management tools
- Developing digital applications using infrastructure automation tooling

Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:

- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

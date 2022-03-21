---
title: Login.gov - Director
permalink: /join/login-director/
state: open
job_post_type: usajobs
# info_sessions:
#  - text: TEXT FOR INFO SESSION LINK
#    link: EVENTBRITE LINK
#    date: ENTER DATE
#    time: ENTER TIME
#  - text: (repeat as necessary)
#    link: (repeat as necessary)
#    date: (repeat as necessary)
#    time: (repeat as necessary)

# INSTRUCTIONS UPCOMING: These fields are required for upcoming
role_name: Director
opens: TBD
closes: TBD
location: 'Virtual (100% Remote), Washington, DC; San Francisco, CA; Chicago, IL; New York, NY'
gs_level: '15'
salary_min: '131,178'
salary_max: '176,300'
org: Login.gov
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

# job_announcement_number: '22FASC250JCOTR'
# pd_job_title: 'Supervisory Information Technology Specialist'
# num_vacancies: '1'
# series: '2210'
# apply_url: https://www.usajobs.gov/job/643330100
# ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
# ohrm_contact_name: 'John Chiu'
# bargaining_unit: 'Non Bargaining Unit'
# promotion_potential: 'GS-15' (13, 14, 15, etc.)
# supervisory_status: 'YES'
---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} - {{ page.role_name }}.
  {% if page.opens == 'tbd' %} The target date for when this position will be officially open to application has not yet been determined. If you'd like to be
  notified when this position is open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {% endif %}
  {% unless page.opens == 'tbd' %}
  Applications will be open for submission on {{ page.opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process. 
  {% endunless %}
{% endif %}

{% if page.state != 'upcoming' %}
  {{ page.org }} is hiring for GS-{{ page.gs_level }} - {{ page.role_name }}. This page contains information related to the role as well as a link to submit your
  application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process. **Please note we will be reviewing
  applications on a rolling basis so we encourage candidates to apply as soon as possible for consideration.**
{% endif %}

<div class="grid-row grid-gap padding-top-4">

<div class="desktop:grid-col-4 desktop:margin-top-0" style="order:1">
{% if page.info_sessions %}
  <div class="usa-summary-box">
    <div class="usa-summary-box__body">
      <h3 class="usa-summary-box__heading">
        Attend an information session
      </h3>
      <div class="usa-summary-box__text" markdown="1">
Attend an information session to learn more about these roles, working at TTS, and our application process. Register for a session using the Eventbrite links below.

{% for session in page.info_sessions %}
- [{{session.text}} Info Session]({{session.link}}), {{session.date}} at {{session.time}}
{% endfor %}
</div>
</div>
</div>
{% endif %}
</div>
<div class="desktop:grid-col-8 usa-prose" markdown="1">
**Location:**
{{ page.location }}

**Salary Range:**
The salary range for this position is: GS-{{ page.gs_level }} Step 1 - ${{ page.salary_min }} to GS-{{ page.gs_level }} Step 10 ${{ page.salary_max }}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a
salary calculator [OPM's 2022 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2022/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$176,300** 

Note: You may not be eligible for the maximum salary as it is locality dependent. Please refer to the maximum pay for your locality. 

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands).

## Role Summary:

### {{ page.role_name }} - GS-{{ page.gs_level }}

Login.gov is the public’s one account for government. Login.gov provides a secure, compliant authentication and identity proofing product. In this role, you will help lead the product development, technical strategy, and growth for Login.gov’s products, services, and offerings all while focusing on the customer experience and service delivery for the American People.

In this role, you will be primarily responsible for growing the size and scope of the Login.gov program, which is seeking to dramatically scale adoption in the next year. Responsibilities will include setting the strategic direction for the program, identifying new business opportunities and potential customers, working with existing customers, and managing operations, staffing, and budgeting. You will lead a team of technical and business resources responsible for the day-to-day operations of the Login.gov product and platform. You will be the primary liaison between the Login.gov team and both internal and external stakeholders.

In this role you will be involved in agency and government-wide discussions about identity strategy. It is expected that the Login.gov Director will serve as a subject matter expert on the topics of digital identity, cybersecurity, and accessibility, and be a vocal, public advocate for the program and the benefits of adopting Login.gov. 

  

## Key Objectives

### Key objective #1: Expand Login.gov’s product and program offering while driving growth, with a focus on effective scale and sustainability.

- Refine existing services and offerings to meet the needs of current and prospective customers for the platform.
- Develop quarterly and annual product and revenue goals and track progress.
- Develop Login.gov’s external brand by leading external communications and fostering spokespeople on the team to share the message about Login.gov benefits and opportunity by writing blog posts / articles and speaking at government and industry events.
- Represent Login.gov to external parties, such as speaking at conferences, speaking with leadership in other agencies, or speaking to the press. 
- Identify and conduct outreach to federal agencies that represent opportunities for new business for Login.gov 
- Work in partnership with other TTS programs to identify where Login.gov could be a good complement to and/or directly leverage other TTS service offerings. 
- Identify and work with GSA leadership to drive policy changes that could allow for better service to the public.

### Key objective #2: Provide strategic leadership
  
- Set the overall vision, product strategy, and organizational goals for Login.gov, aligning with TTS vision, goals, and values. 
- Lead or facilitate strategic Login.gov initiatives. 
- Coordinate with other members of the TTS leadership team to develop guidance and organizational communication. 
- Collect feedback to discuss successes and challenges, and share patterns and key feedback with the rest of TTS leadership. 
- Uphold the commitment to the public and always weigh the public’s needs and experiences with federal agencies
- Represent the program in the TTS Solutions Senior Management Team (SMT) and communicate information back to the program. Promote transparency in how decisions are made. Regularly include others in planning and decision-making. 
- Create a work environment that fosters trust, respect, and collaboration, since the best work comes from including diverse skill sets and backgrounds. Uphold TTS values of inclusion, integrity, and impact.
- Identify power dynamics in situations; respond thoughtfully and create space for less powerful voices. 
- Promote collective success; plan and ensure there is time for collaborative decision-making; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
- Identify Login.gov and TTS processes in need of improvement and oversee improvement activities. 
- Research, develop, and encourage best practices in the fields of identity and security, and create space for experimentation and iteration. 
- Craft strategic, data-driven hiring plans for the Login.gov team that align with TTS’ hiring strategy and trends in partner needs. Include sourcing strategies and interview practices to ensure a diverse candidate pool and inclusive hiring process. Our goal is for our team to reflect the diversity of the American public. 
- Ensure Equal Employment Opportunity (EEO) regulations are followed throughout recruitment, hiring, and selection processes. 
- Set strategy for knowledge management such that key information is carried forward, to make the Login.gov team resilient to turnover. 


### Key objective #3: Lead a team of product and business professionals

- Act as supervisor for Login.gov branch chiefs, e.g. the Login.gov leadership team.
- Help Login.gov teams align on and adhere to shared processes, deliver results, maintain high standards, and resolve conflicts. Connect teams to resources, amplify team successes, and help teams to pivot or adapt as needed. 
- Help Login.gov teams understand what success looks like. Work with Login.gov teams to regularly demonstrate our expertise and impact. 
- Provide oversight of customer engagements and help Login.gov teams contribute meaningfully to customer success.
- Help identify opportunities for professional growth and learning for Login.gov teams.
- Participate in and lead client-facing work and business development efforts, depending on availability based on other initiatives. 


{% if page.state != 'upcoming' %}

## Basic Information

**Location:**
{{ page.location }}

**Salary Range:**
Base salary GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are selected. Total compensation may include
locality pay based on the individual's duty location. For more salary information including locality pay details, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/).

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
  
This is a Schedule A position under 5 CFR 213.3102(r) to hire unique technical skills to develop innovative digital tools and services in the Excepted Services,
US Digital Service 18F Fellowship Program. The 18F office is charged with developing innovative digital tools and services and uses lean startup and agile
development principles to collaborate with other agencies to fix technical problems, build products, and improve how government serves the public through technology.

As an Innovation Specialist, the team member serves the government and makes an impact on a massive scale. The position requires that fellows perform work of an
exceptional degree of difficulty across a wide range of topics at the convergence of technology, policy, and delivery. The incumbent leverages their experience
deploying high quality, user centric platforms and services to lead major initiatives, consult on systems and policy proposal, and provide technical, policy, and
programmatic guidance to government.

This position is located within the General Services Administration (GSA),  Federal Acquisition Service (FAS), Technology Transformation Service (TTS).

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
Conceiving/recommending projects/studies to advance the state of the art in the specialty area; applying forward­ thinking design and development principles to
product or services development, delivery and program management, such as lean startup, user­centered design, and agile development; Analyzing and scoping the
technical and policy requirements needed to implement complex digital solutions; Assessing the state of digital services provided by the Federal Government, and
working to align strategies and practice; conferring with key government/private officials and top experts in the field, representing the agency at technical
symposia and/or conferences; Developing authoritative papers/reports; developing and leading adoption of government­wide standards for digital services, leading to
their adoption across citizen and business­facing government services; Demonstrating thought leadership and contributing best practices in a variety of technologies and principles; Contributing to a talent strategy that includes recruiting innovators and entrepreneurs to participate in solving complex and esoteric challenges.

{% endif %}

{% if page.state == 'upcoming' %}

## Application Evaluation

The information in this sections outlines the criteria that your application will be evaluated against to determine if you meet the Qualifications for the position.
There are two very important things to note about this step in the process:

1. Only applications found "minimally qualified" are shared with the hiring manager and are the only candidates eligible to be interviewed
2. The Minimum Qualification determination can only be made using the information that's directly within your resume and directly associated your listed work
experience.
  - Examples of stuff that can't be used:
    - Links to portfolios or other external materials (Yes, the links themselves may be "directly" on the resume but the information is not).
    - Information you include in cover letters, responses to questions, etc. as these are not directly associated with your work experience
    - Lists of tools, technologies, programming languages, etc. that are listed separately from your work experience

  The Qualification process is a bureaucratic requirement that we are stuck with. It's best to think about it as the most intense and rigorous resume review you've
  ever heard of. To get through this process you need make sure your resume directly reflects the Qualifications listed below. We also have more guidance on
  creating a federal style resume on [Join TTS Hiring Process]({{site.baseurl}}/resume/)

{% endif %}  

{% if page.state != 'upcoming' %}

## Evaluation

We will use a method called Category Rating to assess your application.

**Here’s how it will work:**

You will be scored based on a review of your application materials, measuring your possession of each of the following competencies

- **Software Engineering Technical Experience:** Deliver technical solutions and products using software engineering technology
- **Software Engineering Practices:** Deliver innovative technical solutions and products using established engineering best practices
- **Communication:** Communicate effectively with a variety of audiences, particularly in consulting scenarios, to establish a shared vision and understanding of a
project’s technical implementation, objectives and goals
- **Technical Strategy:** Advising on technical strategy, agile development, software tools, and technical architecture
- **TTS Core Values Alignment:** Working with integrity, transparency and resiliency in civic minded or high impact environment

If found to be eligible and at least minimally qualified for the position, your score will be used to place you in a category (Best Qualified, Well Qualified, or
Qualified).

If your resume does not support your possession of the competencies listed above, we may lower your score, which could place you in a lower category.

Within each category, veterans will receive selection priority over non-veterans if supported by appropriate documentation.

{% endif %}

## Qualifications

The minimum qualifications for this position will be updated before the public notice goes live. Please check back. Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:
- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

## Next Steps

After the closing date/deadline:
1. **ELIGIBILITY/QUALIFICATIONS:** Applicant eligibility and qualifications are reviewed.
2. **REFERRAL TO MANAGEMENT:** Eligible/Qualified applicants are referred to management for review and possible interview.
3. **SELECTION/TENTATIVE JOB OFFER:** If a selection is made, a Tentative Offer is extended to the selectee and suitability and/or security background investigation is conducted.
4. **FINAL JOB OFFER:** A final job offer is made (typically within 40 days after the closing date/deadline for applications).
5. **FINAL COMMUNICATION TO APPLICANTS:** Once the position is filled, we will notify all applicants of their final status. You may check your status by logging into USAJOBS. Go to My USAJOBS and then to Applications.

</div>
</div>

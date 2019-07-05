---
title: TTS - Technology Portfolio Specialist
permalink: /join/technology-portfolio-specialist/
state: closed
job_post_type: tts

# INSTRUCTIONS UPCOMING: These fields are required for upcoming

role_name: Technology Portfolio Specialist
opens: 'tbd'
closes: 'tbd'
location: 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% Remote)'
gs_level: 15
salary_min: '106,595'
salary_max: '138,572'
org: 'TTS'
contact_name: 'Amanda Schonfeld'
contact_email: 'jointts@gsa.gov'

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
  {% if page.opens == 'tbd' %} The target date for when this position will be officially open to application has not yet been determined. **If you are interested in this position please reach out to [jointts@gsa.gov](mailto:jointts@gsa.gov)**
  {% endif %}
  
  Applications will be open for submission on {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process. 
{% endif %}

{% if page.state != 'upcoming' %}
  {{ page.org }} is hiring for GS-{{ page.gs_level }} - {{ page.role_name }}. This page contains information related to the role as well as a link to submit your application. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
{% endif %}

**Location:**
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

This role lives within the TTS Technology Portfolio Team, which was previously called infrastructure. 

For this role, you will need a thorough knowledge of infrastructure, networking, cloud, integration, data, custom & packaged applications, and security to ensure that TTS’ infrastructure offerings and architecture meets current and future needs in an efficient, sustainable, agile, and adaptable manner. You will be responsible for: 

* Technology Infrastructure
* Information System Security - Ensuring monitoring, compliance and reporting requirements are met 
* Systems governance 
* IT Portfolio Management/Process
  * Acquisition - customer centric compliance/ transparency
  * Sandboxing/piloting


## Key Objectives

### Key objective #1: You will execute initiatives to modernize TTS’ systems and infrastructure, empowering TTS to better deliver on its mission.

- Partner with others in TTS’ operations, and execute on an overall technical strategy, investment, and acquisition plan for TTS that results in lower costs, availability of highly usable software and infrastructure and higher velocity
- Use modern research methods and/or internal TTS research resources to fully understand the real needs of TTS users and the impact driven by systems & cloud infrastructure
- Analyze current system architecture and existing products to identify the functionality and capabilities that can be leveraged and the areas requiring refactoring
- Develop solutions with an API first mindset using reusable components and operational strategies to support scalability, availability, performance, monitoring, backup, etc, to improve the security, resiliency, and agility of infrastructure and applications
- Establish and maintain the technical infrastructure for managing both performance and customer relationship management for TTS
- Foster appropriate and innovative use of new tools by sponsoring or supporting pilot programs
Inspire honesty and integrity through open communication and liberal knowledge sharing 


### Key objective #2: You will develop a framework of best practices and controls to address systems governance and security.

- Take into account DevSecOps practices
- Develop and enforce policy around the use of software and services on TTS local systems
- Coordinate with TTS Office of Acquisition on developing and enforcing policy of FITARA and IT Standards review of acquisitions
- Oversee Information System and Software Authorizations:
- Coordinate with software providers about FedRAMP authorization or component authorization
- Support continuous improvement of the Authority of Operate (ATO) processes, providing feedback and recommendations to GSA IT Security


### Key objective #3: Practice an exceptional level of customer service for TTS, providing a unique, tailored experience.  

- Explain products or services to people who have varying levels of technical knowledge — always meet the people where they’re at
- Facilitate licensing, update, and installation of software and infrastructure process for TTS users that reduces user burden and doesn’t interfere with daily activities 
- Empathetically guide TTS stakeholders through the bureaucracy of the sometimes long and arduous acquisition, compliance, and security processes 
- Develop and make widely available concise and clear instructions on the processes outlined above.
- Skillfully map specific inquiries to product capabilities, identifying the product that best meets the needs of TTS
- Serve as a liaison between the stakeholders and the infrastructure team, delivering feedback to the team, enabling them to make necessary changes to product performance or presentation
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences


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


## Qualifications

Coming soon

Qualification determinations cannot be made when resumes do not include the required information, so failure to provide this information may result in disqualification.

For each job on your resume, provide:

- the exact dates you held each job (from month/year to month/year or “present”)
- number of hours per week you worked (if part time)

---
title: Technology Transformation Services Engineer
permalink: /join/tts-engineer/
state: upcoming
job_post_type: usajobs
info_sessions:
 - text: TTS Engineering info session 
   link: https://www.eventbrite.com/e/tts-info-session-software-engineer-tickets-188738531027
   date: October 26th
   time: 9:30 a.m. PST / 12:30 p.m. EST
 - text: TTS Engineering info session
   link: https://www.eventbrite.com/e/tts-info-session-software-engineer-tickets-188741660387
   date: October 28th
   time: 2 p.m. PST / 5 p.m. EST

# INSTRUCTIONS UPCOMING: These fields are required for upcoming
role_name: Engineer
opens: tbd
# closes: MONTH DAY, YEAR, TIME EDT
location: 'Washington, DC; San Francisco, CA; Chicago, IL; New York, NY; Virtual (100% Remote)'
gs_level: 14-15
salary_min: 'GS14 Step 1 - $108,885 to GS 14 Step 10 $172,500'
salary_max: 'GS-15 Step 1 - $128,078 to GS-15 Step 10 $172,500'
org: TTS
contact_name: 'TTS Talent Team'
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
{{ page.org }} will soon be accepting applications for GS-{{ page.gs_level }} {{ page.role_name }} roles.
  {% if page.opens == 'tbd' %} The target date for when these positions will be officially open to application has not yet been determined. If you'd like to be
  notified when these positions are open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {% endif %}
  
  {% unless page.opens == 'tbd' %}
  Applications will be open for submission on {{ page.opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process. 
  {% endunless %}
{% endif %}

{% if page.state != 'upcoming' %}
{{ page.org }} is hiring for the role of GS-{{ page.gs_level }} {{ page.role_name }}. **There are several {{ page.org }} teams hiring for this role.** Engineers are crucial to TTS significantly improving our products, platforms, and services. This is an opportunity to make a huge difference in the lives of the public and other federal agencies. This page contains a high-level summary of the role. **When the position becomes live for applications, you will have the opportunity to select which role(s) you’re interested in applying for.**
{% endif %}
{% if page.info_sessions %}
{% for session in page.info_sessions %}
- {{session.text}} info session, [{{session.date}} at {{session.time}}]({{session.link}})
{% endfor %}
{% endif %}

## Opportunity overview

These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.

### Role summary
TTS is looking for talented software developers who will help our partner agencies deliver better digital services to the public. As an engineer at TTS, you will be a builder, contributor, and catalyst. Working with folks across the organization, you will solve large, complex problems while promoting user-centered, open, and transparent culture. The role involves diverse responsibilities — you might be writing code one day, meeting with members from partner agencies another day, and launching a new product that will impact the lives of Americans across the country the next week. TTS values open source development, so most of what you will work on will be open source. 

This role may be perfect for you if you have the:
- Technical skills to tackle engineering problems
- Social skills to ask questions and work collaboratively with people from many disciplines 
- Judgment to know when technology does or does not solve a problem 

Our ideal candidate will be equally excited about sticky technical issues and intricate human ones. Impact in this role can’t be measured on a GitHub contribution graph; ideal candidates should be equally comfortable writing code, explaining technical design architecture to both technical and less technical folks, and leading organizational strategy and change.

TTS’ core languages are Ruby, Python, and JavaScript. You should have strong, demonstrable experience with at least one of these languages and be proficient in web development, relational databases, and using Unix-like operating systems. You should understand engineering best practices such as source control, automated testing, continuous integration and deployment, and peer review. Experience in configuring or running in common cloud platforms like AWS, Azure, and Google Cloud is very helpful. The strongest candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment.

### Key objectives
**Key objective #1:** You’ll contribute high-quality, well-tested, maintainable code across an entire project lifecycle, using best practices for modern software development.
- Practice and enthusiastically share engineering methodologies and tools throughout all stages of the project lifecycle
- Influence project planning and design using usability research, analytics, and other metrics
- Participate in code review, architecture discussions, and feature prioritization
- Take pride of ownership in all projects you touch; leave code better than you found it
- Contribute to documentation, tests, style fixes, accessibility, performance, security, and more
- Deliver code that’s easy to deploy, update, and monitor by ensuring that the necessary tooling is present early in the project development cycle or by introducing tooling into an existing project, as needed

**Key objective #2:** You’ll positively contribute to the culture and knowledge of the engineering team, practicing and enthusiastically sharing agile methodologies throughout all stages of the project lifecycle.
- Work within a distributed, multidisciplinary agile team by participating in constructive discussions, openly sharing knowledge, and demonstrating value for technical and non-technical contributions
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences
- Provide visibility into each project’s progress, communicate blockers and challenges, and ask for help when you need it
- Demonstrate a strong understanding of the elements of agile methodology (scrum, kanban, etc)
- Practice human-centered design, user testing, feature prioritization, DevOps, test-driven development, and other relevant concepts

**Key objective #3:** You’ll meet customer expectations, along with personal and organizational goals. You’ll produce high-quality results by applying technical knowledge, analyzing problems, and calculating risk.
- Hold yourself and your team accountable for measurable, high-quality, timely, and cost-effective results
- Demonstrate your credibility in your area of expertise, deliver high-quality work, and accept responsibility for mistakes
- Meet the needs of internal and external customers
- Make well-informed, effective, and timely decisions
- Identify and analyze problems in a constructive manner
- Explain technical issues and concepts clearly to both technical and non-technical audiences

**Key objective #4:** You’ll lead change, both within and outside the organization, to meet organizational goals. You’ll help establish an organizational vision and implement it in a continuously changing environment.
- Develop new insights into situations and question conventional approaches
- Develop, implement, and drive technical strategy in engineering-specific and organization-wide contexts
- Keep up-to-date on policies and trends that affect the organization and shape stakeholders’ views
- Adapt to change and quickly integrate new information
- Formulate and execute consistently against objectives and priorities
- Take a long-term view and build a shared vision with people across TTS, GSA, and across the US Government

### Differences between GS14 and GS15 grade levels
The General Schedule (GS) is the predominant pay scale for federal employees. The system consists of 15 grades, from GS-1, the lowest level, to GS-15, the highest level. There are also 10 steps within each grade.

<table class="usa-table">
  <thead>
    <tr>
      <th>Grade GS-14</th>
      <th>Grade GS-15</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The employee independently plans, develops, and executes important programs with minimal supervision and review.</td>
      <td>The employee independently plans, develops and executes large scale programs that lead to new ways of working and/or innovative approaches.</td>
    </tr>
    <tr>
      <td>Performs assignments  of exceptional breadth and intensity of effort often bringing the employee face-to-face with undefined factors and conditions which must be resolved in order to define the nature and scope of the work.</td>
      <td>Performs work under general administrative direction, with very wide latitude for the exercise of independent judgment, work of outstanding difficulty and responsibility along special technical or administrative lines which has demonstrated leadership and exceptional attainments.</td>
    </tr>
      <tr>
      <td>May serve as a leader and mentor for more junior members on a team.</td>
      <td>Leads cross functional teams and develops guidelines for future use. Interfaces regularly with high-level stakeholders.</td>
    </tr>
    <tr>
      <td>The employee is required to continuously exercise broad latitude to determine the intent of applicable guidance; to develop guidance for the specific area of work; and formulate interpretations that may take the form of policy statements and guidelines.  </td>
      <td>Work consists of broad functions and processes such as: planning and leading efforts to address issues in areas where precedents do not exist; and establishing new concepts and approaches. Assignments are characterized by: exceptional breadth and intensity of effort; and often involving several activities being pursued concurrently or sequentially with the support of others within or outside the agency.</td>
    </tr>
    <tr>
      <td>Supervision and review of work is extremely minimal. Performs work with wide latitude for the exercise of independent judgment, work of exceptional difficulty and responsibility along special technical or administrative lines which has demonstrated leadership and unusual attainments.</td>
      <td>The employee decides what needs to be done by conducting extensive investigation and analysis of largely undefined factors and conditions to determine the nature and scope of problems and to devise solutions. The employee makes continuing efforts to develop new concepts, theories, or programs, or to solve problems that have previously resisted solutions.</td>
    </tr>
      <tr>
      <td></td>
      <td>The supervisor provides administrative and policy direction in terms of broadly defined missions or functions.</td>
    </tr>
  </tbody>
</table>

## {{ page.org }} teams hiring for this role

There are several {{ page.org }} teams hiring for this role. **Candidates should look at the specialized experience for the GS15 and GS14 roles and submit application(s) to the position they feel are most suited for.** Unfortunately, we are only able to reach out to those that are selected for interview.

Teams hiring for engineers:
- [18F](https://18f.gsa.gov/)
- [Login.gov](https://login.gov/)
- [Cloud.gov](https://cloud.gov/)
- [Data.gov](https://www.data.gov/)
- TTS Forms Service
- American Rescue Plan program management office
- Additional TTS teams will be updated and added soon

Positions these teams are hiring for:
- Consulting software engineer
- Software developer or software engineer (frontend and backend)
- Full-stack engineer
- DevOps engineer or Site Reliability Engineer
- Security and compliance engineer
- Data engineer

Once applications are reviewed, hiring teams will identify candidates that they are interested in interviewing. We will then follow up with candidates to discuss their interest in the role(s). Candidates may interview for roles with multiple teams.

## Basic information

**Location:**
{{ page.location }}

**Salary Range:**
The salary range for this position is:
- GS-14, Step 1 - $108,885 to GS-14, Step 10 - $172,500
- GS-15, Step 1 - $128,078 to GS-15, Step 10 - $172,500 

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
This is a term limited appointment with the ability to extend for a total of eight years.


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
We will update the qualifications required for this position soon. 

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)
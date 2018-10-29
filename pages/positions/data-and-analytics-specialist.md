---
title: Data & Analytics Specialist
permalink: join/data-and-analytics-specialist/
redirect_from:
  - join/upcoming-coe-data-and-analytics-specialist/
  - join/coe-data-and-analytics-specialist/
state: upcoming
job_post_type: tts

# INSTRUCTIONS UPCOMING: These fields are required for upcoming

opens: tbd
# closes: MONTH DAY, YEAR, TIME EDT
location: 'Washington, DC'
gs_level: 15
salary_min: '134,789'
salary_max: '164,200'
org: 'Centers of Excellence'
contact_name: 'Amanda Schonfeld'
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

# job_announcement_number: 'ENTER JOB ANNOUNCEMENT NUMBER'
# pd_job_title: 'Innovation Specialist' (ENTER TITLE IF DIFFERENT)
# num_vacancies: 'ENTER NUMBER OF VACANCIES'
# series: '0301' ENTER SERIES IF DIFFERENT
# apply_url: APPLICATION URL
# ohrm_comtact_email: 'ENTER OHRM CONTACT EMAIL'
# ohrm_contact_name: 'ENTER OHRM CONTACT NAME'
# bargaining_unit: 'Non Bargaining Unit'
# promotion_potential: 'ENTER THE GS LEVEL' (13, 14, 15, etc.)
# supervisory_status: 'YES' or 'NO'
---

{% if page.state == 'upcoming' %}
{{ page.org }} will soon be accepting applications for a GS-{{ page.gs_level }} {{ page.title }}.
{% if page.opens == 'tbd' %}
The target date for when this position will be officially open to application has not yet been determined. If you'd like to be notified when this position is open, sign up to our [mailing list](https://goo.gl/forms/QMbyPse8f4rfnZ9z2).
{% else %}
Applications will be open for submission on {{ page.opens | date: '%l:%M%P %Z on %A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more the application process.
{% endif %}

## Basic Information

**Location:**
{{ page.location }}

**Salary Range:**
GS-{{ page.gs_level }} - ${{ page.salary_min }} to ${{ page.salary_max }}

If you are a new federal employee, your starting salary will likely be set at the Step 1 of the grade for which you are selected. Total compensation may include locality pay based on the individual's duty location. For more salary information including locality pay details, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/). 

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands) and applicants must not be GSA
employees or contractors

## Role Summary:

### {{ page.title }} - GS-{{ page.gs_level }}

We are looking for a Data & Analytics Specialist to join the IT Modernization Centers of Excellence (COE) to help develop and improve the capabilities and services of our partner agencies.

The federal government has hundreds of thousands of data sets and managing that data is an extremely challenging task. As Service Delivery Analytics Specialist, you will help agencies liberate and embrace their data, equip them with profound insights drawn from that data, empowering them to more effectively fulfill their mission.

Data & Analytics Specialists should not be theoreticians, but rather practitioners in the craft of data science. You’ll also need to be able to get hands on when necessary but we often help partner agencies capitalize on their existing tools and resources or work in tandem with government contractors. It’s imperative that our Data & Analytics Specialist is dedicated to results and has genuine passion about building a sustainable data infrastructure within government. We aspire to not only help our partners solve their problems efficiently and with the ability to scale, but also help them do it in an agile way.

## Key Objectives

### Key objective #1: You work with our partner agencies to implement or improve their capabilities to use quantitative and qualitative methods to collect, validate, analyze, and display customer feedback and performance data to aid service improvement and decision-making.

- Work on cross-functional teams to learn about the agency’s data needs within their existing systems to establish appropriate performance metrics and setting reasonable expectations for results
- Develop methods to monitor, evaluate, analyze, and report progress toward achieving performance goals and to inform continual improvements to service design and delivery
- Evaluate existing feedback tools against best practices and agency requirements and make recommendations for new data-management tools and infrastructure
- Coordinate the implementation, deployment, troubleshooting and training for data analysis and reporting tools across the agency
- Conduct workshops with agency teams to identify uses of and promote understanding of their data sets

### Key objective #2: You will promote the adoption of modern technology practices through teaching, coaching, and knowledge sharing.

- Practice and enthusiastically share agile methodologies throughout all stages of the project lifecycle
- Deliver educational workshops to accelerate learning and adoption of agile principles and practices
- Inspire honesty and integrity through open communication and liberal knowledge sharing across a multi-disciplinary teams.
- Create compelling case studies on how users are benefiting from the program, providing a special focus on lessons learned.
- Capture specific capabilities (e.g. strategies, roadmaps, playbooks) to document good practices across government.

### Key objective #3: Practice an exceptional level of customer service with all partners, providing a unique, tailored experience.

- Explain product or services to people who have varying levels of technical knowledge — always meet the agency partner where they’re at
- Empathetically guide our agency partners through the bureaucracy of the sometimes long and arduous compliance and security processes
- Skillfully map specific inquiries to product capabilities, identifying the product that best meets the agency partner’s needs.
- Serve as a liaison between the stakeholders and the project teams, delivering feedback to the team, enabling them to make necessary changes to product performance or presentation
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences

{% endif %}

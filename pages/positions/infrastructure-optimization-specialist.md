---
title: Infrastructure Optimization Specialist
permalink: join/infrastructure-optimization-specialist/
redirect_from:
  - join/upcoming-coe-infrastructure-optimization-specialist/
  - join/coe-infrastructure-optimization-specialist/
state: upcoming
job_post_type: tts

# INSTRUCTIONS UPCOMING: These fields are required for upcoming

opens: tbd
# closes: MONTH DAY, YEAR, TIME EDT
location: 'Washington, DC'
gs_level: 15
salary_min: '105,123'
salary_max: '136,659'
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

We are looking for an Infrastructure Optimization Specialist to join the IT Modernization Centers of Excellence (COE) to help develop the capabilities and services of our partner agencies.

In collaboration with agency stakeholders, you will be providing the technical leadership for the design, planning, and delivery of key infrastructure modernization strategies that will drive optimizations and improvements in the security, agility, responsiveness, and capital efficiency of their IT infrastructure and customer delivery services.

You will need a thorough knowledge of infrastructure, networking, cloud, integration, data, custom & packaged applications, and security to ensure that the agency’s infrastructure architecture meets their current and future needs in an efficient, sustainable, agile, and adaptable manner.

## Key Objectives

### Key objective #1: Serving as the innovative technical leader, you will work with our agency partners to develop strategies and execute initiatives to modernize their highly complex and critical systems and infrastructure, empowering them better deliver on their mission.

- Use modern research methods and best practices to fully understand the real needs of the users and the impact driven by the agency’s systems & infrastructure
- Analyze current system architecture and existing products to identify the functionality and capabilities that can be leveraged and the areas requiring refactoring
- Develop solutions with an API first mindset using reusable components and operational strategies to support scalability, availability, performance, monitoring, backup, etc, to improve the security, resiliency, and agility of infrastructure and applications
- Leverage native cloud capabilities such as data storage, performance, and security enhancements, as well as auto-scaling and performance/capacity management to promote technical improvements in the defendability and cost efficiency of the agency infrastructure services
- Work closely with the internal and contract developers, conducting code reviews and providing feedback and guidance when necessary
- Contribute high-quality, well-tested, maintainable infrastructure configurations, including code-based automation using modern software development, open source, and industry best practices

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

## How To Apply

{% if page.state == 'upcoming' %}
{% include upcoming_statement.html %}
{% elsif page.state == 'closed' %}
We're sorry, this job has closed.
{% else %}
{% if page.job_post_type == 'usajobs' %}
Submit a complete online application prior to {{ page.closes | date: '%l:%M%P %Z on %A, %B %e, %Y' }} EDT. Please fill out all applicable fields.

In order to apply for this job you must submit an application via the USAJOBS posting.

<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ page.apply_url }}">Click here to apply</a>
</section>

Need Assistance in applying or have questions regarding this job opportunity, please email {{ page.contact_name }} at {{ page.contact_email }}.

{% elsif page.job_post_type == 'tts' %}
Submit a complete online application prior to {{ page.closes | date: '%l:%M%P %Z on %A, %B %e, %Y' }} EDT. Please fill out all applicable fields.

<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ page.apply_url }}">Click here to apply</a>
</section>

Need Assistance in applying or have questions regarding this job opportunity, please email {{ page.contact_name }} at {{ page.contact_email }}.

### Required Documents

**ALL** required documents must be submitted before the closing date to be considered for the role. Review the following list to determine what you need to submit.

- **Resume**
  - For a brief video on creating a Federal resume, click [here](https://hru.gov/Studio_Recruitment/videos/Writing_Your_Federal_Resume.aspx).
  - If you have volunteered your service through a National Service program (e.g. Peace Corps, Americorps), we encourage you to apply and include this experience on your resume.

- **Completed application**

- **If you are claiming veterans' preference:**
  - Copy of your Certificate of Release or Discharge From Active Duty, DD-214 that shows the dates of your active duty service.  If selected, a DD-214 showing your type of discharge (member 4 copy) will be required prior to appointment.
  - If you are claiming 10-point preference or derived preference (a spouse, widow or widower, or parent of a deceased or disabled veteran), submit both of the following in addition to the DD-214:
    - completed [SF-15](http://www.opm.gov/forms/pdf_fill/SF15.pdf) form; and
    - proof of your entitlement; refer to [SF-15](http://www.opm.gov/forms/pdf_fill/SF15.pdf) for complete list.
    - **If you are claiming veterans' preference**, you **MUST** submit all Veteran’s documentation to {{ page.ohrm_contact_name }} at {{ page.ohrm_contact_email }} by the job posting closing date. Please subject the email “Veteran’s documentation for Job Posting {{ page.job_announcement_number }}”.
- **If you are active duty military:** Certification on a letterhead from your military branch that includes your rank, character of service (must be under honorable conditions) & military service dates including discharge/release date (must be no later than 120 days after the date the certification is submitted).

## Other Information

Bargaining Unit status: {{ page.bargaining_unit }}

Relocation-related expenses are not approved and will be your responsibility.

All the information you provide will be verified by a review of the work experience and/or education as shown on your application forms, by checking references and through other means, such as the interview process. Any exaggeration of your experience, false statements, or attempts to conceal information may be grounds for not hiring you, or for firing you after you begin work.

## Reasonable Accommodation Policy

Federal agencies must provide reasonable accommodation to applicants with disabilities where appropriate. Applicants requiring reasonable accommodation for any part of the application and hiring process should contact the hiring agency directly. Determinations on requests for reasonable accommodation will be made on a case-by-case basis.

To learn more, please consult the following resources:

- [Disability Employment - Reasonable Accommodations (OPM)](https://www.opm.gov/policy-data-oversight/disability-employment/reasonable-accommodations/)
- [How to contact an agency](https://www.usajobs.gov/Help/how-to/application/agency/contact/)

## Equal Employment Opportunity Policy

The United States Government does not discriminate in employment on the basis of race, color, religion, sex (including pregnancy and gender identity), national origin, political affiliation, sexual orientation, marital status, disability, genetic information, age, membership in an employee organization, retaliation, parental status, military service, or other non-merit factor.

To learn more, please consult the following resources:

- [Equal Employment Opportunity (EEO) office at OPM](https://www.opm.gov/about-us/our-people-organization/support-functions/equal-employment-opportunity/)
- [Office of Equal Opportunity](http://www.eeoc.gov/eeoc/internal_eeo/index.cfm)

## Drug Free Workplace Policy

The General Services Administration and the Technology Transformation Services have an obligation to create a safe and drug-free workplace. All GSA employees are covered by the drug-free workplace program, but only certain positions are subject to application and random drug testing. These positions are called Testing Designated Positions and are for positions such as those that require an active Top Secret security clearance or for you to carry a firearm while on duty. Most TTS jobs are not Testing Designated Positions, but all employees may become subject to drug testing in special situations. You can learn more about GSA's Drug Free Workforce policy, including what positions require testing and when non-required positions may be tested, by reading the [official policy on gsa.gov](https://www.gsa.gov/directives-library/gsa-drugfree-workplace-program-97003-oad-extended). 

## What To Expect

After the closing date:

1. **ELIGIBILITY/QUALIFICATIONS:** Your application will be reviewed for all requirements.
2. **REFERRAL TO MANAGEMENT:** If you meet all the requirements, you may be referred to management for review and a possible interview.
3. **SELECTION/TENTATIVE JOB OFFER:** If you are selected, you will receive a tentative offer and start the suitability and/or security background investigation process.
4. **FINAL JOB OFFER:** Once our security office determines you can come on board, you will be given a final offer.

**Thank you for your interest in working for U.S. General Services Administration!**

{% endif %}

{% endif %}

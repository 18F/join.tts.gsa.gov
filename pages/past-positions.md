---
title: Past Positions
permalink: past-positions/

subnav:
  - text: Open positions
    href: "#open-positions"
  - text: Upcoming positions
    href: "#upcoming-positions"
  - text: Application process
    href: "#Application-process"
  - text: About TTS
    href: "#about-technology-transformation-services"
---

This is a list of positions we've hired for in the past. We use this page as a resource for people and teams across government to use when writing position descriptions in their agencies. If you have questions or comments, please reach out to [joinTTS@gsa.gov](mailto:joinTTS@gsa.gov).

Take a look at [our list of open and upcoming positions »]({{ site.baseurl }}/)

{% assign sortedpages = site.pages | sort: 'title' %}

### Closed Positions

{% for pg in sortedpages %}
{% if pg.state == 'closed' %}
{% unless pg.path contains 'template'  %}
* [{{ pg.title }}]({{ site.baseurl }}{{ pg.permalink }}) (Closed)
{% endunless %}
{% endif %}
{% endfor %}

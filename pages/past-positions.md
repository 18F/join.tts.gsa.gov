---
title: Past Positions
---

This is a list of positions we've hired for in the past. We use this page as a resource for people and teams across government to use when writing position descriptions in their agencies. If you have questions or comments, please reach out to [joinTTS@gsa.gov](mailto:joinTTS@gsa.gov).

Take a look at [our list of open and upcoming positions »]({{ site.baseurl }}/)

### Closed Positions

{%- assign list = "" | split: "," -%}
{%- for page in site.pages -%}
{%- assign bits = page["path"] | split: "/" -%}
{%- if bits[0] == "archive" -%}
{%- assign list = list | push: page -%}
{%- endif -%}
{%- endfor -%}
{%- assign list = list | sort: "title" | sort: "org" -%}

{%- for page in list %}
- [{% if page["org"] %}{{ page["org"] }}: {% endif %}{{ page["title"] }}]({{ page["url"] }})
{%- endfor %}

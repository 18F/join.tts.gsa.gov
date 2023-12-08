---
title: Past Positions

sidenav:
  - text: Open and upcoming jobs
    href: /
  - text: How we Hire
    href: hiring-process/
  - text: About TTS
    href: tts-offices/

---

This is a list of positions we've hired for in the past. We use this page as a resource for people and teams across government to use when writing position descriptions in their agencies. If you have questions or comments, please reach out to [joinTTS@gsa.gov](mailto:joinTTS@gsa.gov).

Take a look at [our list of open and upcoming positions »]({% link pages/index.md %})

### Closed Positions

{%- assign list = "" | split: "," -%}
{%- for page in site.pages -%}
{%- assign bits = page["path"] | split: "/" -%}
{%- if bits[0] == "archive" -%}
{%- assign list = list | push: page -%}
{%- endif -%}
{%- endfor -%}
{%- assign list = list | sort: "title" -%}

{%- for page in list %}

- [{{ page["title"] }}]({{ page["url"] }})
  {%- endfor %}

---
---

{%- assign list = "" | split: "," -%}
{%- for page in site.pages -%}
{%- assign bits = page["path"] | split: "/" -%}
{%- if bits[0] == "archive" and bits[1] != "index.md" -%}
{%- assign list = list | push: page -%}
{%- endif -%}
{%- endfor -%}
{%- assign list = list | sort: "title" -%}

{%- for page in list %}
- [{{ page["title"] }}]({{ page["url"] }})
{%- endfor %}

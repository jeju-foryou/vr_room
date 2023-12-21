---
layout: default
title: 메인 페이지
---

# 메인 페이지

다음은 각 동네 페이지로의 링크입니다:

{% raw %}
<ul>
{% for page in site.pages %}
    {% if page.path contains 'site/' %}
    <li><a href="{{ site.baseurl }}/{{ page.path }}">{{ page.name }}</a></li>
    {% endif %}
{% endfor %}
</ul>
{% endraw %}
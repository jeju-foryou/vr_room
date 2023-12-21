---
layout: default
title: 메인 페이지
---

# 메인 페이지

다음은 각 동네 페이지로의 링크입니다:

<ul>
{% for page in site.pages %}
    {% if page.path contains 'svr_room/' %}
    <li><a href="{{ site.baseurl }}/{{ page.path }}">{{ page.name }}</a></li>
    {% endif %}
{% endfor %}
</ul>
---
layout: default
title: 메인 페이지
---

# 메인 페이지

다음은 각 매물 vr 페이지로의 링크입니다:

<ul>
        {% for page in site.pages %}
        {% assign path_segments = page.path | split: '/' %}
        {% if path_segments.size > 1 %}
          {% unless path_segments.first == 'main' or path_segments.first == 'assets' %}
            <li><a href="https://jeju-foryou.github.io/vr_room/{{ path_segments.first }}">{{ path_segments.first }}</a></li>
          {% endunless %}
        {% endif %}
      {% endfor %}
</ul>
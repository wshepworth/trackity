---
title: Design insights tracker
layout: default
page_id: home
---

## Research and design are team sports

Documentation is hard, for a lot of reasons. In fast-paced projects, it can become all too easy to lose track of decisions, or research insights. The alternative is death-by-documentation - where your spend time documenting things across the myriad of tools (JIRA, Confluence, Asana, Sharepoint etc...).

This is a simple, team-friendly, low-code solution to that problem.

<div class="container-filters">

<!-- Filter 1 -->

<div class="filter">
<h4>Journey</h4>
  <select class="drop-down">
    <option value="Test"
      {% if not data.filter_page or data.filter_page == 'all' or data.filter == 'reset' %}selected{% endif %}>All</option>
    <option value="Registratiom"
      {% if data.filter_page == 'registration' and data.filter != 'reset' %}selected{% endif %}>Registration</option>
    <option value="[Sign up]"
      {% if data.filter_page == 'sign up' and data.filter != 'reset' %}selected{% endif %}>Sign up</option>
  </select>
</div>

<!-- Filter 2 -->

<div class="filter">
<h4>Sprint</h4>
  <select class="drop-down">
    <option value="Test"
      {% if not data.filter_page or data.filter_page == 'all' or data.filter == 'reset' %}selected{% endif %}>All</option>
    <option value="Login"
      {% if data.filter_page == 'login' and data.filter != 'reset' %}selected{% endif %}>Sprint 66</option>
    <option value="Account"
      {% if data.filter_page == 'account' and data.filter != 'reset' %}selected{% endif %}>Sprint 65</option>
    <option value="History"
      {% if data.filter_page == 'history' and data.filter != 'reset' %}selected{% endif %}>Sprint 64</option>
  </select>
</div>

<!-- Filter 3 -->

<div class="filter">
<h4>Confidence</h4>
  <select class="drop-down">
    <option value="Test"
      {% if not data.filter_page or data.filter_page == 'all' or data.filter == 'reset' %}selected{% endif %}>All</option>
    <option value="Login"
      {% if data.filter_page == 'login' and data.filter != 'reset' %}selected{% endif %}>High</option>
    <option value="Account"
      {% if data.filter_page == 'account' and data.filter != 'reset' %}selected{% endif %}>Medium</option>
    <option value="History"
      {% if data.filter_page == 'history' and data.filter != 'reset' %}selected{% endif %}>Low</option>
  </select>
</div>

<!-- Filter 4 -->

<div class="filter">
<h4>Priority</h4>
  <select class="drop-down">
    <option value="Test"
      {% if not data.filter_page or data.filter_page == 'all' or data.filter == 'reset' %}selected{% endif %}>All</option>
    <option value="Login"
      {% if data.filter_page == 'login' and data.filter != 'reset' %}selected{% endif %}>High</option>
    <option value="Account"
      {% if data.filter_page == 'account' and data.filter != 'reset' %}selected{% endif %}>Medium</option>
    <option value="History"
      {% if data.filter_page == 'history' and data.filter != 'reset' %}selected{% endif %}>Low</option>
  </select>
</div> 

</div>

### Research insights

The example below gets data from [this G-sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing)

<table>
	<thead>
    <tr>
      <th>Journey</th>
      <th>Sprint</th>
      <th>Confidence</th>
      <th>Priority</th>
      <th>Insight</th>
    </tr>
	</thead>
  {%- for item in sheet.Registration -%}
	<tbody>
    <tr>
      <td>{{ item. Journey }}</td>
      <td>{{ item. Sprint }}</td>
      <td>{{ item. Confidence }}</td>
      <td>{{ item. Priority }}</td>
      <td>{{ item. Insight }}</td>
    </tr>
  {%- endfor -%}
  {%- for item in sheet["Sign up"] -%}
      <tr>
      <td>{{ item. Journey }}</td>
      <td>{{ item. Sprint }}</td>
      <td>{{ item. Confidence }}</td>
      <td>{{ item. Priority }}</td>
      <td>{{ item. Insight }}</td>
    </tr>
  {%- endfor -%}
	</tbody>
</table>
---
title: Design insights
layout: example
page_id: example
---

<!-- Tab links -->
<div class="tab">
  <a class="tablinks" onclick="openTab(event, 'Research')" id="defaultOpen">Research insights</a>
  <a class="tablinks" onclick="openTab(event, 'Assumptions')">Assumptions</a>
  <a class="tablinks" onclick="openTab(event, 'User-needs')">User needs</a>
  <a class="tablinks" onclick="openTab(event, 'Design-decisions')">Design decisions</a>
</div>

<!-- Tab content -->
<div id="Research" class="tabcontent">
  <h2>Research insights</h2>

  The example below gets data from [this G-sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing).

<!-- <div class="container-filters">

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

</div> -->

<!-- Content here -->

<table>
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

<!-- Content finish -->

</div>

<div id="Assumptions" class="tabcontent">
  <h2>Assumptions</h2>

The example below gets data from [this G-sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing).

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
</div>

<div id="User-needs" class="tabcontent">
  <h2>User needs</h2>

  The example below gets data from [this G-sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing).

  <table>
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


</div>

<div id="Design-decisions" class="tabcontent">
  <h2>Design decisions</h2>

  The example below gets data from [this G-sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing).

<table>
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


</div>
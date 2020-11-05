---
layout: mainPage
permalink: index.html
---
<head>
<link rel="stylesheet" type="text/css" href="Asset/css/Unified_Style.css">
</head>

# ⚠ Important Notification

We are rebuilding this site using `React-App` and `Ant Design` components. You can also access [Mark's React App](https://markchenyutian.github.io/ReactApp/) to see the posts and get a better experience.

## About This Site

This site is maintained by Mark Chen (*markyutianchen@gmail.com*).
> Due to some reasons, accessing such a site built on GitHub may need VPN.

----------

## My Articles
### Neural Network and Machine Learning - *2019 Computer Science 2*

<center>
<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/CS2Banner.png" height=120>
</center>

*点击卡片阅读全文*

<div>
{% for post in site.tags["Neural_Network"] %}
    <a href="{{site.baseurl}}{{ post.url }}">
        <div class="card">
            <div class="title_container">
                <h4>{{post.title}}</h4>
            </div>
            <div class="container">
                {{post.excerpt}}
            </div>
        </div>
    </a>
    <div style="width: 100%; height: 0.6em"></div>
{% endfor %}
</div>

<div>
{% for post in site.tags["Machine_Learning"] %}
    <a href="{{site.baseurl}}{{ post.url }}">
        <div class="card">
            <div class="title_container">
                <h4>{{post.title}}</h4>
            </div>
            <div class="container">
                {{post.excerpt}}
            </div>
        </div>
    </a>
    <div style="width: 100%; height: 0.6em"></div>
{% endfor %}
</div>

### Blockchain and Cryptocurrency - *2020 Computer Science 2*

<div>
{% for post in site.tags["Cryptocurrency"] %}
    <a href="{{site.baseurl}}{{ post.url }}">
        <div class="card">
            <div class="title_container">
                <h4>{{post.title}}</h4>
            </div>
            <div class="container">
                {{post.excerpt}}
            </div>
        </div>
    </a>
    <div style="width: 100%; height: 0.6em"></div>
{% endfor %}
</div>

### Algorithm Notes

<div>
{% for post in site.tags["Algorithm"] %}
    <a href="{{site.baseurl}}{{ post.url }}">
        <div class="card">
            <div class="title_container">
                <h4>{{post.title}}</h4>
            </div>
            <div class="container">
                {{post.excerpt}}
            </div>
        </div>
    </a>
    <div style="width: 100%; height: 0.6em"></div>
{% endfor %}
</div>

<div style="width: 100%; height: 0.6em"></div>
<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/10/04/USACO-Analysis-Page.html');">
  <div class="title_container">
    <h4>USACO 金组分析专栏  |  USACO Gold Division Problem Analysis</h4>
  </div>
</div>

<br>

### Others
<div>
{% for post in site.tags["Others"] %}
    <a href="{{site.baseurl}}{{ post.url }}">
        <div class="card">
            <div class="title_container">
                <h4>{{post.title}}</h4>
            </div>
            <div class="container">
                {{post.excerpt}}
            </div>
        </div>
    </a>
    <div style="width: 100%; height: 0.6em"></div>
{% endfor %}
</div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/site/AP_Notes.html');">
    <div class="title_container">
        <h4> AP Notes Sharing Platform </h4>
    </div>
    <div class="container">
        Currently, the notes of these subjects are available: Biology, Physics 2, Physics 1, Physics CEM, Physics CM, Calculus BC, Statistics, Microeconomics, Chemistry (AP & SAT II), and Computer Science A
    </div>
</div>

<div style="width: 100%; height: 0.6em"></div>

----------

## Computer Science 3 Homework & Notes

<center><img src="https://markchenyutian.github.io/Markchen_Blog/Asset/JS.png" height=100></center>
<div style="width: 100%; height: 1em"></div>

<!--The 'content_block' calss is the area for each week of Javascript-->
<div class="content_block">
<h4>Week 1 - Variable and Basic functions</h4>
<div style="width: 100%; height: 1em"></div>
<button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/10/Homework01.html");'>
    Homework for Week 1
</button>
&emsp;
<button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/10/Javascript-notes-week1.html");'>
    JavaScript Week 1 Note
</button>
</div>

<div style="width: 100%; height: 1em"></div>

<div class="content_block">
  <h4>Week 2 - If, else, array, and function</h4>
  <div style="width: 100%; height: 0.5em"></div>
  <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/18/Homework02.html");'>
    Homework for Week 2
  </button>
  &emsp;
  <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/16/Javascript-notes-week2.html");'>
    JavaScript Week 2 Note
  </button>
</div>

<div style="width: 100%; height: 1em"></div>

<div class="content_block">
<h4>Week 3 - Loop in Javascript</h4>
  <div style="width: 100%; height: 0.5em"></div>
  <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/25/Homework03.html");'>
    Homework for Week 3
  </button>
  &emsp;
  <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/22/Javascript-notes-week3.html");'>
    Javascript Week 3 Note
  </button>
</div>

<div style="width: 100%; height: 1em"></div>

<div class="content_block">
<h4>Week 5 - More Functions in Javascript</h4>
  <div style="width: 100%; height: 0.5em"></div>
    <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/10/16/Homework05.html");'>
    Homework for Week 5
  </button>
  &emsp;
  <button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/10/09/Javascript-notes-week5.html");'>
    Javascript Week 5 Note
  </button>
</div>
<br>

----------

[^1]: So some hyperlink may not function properly or the website will be quite ugly
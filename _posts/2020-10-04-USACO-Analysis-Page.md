---
layout: page
---
<head>
<link rel="stylesheet" type="text/css" href="https://markchenyutian.github.io/Markchen_Blog/Asset/css/Unified_Style.css">
</head>

# USACO Gold Division Analysis
<center><img src="https://markchenyutian.github.io/Markchen_Blog/Asset/USACO_Banner.png"></center>

<a herf="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/10/04/USACO-2016-Jan-Gold-Analysis.html">
<div class="card">
  <div class="title_container">
    <h3>2016 January Contest Gold Division Analysis</h3>
  </div>
</div>
</a>

<br>
test Liquid

<div>
  {%for usaco_post in site.tags.USACO%}
    <a href={{ site.baseurl }}{{ usaco_post.url }}>
    <div class="card">
      <div class="title_container">
        <h3>{{usaco_post.title}}</h3>
      </div>
    </div>
    </a>
  {%end for%}
</div>

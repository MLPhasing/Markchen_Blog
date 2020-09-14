---
layout: post
permalink: index.html
---
<style>
details{
  padding: 4px;
  background-color: #F5F5F5;
  border: none;
  box-shadow: 2px 2px 4px #bbbbbb;
  cursor: pointer;
  outline: none;
}

details[focus]{outline: none;}

details[open]{
  padding: none;
  background-color: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-shadow: none;
  border-radius: 10px;
  cursor: default;
}
button{
    width=40px;
    height=50px !important;
    background-color: #C9F1E1;
    border:none;
    box-shadow: 1px 1px 2px #bbbbbb;
}
button[focus]{outline:none;}
code{
    background-color: #F5F5F5;
    border: none;
    box-shadow: 1px 1px 1px #F2F2F2;
    background-radius:5px;
    font: "jetbrains mono";
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius:5px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>

## About This Site

This site is maintained by Mark Chen (*markyutianchen@gmail.com*). Currently the site is in the Testing phase[^1] and here are the features in current plan:
* Resource Sharing - e-books about Computer Science and Mathematics.
* Article Sharing - Articles about Machine Learning & Neural Network, Bitcoin & Block Chain
* Code Sharing - Implementation of algorithms in Python3 etc.

> Due to some reasons, accessing such a site built on GitHub may need VPN.

----------

## My Articles
### Neural Network and Machine Learning - *2019 Computer Science 2*

<center>
<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/PyTorch.png" height=80>
</center>

* 神经网络如何工作? [How Does Neural Network work](https://markchenyutian.github.io/Markchen_Blog/2020/07/31/How-do-Neural-Network-Work.html)
* 什么是贝叶斯网络? [What is Bayes Net](https://markchenyutian.github.io/Markchen_Blog/2020/04/30/What-is-Bayes-Network.html)
* 长短期记忆递归神经网络(LSTM) [什么是LSTM，为什么需要LSTM](https://markchenyutian.github.io/Markchen_Blog/2020/04/03/What-is-LSTM.html)
* 约束满足问题的弧一致性算法 [Arc-consistency in Constraint Satisfaction Problem (CSP)](https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu.html)


<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/07/31/How-do-Neural-Network-Work.html');">
  <div class="container">
    <h4>神经网络如何工作   |  How does Neural Network Work</h4>
    <p>神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？</p>
  </div>
</div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/04/30/What-is-Bayes-Network.html');">
  <div class="container">
    <h4>什么是贝叶斯网络   |  What is Bayes Network</h4>
    <p>贝叶斯网络是人们在探索机器学习时的一个重要里程碑，通过贝叶斯网络，机器学习摆脱了以往基于形式逻辑推理和庞大知识库的限制，开始了“统计学习”的新纪元。那么什么是贝叶斯网络呢？贝叶斯网络和贝叶斯统计学派又有什么关系呢？</p>
  </div>
</div>



<br>
### Block Chain and Cryptocurrency - *2020 Computer Science 2*

*[empty yet]*

### Algorithm Notes

*[empty yet]*

----------

## Computer Science 3 Homework & Notes

<center><img src="https://markchenyutian.github.io/Markchen_Blog/Asset/JS.png" height=100></center>
<br>
<details>
<summary>Week 1 - Variable and Basic functions</summary>

<br>

<body>
<button onclick='window.open("ComputerScience3_Homework/Homework01.html");'>
    Homework for Week 1
</button>
</body>

<br>
<br>

<p>
There are 4 primitive types in JavaScript - Number, String, Boolean and Undefined.
There's only 1 reference type - Object.
In JS, there does NOT have the concept of <code>class</code> as in Java or Python. All the things enclosed by <code>{}</code> are objects, including function, etc.

There are three functions that can interact with useds in the browser - <code>alert</code>, <code>prompt</code> and <code>confirm</code>
<br/>
<code>alert</code> will give out a small pop-out window on the top of browser to notify user with some information
<br/>
<code>prompt</code> will return a String that is typed by the User. If user press "cancel", it will simplly return <code>null</code>. A default String can be setup for the pop-up window.
<br/>
<code>abcde</code> `confirm` will return a Boolean, if user press "ok", return true, otherwise, return "false".
</p>

</details>

<br>


&emsp;

<div id="home">
  <h2>All Posts</h2>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

----------

[^1]: So some hyperlink may not function properly or the website will be quite ugly
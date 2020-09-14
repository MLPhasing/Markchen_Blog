---
layout: default
permalink: index.html
title: Mark Chen's Blog
---
# Home Page

<style>
details{
  padding: 4px;
  background-color: #F5F5F5;
  border: none;
  box-shadow: 2px 2px 4px #bbbbbb;
  cursor: pointer;
}

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
    background-color: #F5F5F5;
    border:none;
    box-shadow: 1px 1px 2px #bbbbbb;
}
code{
    background-color: #F5F5F5;
    border: none;
    box-shadow: 1px 1px 1px #F2F2F2;
    background-radius:5px;
    font: "jetbrains mono";
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

* 神经网络如何工作? [How Does Neural Network work](https://markchenyutian.github.io/Markchen_Blog/Articles/神经网络为什么work.html)
* 什么是贝叶斯网络? [What is Bayes Net](https://markchenyutian.github.io/Markchen_Blog/Articles/什么是贝叶斯网络.html)
* 长短期记忆递归神经网络(LSTM) [什么是LSTM，为什么需要LSTM](https://markchenyutian.github.io/Markchen_Blog/Articles/长短期记忆递归神经网络LSTM.html)
* 约束满足问题的弧一致性算法 [Arc-consistency in Constraint Satisfaction Problem (CSP)](https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu.html)

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

----------

[^1]: So some hyperlink may not function properly or the website will be quite ugly
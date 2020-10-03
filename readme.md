---
layout: post
permalink: index.html
---
<head>
<link rel="stylesheet" type="text/css" href="Asset/css/Unified_Style.css">
</head>

{% include toc.html html=content %}

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
<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/CS2Banner.png" height=120>
</center>

*点击卡片阅读全文*

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/07/31/How-do-Neural-Network-Work.html');">
  <div class="title_container">
    <h4>神经网络如何工作   |  How does Neural Network Work</h4>
  </div>
  <div class="container">  
    <!--<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/2.png" align="left" height=100>-->
    <p>神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？</p>
  </div>
</div>
<div style="width: 100%; height: 0.6em"></div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/04/30/What-is-Bayes-Network.html');">
  <div class="title_container">
    <h4>什么是贝叶斯网络   |  What is Bayes Network</h4>
  </div>
  <div class="container">
    <!--<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/Bayes3.png" align="left" height=100>-->
    <p>贝叶斯网络是人们在探索机器学习时的一个重要里程碑，通过贝叶斯网络，机器学习摆脱了以往基于形式逻辑推理和庞大知识库的限制，开始了“统计学习”的新纪元。那么什么是贝叶斯网络呢？贝叶斯网络和贝叶斯统计学派又有什么关系呢？</p>
  </div>
</div>
<div style="width: 100%; height: 0.6em"></div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/04/03/What-is-LSTM.html');">
  <div class="title_container">
    <h4>长短期记忆递归网络   |  Long-Short Term Memory (LSTM) Network</h4>
  </div>
  <div class="container">
    <!--<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/image-20200402233826864.png" align="left" height=100>-->
    <p>一般的神经网络只能处理单个信息，可是有的时候神经网络的输入是一个时间序列，在这种情况下普通的前馈神经网络就不能利用“上下文”中隐含的信息来更好的处理当前输入。为了解决这个问题，人们提出了递归神经网络(Recurrent Neural Network, RNN)。可是递归神经网络也有问题：由于同样的权重在网络中一直被累乘，在反向传播的时候极容易出现梯度消失与梯度爆炸的问题。同时，由于RNN在状态间传递的信息过少，RNN在上下文距离较远的时候会很快的遗忘前文信息。为了解决这些问题，人们提出了LSTM这个新的网络模型，它可以很好的处理以上这些问题。</p>
  </div>
</div>
<div style="width: 100%; height: 0.6em"></div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu.html');">
  <div class="title_container">
    <h4>约束满足问题中的弧一致性算法   |  Arc-consistency in Constraint Satisfaction Problem (CSP)</h4>
  </div>
  <div class="container">
    <!--<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/CSP_1.png" align="left" height=100>-->
    <p>约束满足问题(Constraint Satisfaction Problem, CSP)是一类在工程上非常常见的问题，问题由值域，变量和约束构成。求解约束满足问题指的是找到一组变量的赋值，使得网络中所有约束都被满足。在求解约束满足问题的研究中，弧一致性算法是重中之重，因为问题中的一切多元约束都可以被转化为若干个二元约束。这篇文章介绍了多种弧一致性算法，包括各种版本的时间复杂度，空间复杂度和特点</p>
  </div>
</div>
<div style="width: 100%; height: 0.6em"></div>

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/Articles/U-Net-Convolutional-Network-知乎_files.html');">
  <div class="title_container">
    <h4>医学图像分割模型 U-net   |  Medical Image Segmentation Model U-net</h4>
  </div>
  <div class="container">
    <!--<img src="https://markchenyutian.github.io/Markchen_Blog/Asset/CSP_1.png" align="left" height=100>-->
    <p>U-net是一种前馈神经网络模型，与传统卷积神经网络不同的是，Unet通过直接拼接相同分辨率的图像在网络中创造“短路”，从而使得梯度可以更好的在网络中传播。与此同时，通过将下卷积前的图像分割结果拼接到上卷积过程中的分割结果上，下卷积结果中的高分辨率细节也可以被传递到上卷积过程中，从而提高模型分割准确率。</p>
  </div>
</div>

<br>

### Blockchain and Cryptocurrency - *2020 Computer Science 2*

*[empty yet]*

### Algorithm Notes

<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2019/09/01/Time-Complexity.html');">
  <div class="title_container">
  <h4>算法的时间复杂度  |  Time Complexity and Asymptotic Notation</h4>
  </div>
  <div class="container">
    <p>时间复杂度是我们衡量算法的重要指标之一，一般我们使用大O记号来表示算法的时间复杂度。那么时间复杂度究竟是什么意思呢？我们为什么要用这个指标分析算法呢？</p>
  </div>
</div>

<div style="width: 100%; height: 0.6em"></div>
<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2019/09/02/Divide-and-Conquer.html');">
  <div class="title_container">
    <h4>分治算法  |  Divide and Conquer</h4>
  </div>
  <div class="container">
    <p>
      分治算法可以解决这样的问题：问题可以被分为多个（通常是2个）子问题，通过一种简便方式合并每个子问题的答案就可以得到总问题的答案。分治算法分为三个步骤：分割，解决，合并。这里提供了三个非常经典的分治算法例子：最大子序列问题，矩阵快速乘法和归并排序。
    </p>
  </div>
</div>

<br>

### Others
<div class="card" onclick="window.open('https://markchenyutian.github.io/Markchen_Blog/2020/09/15/How-to-build-your-blog.html');">
  <div class="title_container">
    <h4>如何通过Github Pages建立自己的blog   |  How to build up your Blog using GitHub Pages?</h4>
  </div>
  <div class="container">
    <p>GitHub Pages 可以用于建立自己的个人博客，通过Github Pages 服务，建立个人博客不再需要单独购买域名与服务器，GitHub 会提供域名。通过 jekyll， Pages会对markdown文件进行渲染，从而大大提升写blog文章的简易度</p>
  </div>
</div>
<br>

----------

## Computer Science 3 Homework & Notes

<center><img src="https://markchenyutian.github.io/Markchen_Blog/Asset/JS.png" height=100></center>
<div style="width: 100%; height: 1em"></div>

<!--The 'content_block' calss is the area for each week of Javascript-->
<div class="content_block">
<h4>Week 1 - Variable and Basic functions</h4>
<div style="width: 100%; height: 1em"></div>
<body>
<button onclick='window.open("https://markchenyutian.github.io/Markchen_Blog/2020/09/10/Homework01.html");'>
    Homework for Week 1
</button>
</body>
<div style="width: 100%; height: 1em"></div>
<p>
There are 6 primitive types in JavaScript - <code>Number, String, Boolean, Undefined, Symbol and bigint</code>.
There's only 1 reference type - Object.
All the things enclosed by <code>{}</code> are objects, including function, etc.
There are three functions that can interact with users in browser - <code>alert</code>, <code>prompt</code> and <code>confirm</code>
<div style="width: 100%; height: 0.5em"></div>
<code>alert</code> will give out a small pop-out window on the top of browser to notify user with some information
<div style="width: 100%; height: 0.5em"></div>
<code>prompt</code> will return a String that is typed by the User. If user press "cancel", it will simplly return <code>null</code>. A default String can be setup for the pop-up window.
<div style="width: 100%; height: 0.5em"></div>
<code>confirm</code> will return a Boolean, if user press "ok", return true, otherwise, return "false".
</p>
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

&emsp;

<div id="home">
  <h2>All Posts</h2>
    {% for post in site.posts %}
      <div class="last_card">
      <div class="last_container">
      <span>{{ post.date | date_to_string }}</span> > <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}
      </a>
      </div>
      </div>
      <div style="width: 100%; height: 0.4em"></div>
    {% endfor %}
</div>

----------

[^1]: So some hyperlink may not function properly or the website will be quite ugly
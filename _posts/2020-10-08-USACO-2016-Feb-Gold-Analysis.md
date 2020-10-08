---
layout: post
tags: USACO
---

<head>
    <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            }
        });
    </script>
</head>

# USACO Feb Gold Analysis

## Problem 1 Circular Barn

### Question Summary

The farmer has a circular barn with room numbered from 1 to $n, 3\leq n\leq 1\times 10^5$ . Each room is connected to the rooms that is adjacent to it, and there has one door in each room opened to outside space. Farmer wants each single cow to stay in one single room. Currently, the cows are staying outside the barn randomly, which means that some door may have multiple cows outside it, or have no cows outside it. The energy cost for each cow is $\text{dist}^2$. The question ask for the minimum energy cost to make each cow stay in each room singly.

### Proposed Solution

Observing the operation, we can notice this truth: **If cow A's destination is after the starting point of cow B, the most energy-saving solution will need to exchange the destination of cow A and B.**

Based on this solution, we can maintain a `queue` to store the starting points of cows. When we meet one empty room, we pop out a cow from the queue and add up the distance square of that cow's moving distance.

By repeating this process all around the circular barn, we can get the minimum energy cost.

When we can always drop down one cow per empty room, the result will be optimized. (Or, one cow will have to move for more than 1 round aside the barn)

### Time Complexity Analysis

The cost of maintaining a queue, using linked list, is $O(1)$ for pop and push operation. Since there will have $n$ cows, the total time complexity will be $O(n)$ for a single starting point.

There are totally $n$ possible starting points, so the total complexity will be $O(n^2)$. This will lead to TLE for the result since there will have approx.  $1\times 10^{10}$ computational steps at most.
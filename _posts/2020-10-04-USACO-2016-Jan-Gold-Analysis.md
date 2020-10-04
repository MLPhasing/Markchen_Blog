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


# USACO 2016 Jan Gold Analysis

## Problem 1. Angry Cows

### Question Summary

[Link to Question](http://usaco.org/index.php?page=viewproblem2&cpid=597
)

The $N$ hey are on a line, with position $x_1, x_2, \cdots, x_N$. If the cow is shoot to position $x$ with force $R$, then all the cows in range $x \pm R$ will explode. The hey exploded will have a range of $x' \pm (R - 1)$, the second round of hey exploded will have a range of $x'' \pm (R-2)$, and so on.

The question requires the **minimum** power $R$ with one-decimal accuracy that will let all hey on the line explode.
$$
2 \leq N \leq 50,000 \quad \quad \quad \forall n, 0 \leq x_n \leq 1,000,000
$$

### Proposed Solution 

**Binary Search**

There exists an $r'$ such that for all $R>r'$  , all the hey on the line will explode, so it is possible to use binary search in this question.

Storing all the positions $x_1$ to $x_n$ in a list, we can construct two pointers that represents the "frontier" of explosion.

```python
positions = [x1, x2, ..., xn]
p1, p2 = None, None
```

For each explosion, we can use a time complexity of $O(1)$ to update the pointer's position.

```python
def updatePosition(p1, p2, R):
    if positions[p1-1] - positions[p1] <= R:
        p1 -= 1
    if positions[p2 + 1] - positions[p2] <= R:
        p2 += 1
    return p1, p2, R - 1
```

Therefore, it will take time of $O(n)$ for us to simulate one case.

*One optimization is to stop the simulation immediately and return `false` if the chain reaction stop*

If we try all the possible starting point, the total time complexity will be $O(n^2\log{n})$ and it will lead to TLE for Python.

Noticing for all possible starting points, given a fixed force $R$, if starting at $x_i$ can lead a chain reaction that explode all, we note as `true`, otherwise, `false`, the resulting simulation result should look like this:

```
Propagate_Leftward: [True, True, ..., True, True, True, False, ..., False]
Propagate_Rightward: [False, False, ..., False, True, True, ..., True]
Can_Explode_All = Propagate_Left and Propagate_Right
```

We can use a binary search to find the starting point as well.

```python
def findStartLeft(l, r, R):
    # return True if current R can lead to a chain reaction
    m = (l + r)/2
    if l <= r:
        if explodePropagateLeft(l): return l
        else: return -1
    if explodePropgateLeft(m): return findStartLeft(m, r, R)
    else: return findStartLeft(l, m-1, R)

def findStartRight(l, r, R):
    m = (l + r)/2
    if l <= r:
        if explodePropagateRight(l): return l
        else: return -1
    if explodePropgateRight(m): return findStartRight(l, m, R)
    else: return findStartRight(m+1, r, R)

def isValid(l, r, R):
    return findStartLeft(l, r, R) <= findStartRight(l, r, R)
```

By using nested binary search, the time complexity can be reduced to $O(n\log{n}\log{n})$

### Time Complexity Analysis

With time complexity of $O(n \log{n}\log{n})$ and $n < 50,000$, the approximate steps it need is $50,000 \times 16\times 16 = 1.3\times 10^7$ (Consider that we are performing two binary search to determine the existence of starting point, the actual computation step should multiply with factor of $2$, which is approx. $2.6\times 10^7$), which is an acceptable computational time complexity for Python 3.
---
title: Why the “key” prop in React is important
date: '2019-01-10T22:12:03.284Z'
description: Article about the key property in React
---

### How you can help React perform even better with the “key” property!

When working with peers and students alike, I’ve realized that one of the lesser understood concepts of
React is what the “key” property in iteratively created elements is doing for you.

Most of the time, it will be included eventually because no one likes warnings in the console, but this
article aims to give a better understanding to why it is necessary.

### A look at how React brings our applications to life:

Whenever we call the render() method, React goes ahead and creates a tree of React element. If it’s the first time, directly inserts it into the root div, that we specified in our HTML file.

So far so good.
The real work comes in when we re-render elements of this tree due to a change in state / props a new tree gets created and the two trees are compared in order to identify which elements in the UI have to change.

Reacts goal here is, to figure out how to do that as efficient as possible as to not waste time or resources.

The usual state-of-the-art algorithms for this kind of comparison come with a complexity of roughly O(n³) which is — in terms of performance — not very usable.

### How Reacts Diffing algorithm is faster:

![React.js Logo](./1_y6C4nSvy2Woe0m7bWEn4BA.jpg)

But this is where the React Diffing Algorithm is different, but also needs your help.

When comparing the children React will start altering the UI once it encounters the first difference.

In this example, taken off the React documentation website:

```html5
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

A normal algorithm would go ahead and update the whole list in the UI.
However, with the help of the “key”-property React is able to identify unchanged elements within the list and only add the third \<li> item.

```jsx

<ul>
  <li key="Duke" >Duke</li>
  <li key="Villanova" >Villanova</li>
</ul>

<ul>
  <li key="Connecticut" >Connecticut</li>
  <li key="Duke" >Duke</li>
  <li key="Villanova" >Villanova</li>
</ul>
```

There is also another assumption that helps speed up React, which is that different elements will automatically cause different sub trees, but that is for a different article!

### Resources:

One of the best resources in my eyes when it comes to React is the official Documentation, that has a very nice section about the Reconciliation process as a whole and the Diffing Algorithm in particular: https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm

<br><br>

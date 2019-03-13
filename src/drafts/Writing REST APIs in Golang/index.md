---
title: Lets write a simple REST API in Golang
date: '2019-03-12T08:12:03.284Z'
description: Brief look into how I learn a new language 
---

Last week I was tasked with building a simple service that handles some data for the product @BuzzBird is developing.
It is a fairly simple REST API, but since I haven't worked with Go before, I think it's a good idea to share what I learned with you!

## Disclaimer

For the sake of simplicity, I will assume that you at least have gone through the `Tour of Go` you can find [here](https://tour.golang.org/welcome/1).
It's an excellent tutorial and will give you a solid foundation to go off of.

As I pointed out in my previous article, I'm pretty new to Go. There might be things you see in this article that aren't 100% best practice or that you'd do differently. If you feel strongly about them, please let me know, I'm always eager to learn new things!

## Minimalistic Setup

As a starting point to any http server, I develop a local version that I can test.
It speeds up development, makes bug hunting a lot easier and after that is running I have an easy time building on top of it, testing new features while adding them.

#### File Structure

Since there are a lot of different opinions on this topic, I could probably write a whole blog article on this topic. What I want to give you here, is a structure you can get started with and that should work fine. If you are interested in this topic, this is a good starting point: [Talk by Kat Zien](https://www.youtube.com/watch?v=oL6JBUk6tj0).

For the root, we should have 3 different sub-directories: `cmd` which will contain our main files that are used to execute our webserver, `internal` which houses handlers and anything data related as well as `pkg` which we will use to define those types and functions of our packages that we will expose to other packages.

#### Setting Up The Server


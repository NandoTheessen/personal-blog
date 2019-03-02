---
title: Week 4 in Labs9
date: '2019-02-01T19:17:03.284Z'
description: Article about week 4 of Lambda Labs
---

# Crunch Timeeee!

If week 3 was the hardest, number four was by far the busiest.
Our goals were not only reaching functionality but also have a fully flashed out UI and user experience!

At the beginning of the week we were tasked with making a plan for the rest of the week and to set priorities
where to invest our resources.
Initially we brushed over this doing a very rough plan and giving very broad tasks to everyone.
On Tuesday we realized we need to better keep track of what to do and did a full walk through of the app and made detailed
tasks and assigned those.
This really helped us ramp up productivity throughout the week.

## Time sinks:

Given the nature of this week it is very hard to pin-point the #1 time sink as I was bouncing around a lot of issues, styling components
helping out other team-members with implementation details.
If I had to pick something it was likely adding things that improve user experience.
While they are not the most complicated things (for example a loading indicator, confirmations for payments or meaningful error messages with next steps in the frontend)

#### Whiteboard training (MinHeap):

![Whiteboard Training](https://youtu.be/Hq9xFXKrhEg)

#### Contributions:

![Contribution Graph of the cleaner-pos team](./Github-Contributions.jpg)

#### Pull Requests

- Ticket 1:

  - **Trello:** https://trello.com/c/LltjtIln
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/125

- Ticket2:

  - **Trello:** https://trello.com/c/KYb3skzN
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/109

- Ticket3:

  - **Trello:** https://trello.com/c/KYb3skzN
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/119

- Ticket4:

  - **Trello:** https://trello.com/c/KYb3skzN
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/110

- Ticket5:
  - **Trello:** https://trello.com/c/KYb3skzN
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/140

#### Detailed Analysis of the user experience additions

I've learned a lot about UX this week, though I did not necessarily read much about it a lot of it just
was apparent in the context of walking through our application and thinking what I'd like to see as a
user and what I'm used to from other applications.

This helped me a lot in finding and fleshing out pain points that we were still having.
In my effort to improve on what we've already had I tried to maximize my impact and optimize for the
little time we had left.
I think the most important change I introduced with the loading indicator that in combination with the previously
implemented useFetch hook supplies us with a very performant css animation whenever an axios call is running
and the user has to wait for data to be displayed.

---
title: Week 4 in Labs9
date: '2019-02-01T19:17:03.284Z'
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

## Time sink #1: The Checkout Page

In the checkout page a lot of our features and APIs come together and start forming core
functionality of our app.
It displays an invoice, let's the customer use credit cards of their guests to make payments
through stripe and let's them manipulate stay data.
In order for this to work, I had to implement the core state logic of the app, add endpoints
in order to create the stripe connect charges and implement stripe OAuth for customers to connect their accounts

#### Whiteboard training (MinHeap):

![Whiteboard Training](https://youtu.be/Hq9xFXKrhEg)

#### Contributions:

![Contribution Graph of the cleaner-pos team](./Github-Contributions.jpg)

#### Frontend

- Ticket 1:

  - **Trello:** https://trello.com/c/RVq0jhwX
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/78

- Ticket2:

  - **Trello:** https://trello.com/c/rGzIDO3e
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/81

- Ticket3:
  - **Trello:** https://trello.com/c/TbmyH3TK
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/91

#### Backend

- Ticket1:

  - **Trello:** https://trello.com/c/Y9m4vbdv
  - **GitHub:** https://github.com/Lambda-School-Labs/labs9-cleaner-pos/pull/88

#### Detailed Analysis of the Checkout Page

What makes this a challenging component, is the fact that it combines a lot of the state logic and APIs.
It pings multiple endpoints on the back end that had to be adjusted in order to take in the stay ID,
check if the user is already connected to stripe and gives the user the option to process a payment on the
guests behalf using their credit card.

It uses the stays endpoint to grab information for the invoice and uses the stripe connect API to create a payment
token as well as charge the payment source.
In order for this to work the stripe account of the user has to be connected first, which we solved by implementing
an OAuth component with stripe.

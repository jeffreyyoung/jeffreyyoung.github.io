---
title: Adobe Garage Week Hackathon Finalist
image: /static/images/collaboration-demo.gif
imageDescription: Demo of Analysis Workspace with Collaboration
category: projects
order: 3
description: What I built to be a finalist of a Adobe Analytics Hackathon
---

Last December Adobe had a week long hackathon where any engineer could build anything they wanted as long as whatever they built related to Adobe in some way.

![Demo of Collaborative Workspace](/static/images/collaboration-demo.gif)

I spend most of my time working on Analysis Workspace. AW is product that users can use to create dashboards to view web traffic analytics.  One problem with Analysis Workspace is that only one user can edit a dashboard at a time.  If multiple users, logged in on different computers, edit the same dashboard, each user will be overriding the other users changes.

To address this problem, I decided I wanted to make Analysis Workspace like Google Docs, where when one user edits a dashboard, changes are pushed to all other users viewing the same dashboard. I posted the idea to the garageweek idea list and two coworkers decided to work with me.  At the end of garage week we were selected as 1 of 8 finalists, and additionally months later we got to demo our project to the CEO of adobe.

![Demoing the Project to the CEO](/static/images/instagram.jpg)

### Technology Used
We create a node server with socket.io to send messages back and forth between users.

Since Analysis Workspace already records project changes for undo/redo functionality, we leveraged already written functionality to broadcast and replay changes. 
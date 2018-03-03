---
title: Put A Mustache On Your Face .com
image: /static/images/mustache.png
imageDescription: Image of A Person With A mustache On Their Face
category: projects
order: 4
description: A website that you can use to put a mustache on your face.
---

After starting and not finishing too many overly ambitious projects.  I decided to build a simple web app where a user could login with facebook, select a photo, and then view that photo with a mustache on it.

![Demo of Put A Mustache On Your Face .com](/static/images/mustache-demo.gif)

### Technology Used

To build this app I created a front end server to host the user interface, and a backend API server to supply the user interface with data.

I built the front end server with node.js, React JS, Next.js, and Semantic UI.  By using Next.js I was able to get up and running with a server side rendered app quickly.

I wrote the backend API in Python.  I used flask and graphene to create a graphql server, and I used <https://github.com/ageitgey/face_recognition> for the face recognition.  I used Dynamodb to store user data, and Amazon s3 to store images.

To make deployments simple, I wrapped both of the servers in docker containers and deployed those containers to Elastic Beanstalk on AWS.

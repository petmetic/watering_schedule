
## What

An app that helps you keep a schedule for watering plants.

- App Name : Watering Schedule
- Customer : Studio Teratope
- Development Team : Meta Petrič
- Design Team : TBD
- Web URL : TBD

## Why

The client expressed a need for an easier, online tracker of watering plant life.

The app will help the client maintain schedule of:

- name of plant
- photo of plant
- location of plant
- instructions for watering
- date of watering

## Who’s it for?

The app will be custom-built for a new media artist that needs to keep track of her plants.

## Problem Statements

I want to have an easy way of writing instruction for my assistant to help water the plants. It has to be easy to maintain and easy to use for the person adding information and the person using it. I want it to be a private app.

## Goals

- Make an app that keeps a log plants that need to be taken care of / watered.
- Have an easy way of entering new plants or editing data of existing
- Keep track of plants that have been watered
- Have an alert system if the weather conditions outside change

## Non Goals
TBD

## Vision Narrative

it is hard to keep track of all the plants you need to water, especially if there is more that 150 that have different requirements! This app will help keep track of their watering schedule. It will tell you which plant to check on every day without a long search through an Excel sheet.

## Rough Scoping & Timeline

In V1 there will be:
- login page
- a basic framework for entering new plants
- a basic framework for editing new plants

It is a small scale project for now, with a max of 3 users and around 150 plants to keep alive.

The testing plan is to make a draft version and let it be tested by the client. And later iterate until it is suitable for her.

For the app we need:
- a functioning internet connection ?
- an authentication login ?
- a database that stores the information of the plants
- a view of plants that currently need watering
- a form to fill out for new plants with their needs

## Key Trade-Offs & Decisions
**Login: the authentication login approach**
- Because the app is a CRM application, we need just a username and password for authentication. If the needs change, we can alter the authentication to suite the needs.
- If the client will allow there will be a test app with sign-up login to view the app

**Choice of technology**
- This is a study app of front-end technology, so it will use a front-end framework. Which one will be determined at a later date.

**Database: a relational DB or document DB?**
- The key of the database is the specific plant. All the data is connected to it, so the database will be a relational one.


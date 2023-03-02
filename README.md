# daily-planner

developing a daily planner for our week 5 challenge

# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Actual Behaviour

```
GIVEN that I have created a work day scheduler
WHEN I open the planner
THEN the correct date is being displayed using dayJS
WHEN I scroll down the page I see that the current time slot is pink in color, past time slots will be grey and future time slots will be green
THEN a user can click into a time-block,
WHEN the user inputs their data then it is saved to the local storage
THEN if the page is reloaded the text remains
IF the user wants to clear their inputs
THEN they click 'clear'
WHEN a minute has passed the page will automatically reload so
IF a user starts inputting into a time block at 1 minute to the hour
THEN it will change accoringly on the hour



The following animation demonstrates the application functionality:

[Work Day Scheduler](https://user-images.githubusercontent.com/122907573/222431348-a7088744-7fe0-4695-900a-92302811d31e.gif)

[Link to deployed website](https://faithscoding.github.io/daily-planner/)
```

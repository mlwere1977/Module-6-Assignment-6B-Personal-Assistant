
# Personal Assistant – Mukwaya Lwere

**Class:** CS 81 JavaScript  
**Module:** 6 Assignment 6B  
**Date:** 07/09/2025

---

## Overview

-This project, a custom JavaScript object named `PersonalAssistant`, was created to assist Mukwaya Lwere in tracking her mood and managing her daily tasks. 
-The assistant can mimic a personal digital assistant that is customized to Mukwaya's routine by adding tasks, completing them, and reporting its mood.

---

## Features

- **Add Tasks:** Adding new tasks to your to-do list is simple.
- **Finished Tasks:** Mark each task as finished one at a time.
- **Mood Tracking:** Depending on the activity (productive, accomplished, relaxed, etc.), the assistant's mood varies.
- **Personalized Experience:** The assistant uses Mukwaya's name to introduce themselves and engages in conversation in a warm, relatable manner.

---

## How It Works

1. **Create an Assistant:**  
   Instantiate a new `PersonalAssistant` with your name.
2. **Add Real Tasks:**  
   Use `addTask()` to add tasks relevant to your week.
3. **Complete Tasks:**  
   Use `completeTask()` to finish tasks and see the assistant’s mood change.
4. **Mood Reports:**  
   Use `reportMood()` to check how your assistant is feeling at any time.

---

## Example Output

```
Hi! I'm Mukwaya Lwere, your personal assistant.
You have 0 tasks left.
My Mood is: neutral
New Task added: Finish JavaScript assignment for CS81
New Task added: Prepare slides for Friday's presentation
New Task added: Call Mom to check in
You have 3 tasks left, Mukwaya.
My Mood is: productive
Completing task for Mukwaya: Finish JavaScript assignment for CS81
Now you have 2 tasks left, Mukwaya.
My Mood is: accomplished
Completing task for Mukwaya: Prepare slides for Friday's presentation
Now you have 1 tasks left, Mukwaya.
My Mood is: accomplished
```

---

## Files

- `assistant.js` – The main JavaScript file containing the constructor and methods.
- `REFLECTION.md` – Your personal reflection on the assignment.

---

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Download or clone this repository.
3. Open a terminal and run:

   ```
   node assistant.js
   ```

---

## Reflection

See `REFLECTION.md` for thoughts on what made this assistant personal, challenges faced, and ideas for future improvements.

---

## Author

Mukwaya Lwere  
CS 81 JavaScript – Module 6B


// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 6 Assignment 6B: Personal Assistant
 // Date: 07/09/2025


// Hello! This item is the personal assistant of Mukwaya Lwere. 
// This file specifies a unique JavaScript assistant that aids Mukwaya in handling their everyday responsibilities and emotions. 
// ----------------------------------------------------------------------------------------

// Mukwaya's new personal assistant is created by this constructor function.
// It keeps track of the current mood, a list of tasks, and the name of the assistant.
//----------------------------------------------------------------------------------------
function PersonalAssistant(name) {
  this.name = name;        // The assistant's name (e.g., "Mukwaya's Assistant")
  this.tasks = [];         // An array to keep track of Mukwaya's tasks
  this.mood = "neutral";   // The assistant's starting mood
}
//----------------------------------------------------------------------------------------
// Mukwaya can add a new task to the assistant's to-do list using this method.
// The assistant feels productive every time a new task is added!
//---------------------------------------------------------------------------------------
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  this.mood = "productive";
  console.log(`New Task added: ${task}`);
};
//--------------------------------------------------------------------------------------
// This approach assists Mukwaya in finishing the first task on the list. 
// If there are no tasks, Mukwaya is informed and the assistant is at ease.
// Otherwise, the assistant feels successful and the task is removed!
//-------------------------------------------------------------------------------------
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length === 0) {
    console.log("No tasks to complete, Mukwaya! Time to relax.");
    this.mood = "relaxed";
    return;
  }
  const finished = this.tasks.shift();
  this.mood = "accomplished";
  console.log(`Completing task for Mukwaya: ${finished}`);
};

// This method tells Mukwaya how the assistant is feeling right now.
PersonalAssistant.prototype.reportMood = function() {
  console.log(`My Mood is: ${this.mood}`);
};

// ------------------------------------------------------
// Let's use the assistant to act out a day in Mukwaya's life!
// Along the way, we'll introduce the assistant, assign actual tasks, finish some, and assess how they're feeling.
// ------------------------------------------------------

const mukwayaAssistant = new PersonalAssistant("Mukwaya Lwere");

console.log(`Hi! I'm ${mukwayaAssistant.name}, your personal assistant.`);
console.log(`You have ${mukwayaAssistant.tasks.length} tasks left.`);
mukwayaAssistant.reportMood();

// Mukwaya's real-life tasks for this week
mukwayaAssistant.addTask("Finish JavaScript assignment for CS81");
mukwayaAssistant.addTask("Prepare slides for Friday's presentation");
mukwayaAssistant.addTask("Call Mom to check in");

console.log(`You have ${mukwayaAssistant.tasks.length} tasks left, Mukwaya.`);
mukwayaAssistant.reportMood();

// Mukwaya completes the first task
mukwayaAssistant.completeTask();
console.log(`Now you have ${mukwayaAssistant.tasks.length} tasks left, Mukwaya.`);
mukwayaAssistant.reportMood();

// Mukwaya completes another task
mukwayaAssistant.completeTask();
console.log(`Now you have ${mukwayaAssistant.tasks.length} tasks left, Mukwaya.`);
mukwayaAssistant.reportMood();


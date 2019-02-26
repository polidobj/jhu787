// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (window) {

	names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


	// STEP 10:
	// Loop over the names array and say either 'Hello' or "Good Bye"
	// using the 'speak' method or either helloSpeaker's or byeSpeaker's
	// 'speak' method.
	// See Lecture 50, part 1
	for (var i=0; i < names.length; ++i) {

	  // STEP 11:
	  // Retrieve the first letter of the current name in the loop.
	  // Use the string object's 'charAt' function. Since we are looking for
	  // names that start with either upper case or lower case 'J'/'j', call
	  // string object's 'toLowerCase' method on the result so we can compare
	  // to lower case character 'j' afterwards.
	  // Look up these methods on Mozilla Developer Network web site if needed.
	  var firstLetter = names[i].charAt(0).toLowerCase();

	  // STEP 12:
	  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
	  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
	  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
	  // name in the loop.
	  if (firstLetter == 'j') {
		// byeSpeaker.xxxx
		byeSpeaker.speak(names[i]);
	  } else {
		// helloSpeaker.xxxx
		helloSpeaker.speak(names[i]);
	  }
	}

// function to create a greeting for each name	
	function getGreeting(name){
	  var firstLetter = name.charAt(0).toLowerCase();

	  if (firstLetter == 'j') {
		return byeSpeaker.speakSimple(name);
	  } else {
		return helloSpeaker.speakSimple(name);
	  }
	}

	// create greeetings using the name array
	// the greetings var will be an array of greetings
	var greetings = names.map(getGreeting);
	
	console.log("part 2:");
	//output the greetings to the console
	for (i=0; i < greetings.length; ++i) {
		console.log(greetings[i]);
	}
	
	// puts value in array if it contains hello
	function isHello(array, value){
		if(value.includes("Hello")){
			array.push(value);
		}
		return array;
	}
	// puts value in array if it contains bye
	function isBye(array, value){
		if(value.includes("Bye")){
			array.push(value);
		}
		return array;
	}
	
	console.log("optional part3:");
	var hellos = greetings.reduce(isHello, []);
	for (i=0; i < hellos.length; ++i) {
		console.log(hellos[i]);
	}
	
	var byes = greetings.reduce(isBye, []);
	for (i=0; i < byes.length; ++i) {
		console.log(byes[i]);
	}
	
	
})(window);


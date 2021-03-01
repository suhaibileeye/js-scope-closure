///// M V P ///////
/******************************************************************************\
	Task 1: `counterMaker`
\******************************************************************************/
/****** INSTRUCTIONS TASK 1 ******/
/* 
 * Study the code below for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/
// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}
const counter1 = counterMaker();
// counter2 code
let count = 0;
function counter2() {
  return count++;
}
// counter 1 is closure 
//counter 1 code is the closure , because of it we are able 
//to put funsctions together 
//counter code 2 is  a basic closure 
/******************************************************************************\
	Task 2: Get Motivated
\******************************************************************************/
/****** INSTRUCTIONS TASK 2 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */
function motivation(firstname, lastname) {
  var welcomeText = 'You are doing awesome, keep it up '
     function message() {
      let greeting = welcomeText +  firstname + lastname 
      return  greeting 
    }
  //Uncommment this to return the value of your invoked message function
   return message();
}
console.log(motivation('Abdirahman' , 'Ali ileeye')); // 'You're doing awesome keep it up Abdirahman Ali Ileeye.
/******************************************************************************\
 Task 3: Find Your Friends
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 3 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
var friends = ["Abdirahman", "Abdulhakem", "Joseph"];
var secondLevelFriends = ["Ricki Zakarie", "Salah nay'nay", "Ahmed Kev"];
var allUsers = ["Abdirahman", "Abdulhakem", "Joseph", "Hassan", "Leekaashe", "Sacad", "kader mouse"];
function findPotentialFriends(existingFriends) {
}

var isNotAFriend = findPotentialFriends( friends );

// isNotAFriend(allUsers[0]); // false
// isNotAFriend(secondLevelFriends[2]); // true

/******************************************************************************\
	Task 4: Keep a log
\******************************************************************************/
/****** INSTRUCTIONS PROBLEM 4 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.
 Fix the code below to log the desired output.
 */
function timeOutCounter() {
  for ( var i = 0; i <= 5; i++) {
    setTimeout(function() {
    	console.log(i)
	}, i * 1000)
  }    
}
timeOutCounter();
function Counter() {
  var counter = 0;
    function IncreaseCounter() {
    return counter += 1;
  };
   return IncreaseCounter;
}
let countNum = Counter();
alert(countNum()); 
alert(countNum()); 
alert(countNum()); 
alert(countNum()); 
/******************************************************************************\
	Task 5: Check if name exists
\******************************************************************************/
/****** INSTRUCTIONS PROBLEM 5 ******/


/*
 Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument.*/
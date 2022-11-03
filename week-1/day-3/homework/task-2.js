//Write a function named waitThenRun that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

 waitThenRun(function() {
     console.log('Hello!');
     waitThenRun(function() {
         console.log('Goodbye!');
     }); // logs 'Goodbye!' 1.5 seconds later
 }); // logs 'Hello!' 1.5 seconds later



//This is not exactly what in the task - func waitThenRun don't takes another func

  setTimeout(function waitThenRun() {
      console.log("Hello!");
  }, 1500);

  setTimeout(function waitThenRun() {
      console.log("Goodbye!");
  }, 3000);



//I try put code in function but all console.log work in one moment

function waitThenRun() {
    setTimeout(console.log("Hello!"), 1500);
    setTimeout(console.log("Goodbye!"), 3000);
}




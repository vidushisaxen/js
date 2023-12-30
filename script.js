//console.log() --> used for displaying messages or result of arithmetic operations in the console.

// let personName = "Vidushi"
// const personId = 12345

// console.lof(personName)
// console.log(personId)
// console.log(1234+12345)


//console.info() --> used to display informational messages

// let techNames = ["ReactJS" , "Javascript" , "NextJs"]

// console.info(techNames);
// console.info({firstName: "Vidushi" , lastName:"Saxena" })


// console.count() --> used to track how often a specific block of code is executed.

// let i=0;
// do{
//     console.count();
//     i++;
// }while(i<5)

//console.table() --> displays data in the form of table

//console.dir() --> displays list of all properties and values 
// let personData=[{
//     personName :"Vidushi",
//     personId : "ABC123"
// },
// {
//     personName : "Saxena",
//     personId : "DEF234"
// }]
// console.dir(personData);


//console.trace() --> output a stack trace showing the function call sequence to the current point.

function firstFunction() {
    function secondFunction() {
      console.trace();
    }
    secondFunction();
  }
  
  firstFunction();

 



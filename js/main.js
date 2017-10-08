// var date = new Date();
// console.log(date);

// console.log('Today is the ' + date.getDate() + 'th');
//
// if(date.getDate() == 0) {
//   console.log('Today is Sunday')
// // }
// var button = document.createElement('button');
// button.setAttribute('id', 'button');
// button.classeName = 'btn btn-default';
// button.textContent = 'Show Time';
// document.body.appendChild(button);
//
// var div = document.createElement('div');
// document.body.appendChild(div);
//
// function showTime() {
//   div.textContent = date.toDateString();
// }
//
// button.addEventListener('click', showTime, false);
//
// function startTime() {
//   var currentTime = new Date();
//   var hours = currentTime.getHours();
//   var minutes = currentTime.getMinutes();
//   var seconds = currentTime.getSeconds();
//   var timeDiv = document.getElementById('totalTime');
//
//   if(hours > 12) {
//     hours = hours - 12;
//   }
//
//   timeDiv.textContent = hours + ':' + minutes + ':' + seconds;
//
//   setTimeout(startTime, 1000);
// }
//
// document.getElementById('totalTime').addEventListener('onload', startTime(), false);


// var nameArray = ['Blue', 'Red', 'Black', 'Green', 'Yellow'];
// console.log(nameArray[Math.floor(Math.random() * nameArray.length)]);

// function firstFactorial(num) {
//   var start = 1;
//
//   for(i = 1; i <= num; i++) {
//     start *= i;
//   }
//
//   return console.log(start)
// }
//
// firstFactorial(10);


// var numArray = [2.27, 5.20, 7.50, 6.34, 3.33]
// var newNumArray = []
// for(i = 0; i < numArray.length; i++) {
// //   newNumArray.push(Math.round(numArray[i]));
//   // newNumArray.push(numArray);
//
// }
// console.log(newNumArray);
//
// var newNumbersArray2 = [];
// function randomNumbers() {
//   var y = Math.ceil( Math.random() * 100);
//   newNumbersArray2.push(y);
// };
// for (var i = 0; i < 10; i++) {
//   randomNumbers();
// }
// console.log(newNumbersArray2.length)

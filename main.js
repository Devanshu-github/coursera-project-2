console.log("Here, we are going to learn about Date & Time object in javascript");

let today = new Date();//Gives the information of todays date with current time.
console.log(typeof today);//This is object.

//The format is mm/dd/yy.
let otherday = new Date('12-14-2003');//This is how we can lock the value in javascript.

otherday = new Date('december 14 2003');//This is also a way to lock the value.

otherday = new Date('12/14/2003');//mm/dd/yy.

//To understand more visit this site.
//*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(otherday);

a = otherday.getDay();//Gives the day number form 0-6.

a = otherday.getDate();//Gives the date of the day.

a = otherday.getMinutes();//Gives the minutes.

a = otherday.getSeconds();//Gives the seconds.

a = otherday.getTime();//Gives the number of seconds from the argument.

a = otherday.getMilliseconds();

a = otherday.getMonth();//Gives the month (count from 0-11).

otherday.setDate(15);//This is how we can change the date.

otherday.setMonth(0);//This how we can change Month.

otherday.setSeconds(23);//This is how we can change seconds.

otherday.setMinutes(12);//This is how we can change minutes.

otherday.setMilliseconds(55);//This is how we can change millisecond.

console.log(otherday);

console.log(a);

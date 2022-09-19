function previousDay(year, month, day){
let inputDate = new Date(year, month-1, day)

let previousDate = inputDate;
previousDate.setDate(previousDate.getDate()-1);

console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()+1}-${previousDate.getDate()}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
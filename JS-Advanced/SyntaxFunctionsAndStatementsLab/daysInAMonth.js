function daysInAMonth(month, year){
let inputdate = new Date(year,month);
inputdate.setDate(inputdate.getDate()-1);
console.log(inputdate.getDate());
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
let mass = [];
let week = [
  "понедельник",
  "втрник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье"
];
 
let day = "суббота";
let indexWeek = week.indexOf(day);
let i = 1;
 
while ( i < 32 ) {
  mass.push(i);
  i++
}
let a = 0;
while ( a < week.length) {
  if (week[a] === day ) {
      indexWeek = a;
  }
  a++
}
 
for (let elem of mass) {
  const y = (indexWeek + elem - 1) % 7; 
  console.log(`${elem} января, ${week[y]}`);
}
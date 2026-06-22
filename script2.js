//Task 1
function nextPayDay(){
    const today=new Date();
    let crntYear=today.getFullYear();
    let crntMonth=today.getMonth();
    let payDay=new Date(crntYear,crntMonth,15)
    if (today>payDay){
        crntMonth++
        if (crntMonth>11){
            crntMonth=0
            crntYear++
        }
        payDay=new Date(crntYear,crntMonth,15)
    }
    let day=payDay.getDay()
    if (day==6){
        payDay.setDate(payDay.getDate()-1)
    }
     if (day==0){
        payDay.setDate(payDay.getDate()-2)
    }
    return payDay.toString()
}

console.log("Novbeti maas:" +nextPayDay())

//Task 2
function getDaysBetweenDates(dateStr1, dateStr2) {
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);
    const difference = Math.abs(date2 - date1);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const days = Math.floor(difference / millisecondsInDay);
    return days;
}

const firstDate = "2026-06-01";
const secondDate = "2026-06-23";
console.log(`Aradakı gün sayı: ${getDaysBetweenDates(firstDate, secondDate)} gün`);
/**Code from: https://thisinterestsme.com/javascript-christmas-countdown/
 * Our JavaScript function, which calculates the days, hours,
 * minutes and seconds left until Christmas day.
 */
 function calculateChristmasCountdown(){
    
    //Get today's date.
    const now = new Date();

    //Get the current month. Add a +1 because
    //getMonth starts at 0 for January.
    let currentMonth = (now.getMonth() + 1);

    //Get the current day of the month.
    const currentDay = now.getDate();

    //Work out the year that the next Christmas
    //day will occur on.
    const nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        //This year's Christmas Day has already passed.
        nextChristmasYear = nextChristmasYear + 1;
    }

    const nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    const christmasDay = new Date(nextChristmasDate);

    //Get the difference in seconds between the two days.
    let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    //Don't calculate the time left if it is Christmas day.
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        //Convert these seconds into days, hours, minutes, seconds.
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }

    //Add our counts to their corresponding HTML elements.
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    //Recursive call after 1 second using setTimeout
    setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();

// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.
    

/* CODE TO JUST GET THE DISPLAY TO COUNTDOWN
const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25;
    const date = new Date();
    console.log(date);
    
    const currentYear = date.getFullYear();
    const dayOfMonth = date.getDate();
    
    const 
    
    To log out date in normal syntax:
    console.log(`Today is: ${date.toDateString()}`);
    console.log(`Today is the ${dayOfMonth} day of the month in the year ${currentYear}.`);

    
    const remainingDays = christmas - dayOfMonth
    console.log(`There are ${remainingDays} left until Christmas!`)
    
    const daysRemaining = document.getElementById("countdown-display")
    daysRemaining.innerText = remainingDays
}

renderCountdown() */

// The output elements
const outPutYear = document.querySelector('.outYear');
const outPutMonth = document.querySelector('.outMonth');
const outPutDay = document.querySelector('.outDay');
// The output elements

// Get the input values
let yearInput = document.getElementById('year');
let monthInput = document.getElementById('month');
let dayInput = document.getElementById('day');

let isValid = false;

// Get error Messages
const dayError = document.querySelector('.error-day');
const monthError = document.querySelector('.error-month');
const yearError = document.querySelector('.error-year');


// Get the form container

const formContainer = document.querySelector('.form-container');

formContainer.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        handleCalculation(dayInput.value, monthInput.value, yearInput.value)
    }
} )

// Get the btn for submission
const submitBtn = document.querySelector('.btn');

// Add eventlistener to the button
submitBtn.addEventListener('click', () => {
    let yearInput = document.getElementById('year');
    let monthInput = document.getElementById('month');
    let dayInput = document.getElementById('day');

    handleCalculation(dayInput.value, monthInput.value, yearInput.value)
} )

// Add listeners to the inputs and also checking for errors


// A function to handle the caclulations

function handleCalculation(day, month, year) {
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');

    createAlert()
    isValidError()


    if(yearInput.value == '' || monthInput.value == '' || dayInput.value == '') {
        return
    }

    if(!isValidDate(day, month, year)) {
        return
    }
    // calculate the age
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    if(birthDate.getFullYear() > currentDate.getFullYear()) {
        return
    }
    // calculate the difference in milliseconds
    const diffTime = currentDate.getTime() - birthDate.getTime();

    // Number of year,month and day in milliseconds
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const millisecondsInMonth = millisecondsInYear / 12;
    const millisecondsInDay = 1000 * 60 * 60 * 24;

    // Calculate the number of years, months and days
    const years = Math.floor(diffTime / millisecondsInYear)
    const months = Math.floor((diffTime % millisecondsInYear) / millisecondsInMonth )
    const days = Math.floor((diffTime % millisecondsInMonth)/ millisecondsInDay)



    countYear = 0;
    countMonth = 0
    countDay = 0

// Updating the DOM
        // Year aninmate
    let yearAnimate = setInterval(()=> {
    countYear++;
    outPutYear.innerHTML = `${countYear}`;
    if(countYear === years) {
        clearInterval(yearAnimate)
    }
}, 200)

    // Month animate
let monthAnimate = setInterval(()=> {
    countMonth++;
    outPutMonth.innerHTML = `${countMonth}`;
    if(countMonth === months) {
        clearInterval(monthAnimate)
    }
}, 200)

    // Day animate
let dayAnimate = setInterval(()=> {
    countDay++;
    outPutDay.innerHTML = `${countDay}`;
    if(countDay === days) {
        clearInterval(dayAnimate)
    }
}, 200)

}



// A function to set date, month and year valid
function isValidDate(day, month, year) {
    const date = new Date(year, month -1, day);

    return (
        date.getDate() === Number(day) && date.getMonth() === Number(month) - 1 && date.getFullYear() === Number(year)  
        
    )
}




// The function throws an alert when the input field is empty
function createAlert() {
    let allInput = document.querySelectorAll('.inputs');
    const setValue = document.querySelectorAll('.date .required');
    const labelField = document.querySelectorAll('label')


    // loop through the setValues
    for(let i = 0; i < allInput.length; i++) {
        if(allInput[i].value == '') {
            setValue[i].classList.add('alert');
            labelField[i].classList.add('alert')
        }
        else{
            setValue[i].classList.remove('alert');
            labelField[i].classList.remove('alert')
        }
    }
}

// A function that checks the date errors

function isValidError() {
    const dayError = document.querySelector('.date .error-day');
    const monthError = document.querySelector('.error-month');
    const yearError = document.querySelector('.error-year');

    // get all the inputs values
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');

    const newDate = new Date();

    // A condition to check validity of the dates
    if(yearInput.value > newDate.getFullYear()) {
        yearError.textContent = 'Must be a valid date'
    }else {
        yearError.textContent = ''
    }

    if(monthInput.value > 12) {
        monthError.textContent = 'Must be a valid date'
    }
    else {
        monthError.textContent = ''
    }
    if(dayInput.value > 31) {
        dayError.textContent = 'Must be a valid date'
    }
    else {
        dayError.textContent = ''
    }

} 

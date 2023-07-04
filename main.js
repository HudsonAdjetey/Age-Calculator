const dsYears = document.querySelector('.dsYears span');
const dsMonth = document.querySelector('.dsMonths span');
const dsDay = document.querySelector('.dsDays span');

const btn = document.querySelector('.btn')


btn.addEventListener('click', function() {
    handleDate()
})




function handleDate() {
    let years = document.getElementById('year').value;
    let months = document.getElementById('month').value;
    let days = document.getElementById('day').value;
    
    createAlert()


    if(years == '' || months == '' || days == '') {
        return  
    }

    
    // The mathematics behind it
    
    
    let date = new Date();

    let calcDay = date.getDate();
    let calcMonth = date.getMonth();
    let calcYear = date.getFullYear();

    let totalMonths = [31,28,31,30,31,31,30,31,30,31] 


    if(days > calcDay) {
        calcDay += totalMonths[calcMonth -1];
        calcMonth = calcMonth -  1;
    }

    if(months > calcMonth) {
        calcMonth = calcMonth + 12
        calcYear = calcYear -  1
    }

    const daysRemaining = parseInt(calcDay - days)
    const monthDiff = parseInt(calcMonth - months)
    const yearDiff = parseInt(calcYear - years)


    let countYear = 0
    let countMonth = 0
    let countDay = 0

    let yearAnimate = setInterval(()=> {
        countYear++;
        dsYears.innerHTML = `${countYear}`;
        if(countYear === yearDiff) {
            clearInterval(yearAnimate)
        }
    }, 200)

    let monthAnimate = setInterval(()=> {
        countMonth++;
        dsMonth.innerHTML = `${countMonth}`;
        if(countMonth === monthDiff) {
            clearInterval(monthAnimate)
        }
    }, 200)


    let dayAnimate = setInterval(()=> {
        countDay++;
        dsDay.innerHTML = `${countDay}`;
        if(countDay === daysRemaining) {
            clearInterval(dayAnimate)
        }
    }, 200)
    
    
    
    

}    





function createAlert() {
    let allInput = document.querySelectorAll('.inputs');
    const setValue = document.querySelectorAll('.date span');
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





'use strict'

document.querySelector('.pay').addEventListener('click', function () {
    const ticket = document.querySelector('.numbs').value;
    const countryy = document.querySelector('.country').value;
    const euNations = ['Nigeria', 'Germany', 'England', 'Poland', 'Italy', 'Greece']

    if (ticket === '' && countryy === '') {
        document.querySelector('.origin').textContent = 'You Have Not entered how many tickets you want to buy And Your Country of Origin'
    }
    else if (ticket === '' && countryy !== '') {
        document.querySelector('.origin').textContent = 'Please enter how many tickets you want to buy'
    }
    else if (countryy === '' && ticket !== '') {
        document.querySelector('.origin').textContent = 'please enter Your country of Origin';
    }
    else {
        //document.querySelector('.origin').textContent = 'Welcome You Motherfucker'
        for (let i = 0; i < euNations.length; i++) {
            if (ticket >= 50 && ticket < 100 && countryy === euNations[i]) {
                const bill = ticket - (0.30 * ticket)
                document.querySelector('.origin').textContent = `Your have a 30% discount and now your bill is ${bill} Euro`;
            }
            if (ticket >= 50 && ticket <= 100 && countryy !== euNations[i]) {
                const bill = ticket - (0.2 * ticket)
                document.querySelector('.origin').textContent = `Your have a 20% discount and now your bill is ${bill} Euro`;
            }
            if (ticket < 50 && countryy === euNations[i]) {
                const bill = ticket - (0.18 * ticket)
                document.querySelector('.origin').textContent = `Your have a 18% discount and now your bill is ${bill} Euro`;
            }
            if (ticket >= 100 && countryy === euNations[i]) {
                const bill = ticket - (0.40 * ticket)
                document.querySelector('.origin').textContent = `Your have a 40% discount and now your bill is ${bill} Euro`;
            }
            if (ticket >= 100 && countryy !== euNations[i]) {
                const bill = ticket - (0.35 * ticket)
                document.querySelector('.origin').textContent = `Your have a 35% discount and now your bill is ${bill} Euro`;
            }
        }

    }


})


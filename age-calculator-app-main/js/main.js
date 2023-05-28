"use strict";
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
let textYear = document.querySelector("#textYear");
let textMonth = document.querySelector("#textMonth");
let textDay = document.querySelector("#textDay");
let dayFieldRequired = document.querySelector("#dayFieldRequired");
let monthFieldRequired = document.querySelector("#monthFieldRequired");
let yearFieldRequired = document.querySelector("#yearFieldRequired");
let resultYear = document.querySelector("#resultYear");
let resultMonth = document.querySelector("#resultMonth");
let resultDay = document.querySelector("#resultDay");
let modal = document.querySelector(".modal");
let modalTitle = document.querySelector("#modalTitle");
let modalDescription = document.querySelector("#modalDescription");
let confirmationModal = document.querySelector("#confirmationModal");
const colorLightRed = 'hsl(0, 100%, 67%)';
const localDate = new Date();
const start = () => {
    //case any fields is empty
    if (inputDay.value.length == 0 && inputMonth.value.length == 0 && inputYear.value.length == 0) {
        modalError('Fileds is empty', 'Please, fill in the inputs correctely');
        fieldRequired();
    }
    else if (inputDay.value <= `${0}`) {
        modalError('Invalid date', 'Please, insert a date between 0 and 31');
        fieldRequired();
    }
    else if (inputDay.value >= `${31}`) {
        modalError('Invalid date', 'Please, insert a date between 0 and 31');
        fieldRequired();
    } // else if (inputMonth.value > `${9+3}` ) {
    //modalError('Invalid Month', 'Please, insert a date between 0 and 12')
    //fieldRequired();
    else if (inputYear.value > `${2022}`) {
        modalError('Invalid Year', 'Please, insert a date before 2023');
    }
    else if (inputYear.value.length < 4) {
        modalError('Invalid Year', 'Please, input a valid date format : YYYY');
    }
    else if (inputYear.value === '') {
        modalError('Year is Empty', 'Please, insert a valid year number');
    }
    else {
        let actualDate = localDate.getDate();
        let actualMonth = localDate.getMonth();
        let actualYear = localDate.getFullYear();
        let yourYear = actualYear - parseInt(inputYear.value);
        let yourMonths = actualMonth - parseInt(inputMonth.value);
        let yourDays = actualDate - parseInt(inputMonth.value);
        if (yourMonths < 0) {
            yourYear--;
            let reajustMonth = actualDate - parseInt(inputMonth.value) + 1;
            yourDays = actualDate - parseInt(inputDay.value);
            yourMonths = reajustMonth / 2;
        }
        resultDay.innerHTML = `${yourDays}`;
        resultYear.innerHTML = `${yourYear}`;
        resultMonth.innerHTML = `${yourMonths}`;
    }
    //	let dayValue:any = inputDay.value;
    //	if(dayValue %2 ==0){
    //		alert('30 dias')
    //	}
};
const modalError = (title, description) => {
    modal.style.display = 'flex';
    modalTitle.innerHTML = title;
    modalDescription.innerHTML = description;
};
confirmationModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
const fieldRequired = () => {
    inputDay.style.borderColor = colorLightRed;
    textDay.style.color = colorLightRed;
    inputMonth.style.borderColor = colorLightRed;
    textMonth.style.color = colorLightRed;
    inputYear.style.borderColor = colorLightRed;
    textYear.style.color = colorLightRed;
    dayFieldRequired.style.display = 'block';
    monthFieldRequired.style.display = 'block';
    yearFieldRequired.style.display = 'block';
};
//limit the length of input numbers
setInterval(() => {
    if (inputDay.value.length >= 3) {
        inputDay.value = inputDay.value.substring(0, inputDay.value.length - 1);
    }
    else if (inputMonth.value.length >= 3) {
        inputMonth.value = inputMonth.value.substring(0, inputMonth.value.length - 1);
    }
    else if (inputYear.value.length >= 5) {
        inputYear.value = inputYear.value.substring(0, inputYear.value.length - 1);
    }
}, 10);

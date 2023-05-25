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
    //block days minor of 0 and gratter than 31
    else if (inputDay.value <= `${0}` || inputDay.value >= `${32}`) {
        modalError('Invalid date', 'Please, insert a date between 0 and 31');
    }
    else if (inputMonth.value > `${localDate.getFullYear()}`) {
        //block years gratter of local Year
    }
    else if (inputMonth.value <= '0' || inputMonth.value >= '12') {
        //modal
        //lightred
        //block month minor of 0 and gratter than 12
    }
    else if (localDate.getMonth() % 2 == 0) {
        //par
        //30 dias
        //define which a months of years that contains 30 or 31 days
    }
    else {
        //impar
        //31dias
        //define which a months of years that contains 30 or 31 days
    }
};
const modalError = (title, description) => {
    modal.style.display = 'flex';
    modalTitle.innerHTML = title;
    modalDescription.innerHTML = description;
};
const modalDateError = () => {
    modal.style.display = 'flex';
    modalTitle.innerHTML = 'Invalid Date';
    modalDescription.innerHTML = 'Please, insert a date between 0 and 31';
};
const modalMonthError = () => {
    modal.style.display = 'flex';
    modalTitle.innerHTML = 'Invalid Month';
    modalDescription.innerHTML = 'Please, insert a date between 0 and 12';
};
const modalYearError = () => {
    modal.style.display = 'flex';
    modalTitle.innerHTML = 'Invalid Year';
    modalDescription.innerHTML = `Please, insert a date grater than ${localDate.getFullYear()})`;
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

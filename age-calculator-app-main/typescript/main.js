var inputDay = document.querySelector("#day");
var inputMonth = document.querySelector("#month");
var inputYear = document.querySelector("#year");
var textYear = document.querySelector("#textYear");
var textMonth = document.querySelector("#textMonth");
var textDay = document.querySelector("#textDay");
var dayFieldRequired = document.querySelector("#dayFieldRequired");
var monthFieldRequired = document.querySelector("#monthFieldRequired");
var yearFieldRequired = document.querySelector("#yearFieldRequired");
var resultYear = document.querySelector("#resultYear");
var resultMonth = document.querySelector("#resultMonth");
var resultDay = document.querySelector("#resultDay");
var modal = document.querySelector(".modal");
var modalTitle = document.querySelector("#modalTitle");
var modalDescription = document.querySelector("#modalDescription");
var confirmationModal = document.querySelector("#confirmationModal");
var colorLightRed = 'hsl(0, 100%, 67%)';
var localDate = new Date();
var start = function () {
    //case any fields is empty
    if (inputDay.value.length == 0 && inputMonth.value.length == 0 && inputYear.value.length == 0) {
        modalError('Fileds is empty', 'Please, fill in the inputs correctely');
        fieldRequired();
    }
    else if (inputDay.value <= "".concat(0) || inputDay.value >= "".concat(32)) {
        modalError('Invalid date', 'Please, insert a date between 0 and 31');
        fieldRequired();
    }
    else if (inputMonth.value <= "".concat(0) || inputMonth.value >= "".concat(13)) {
        modalError('Invalid Month', 'Please, insert a date between 0 and 12');
        fieldRequired();
    }
    else if (inputYear.value == "".concat(2023)) {
        modalError('Invalid Year', 'Please, insert a real birth date');
    }
    else {
        alert('pass');
    }
    //	let dayValue:any = inputDay.value;
    //	if(dayValue %2 ==0){
    //		alert('30 dias')
    //	}
};
var modalError = function (title, description) {
    modal.style.display = 'flex';
    modalTitle.innerHTML = title;
    modalDescription.innerHTML = description;
};
confirmationModal.addEventListener('click', function () {
    modal.style.display = 'none';
});
var fieldRequired = function () {
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
setInterval(function () {
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

const inputDay = document.querySelector("#day") as HTMLInputElement;
const inputMonth = document.querySelector("#month") as HTMLInputElement;
const inputYear = document.querySelector("#year") as HTMLInputElement;

let textYear = document.querySelector("#textYear") as HTMLElement;
let textMonth = document.querySelector("#textMonth") as HTMLElement;
let textDay = document.querySelector("#textDay") as HTMLElement;

let dayFieldRequired = document.querySelector("#dayFieldRequired") as HTMLElement;
let monthFieldRequired = document.querySelector("#monthFieldRequired") as HTMLElement;
let yearFieldRequired = document.querySelector("#yearFieldRequired") as HTMLElement;


let resultYear = document.querySelector("#resultYear") as HTMLElement;
let resultMonth = document.querySelector("#resultMonth") as HTMLElement;
let resultDay = document.querySelector("#resultDay") as HTMLElement;


let modal = document.querySelector(".modal") as HTMLElement;
let modalTitle = document.querySelector("#modalTitle") as HTMLElement;
let modalDescription = document.querySelector("#modalDescription") as HTMLElement;
let confirmationModal = document.querySelector("#confirmationModal") as HTMLElement;

const colorLightRed = 'hsl(0, 100%, 67%)';
const localDate = new Date();


const start = () => {
console.log(inputMonth.value + ' - ' + `${12}`)
	//case any fields is empty
	if (inputDay.value.length == 0 && inputMonth.value.length == 0 && inputYear.value.length == 0) {
		modalError('Fileds is empty', 'Please, fill in the inputs correctely');
		fieldRequired();
	} else if (inputDay.value <= `${0}`) {
		modalError('Invalid date', 'Please, insert a date between 0 and 31');
		fieldRequired();
	} else if (inputDay.value >= `${31}`) {
		modalError('Invalid date', 'Please, insert a date between 0 and 31');
		fieldRequired();

	}// else if (inputMonth.value > `${9+3}` ) {
		//modalError('Invalid Month', 'Please, insert a date between 0 and 12')
		//fieldRequired();
	 else if (inputYear.value > `${2022}`) {

		modalError('Invalid Year', 'Please, insert a date before 2023')
	} else if (inputYear.value.length < 4) {
		modalError('Invalid Year', 'Please, input a valid date format : YYYY')

	} else if (inputYear.value === '') {
		modalError('Year is Empty', 'Please, insert a valid year number')
	} else {
		let actualYear: any = localDate.getFullYear();


		let resutYearOf = `${parseInt(actualYear) - parseInt(inputYear.value)}`
		let convertMonthInDays = `${parseInt(inputMonth.value) * 30}`;

		let TotalDays = `${parseInt(resutYearOf) * 365 + parseInt(inputDay.value) + parseInt(convertMonthInDays)}  `;
		let TotalYears = `${parseInt(TotalDays) / 365}`;
		let totalMonths = `${parseInt(TotalDays) / 30}`;

		resultDay.innerHTML = TotalDays;
		resultYear.innerHTML = `${parseInt(TotalYears)}`;
		resultMonth.innerHTML = `${parseInt(totalMonths)}`;


	}

	//	let dayValue:any = inputDay.value;
	//	if(dayValue %2 ==0){
	//		alert('30 dias')
	//	}

}


const modalError = (title: any, description: any) => {
	modal.style.display = 'flex';
	modalTitle.innerHTML = title;
	modalDescription.innerHTML = description;
}

confirmationModal.addEventListener('click', () => {
	modal.style.display = 'none';

})

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
}

//limit the length of input numbers
setInterval(() => {
	if (inputDay.value.length >= 3) {
		inputDay.value = inputDay.value.substring(0, inputDay.value.length - 1);
	} else if (inputMonth.value.length >= 3) {
		inputMonth.value = inputMonth.value.substring(0, inputMonth.value.length - 1);
	} else if (inputYear.value.length >= 5) {
		inputYear.value = inputYear.value.substring(0, inputYear.value.length - 1);
	}
}, 10)
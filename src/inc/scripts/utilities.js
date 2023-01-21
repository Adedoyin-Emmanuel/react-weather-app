import jQuery from "jquery";

export function navigate(page) {
	window.location.href = `${page}`;
}

const closeUtilityComponent = () => {
	jQuery(($) => {
		$.noConflict();

		$(".utility-component").removeClass("add-utility-component-height");
	});
};

export const getCurrentDate = () => {
	let day, month, date, result, dateExtension;

	const DATE = new Date();

	date = DATE.getDate();

	switch (DATE.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
		default:
			month = "Undefined";
			break;
	}

	switch (DATE.getDay()) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			day = "Undefined";
			break;
	}

	//date format check

	let dateLength = date.toString().length;
	if (
		(dateLength == 1 && date == 1) ||
		(dateLength == 2 && date.toString().indexOf	("1") == 1)
	) {
		dateExtension = "st";
	} else if (
		(dateLength == 1 && date == 2) ||
		(dateLength == 2 && date.toString()[0] > 1 && date.toString().lastIndexOf("2") == 1)
	) {
		dateExtension = "nd";
	} else if (
		(dateLength == 1 && date == 3) ||
		(dateLength == 2 && date.toString()[0] > 1 && date.toString().indexOf("3") == 1)
	) {
		dateExtension = "rd";
	} else {
		dateExtension = "th";
	}

	result = `${day}, ${date}${dateExtension} of ${month}`;	
	return result;
};

export default navigate;

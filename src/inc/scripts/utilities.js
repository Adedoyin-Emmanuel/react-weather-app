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
	let day, month, date, result;

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


    return result = `${day}, ${date}th of ${month}`;

    
};

export default navigate;

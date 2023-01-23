import jQuery from "jquery";
import "jquery-mobile";

export const detectSwipe = () => {
	jQuery(($) => {
		$.noConflict();

		const $utilityComponent = $("#utilityComponent");

		$utilityComponent.on("swipeup", (e) => {
			console.log("you swiped up");
		});

		//get the utility footer component
	});
};

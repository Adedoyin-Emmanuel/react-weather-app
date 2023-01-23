import React from "react";
import jQuery from "jquery";
import { useSwipeable } from "react-swipeable";

const UtilityComponent = (props) => {
	const closeUtilityComponent = () => {
		jQuery(($) => {
			$.noConflict();
			$(".cmp").addClass("d-none");
			$(".utility-component").removeClass("add-utility-component-height");
		});
	};

	const swipe = (direction) => {
		alert(`you swipped ${direction}`);
	};
	return (
		<useSwipeable onSwipe={swipe} className="d-flex align-items-center justify-content-center">
			<section
				className="utility-component align-items-center justify-content-around m-auto width-toggle-2"
				id="utilityComponent">
				<div
					className="utility-notch my-2"
					onClick={closeUtilityComponent}></div>

				{props.tags}
			</section>
		</useSwipeable>
	);
};

export default UtilityComponent;

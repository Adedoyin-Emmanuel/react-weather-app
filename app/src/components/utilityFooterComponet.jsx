import React, {useMemo} from "react";
import jQuery from "jquery";

const UtilityComponent = (props) => {
	const closeUtilityComponent = () => {
		jQuery(($) => {
			$.noConflict();
			$(".cmp").addClass("d-none");
			$(".utility-component").removeClass("add-utility-component-height");
		});
	};
;


	return (

    <React.Fragment>
			<section
				className="utility-component align-items-center justify-content-around m-auto width-toggle-3"
				id="utilityComponent">
				<div
					className="utility-notch my-2"
					onClick={closeUtilityComponent}></div>

				{props.tags}
			</section>
      </React.Fragment>
	);
};

export default UtilityComponent;

import React from "react";

const NextWeekComponent = (props) => {
	return (
		<React.Fragment>
			<section className="w-100 next-week-component d-flex align-items-start justify-content-between brand-gradient p-4 rounded-3 shadow">
				<section className="today-section d-flex align-items-start justify-content-start flex-row text-light">
					<p className="text-start fw-bold text-capitalize brand-small-text d-block m-0">{props.day}</p>
				</section>
				<section className="d-flex align-items-center justify-content-between">
						<p className="text-muted brand-small-textd-block px-2  m-0">
							{props.firstUnit}<sup>o</sup>
						</p>
						<div className="next-week-notch d-block mt-3"></div>
						<p className="fw-bold brand-small-text d-block px-2  m-0 text-muted">
							{props.secondUnit}<sup>o</sup>
						</p>
				</section>
					<section className="next-week-weather-x align-items-center justify-content-between icon">
							<img src={props.icon} height={"20"} width = {"20"} alt={"weather-icons"}/>
					</section>
				
			</section>
			<br/>
			<br/>
		</React.Fragment>
	);
};

export default NextWeekComponent;

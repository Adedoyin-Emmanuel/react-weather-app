import React from "react";

const NextWeekComponent = (props) => {
	return (
		<React.Fragment>
			<section className="w-100 next-week-component d-flex align-items-start justify-content-between ">
				<section className="today-section d-flex align-items-start justify-content-start flex-row">
					<p className="text-start fw-bold text-capitalize brand-small-text d-block">{props.day}</p>
				</section>
				<section className="d-flex align-items-center justify-content-center">
						<p className="text-muted brand-small-text">
							{props.firstUnit}<sup>o</sup>
						</p>
						<div className="next-week-notch"></div>
						<p className="fw-bold brand-small-text ">
							{props.secondUnit}<sup>o</sup>
						</p>
				</section>
					<section className="next-week-weather-icon">
							<img src={props.icon} height={"20"} width = {"20"} alt={"weather-icons"}/>
					</section>
					<br/>
					<br/>
			</section>
			<br/>
			<br/>
		</React.Fragment>
	);
};

export default NextWeekComponent;

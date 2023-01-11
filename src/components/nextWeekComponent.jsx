import React from "react";

const NextWeekComponent = (props) => {
	return (
		<React.Fragment>
			<section className="next-week-component d-flex align-items-center justify-content-center flex-column px-5">
				<section className="today-section d-flex align-items-center justify-content-between flex-row">
					<p className="text-start fw-bold text-capitalize">{props.day}</p>
					<section className="d-flex flex-row align-items-center justify-content-between mx-2">
						<p className="text-muted">
							{props.firstUnit}<sup>o</sup>
						</p>
						<div className="next-week-notch"></div>
						<p className="fw-bold">
							{props.secondUnit}<sup>o</sup>
						</p>
					</section>
					<section className="next-week-weather-icon">
                        <img src={props.icon} height={"20"} width = {"30"} alt={"weather-icons"}/>
                    </section>
				</section>
			</section>
		</React.Fragment>
	);
};

export default NextWeekComponent;

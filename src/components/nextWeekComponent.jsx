import React from "react";

const NextWeekComponent = (props) => {
	return (
		<React.Fragment>
			<section className="next-week-component">
				<section className="today-section d-flex">
					<p className="text-start fw-bold">{props.day}</p>
					<section>
						<p className="text-muted">
							{props.firstUnit}<sup>o</sup>
						</p>
						<div className="next-week-notch"></div>
						<p className="fw-bold">
							{props.secondUnit}<sup>o</sup>
						</p>
					</section>
					<section className="next-week-weather-icon">
                        <img src={props.icon} height={"20"} width = {"30"}/>
                    </section>
				</section>
			</section>
		</React.Fragment>
	);
};

export default NextWeekComponent;

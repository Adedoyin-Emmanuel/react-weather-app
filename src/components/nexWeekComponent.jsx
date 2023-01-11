import React from "react";

const NextWeekComponent = (prop) => {
	return (
		<React.Fragment>
			<section className="next-week-component">
				<section className="today-section">
					<p>today</p>
					<section>
						<p>
							13<sup>o</sup>
						</p>
						<div className="next-week-notch"></div>
						<p>
							22<sup>o</sup>
						</p>
					</section>
					<section className="next-week-weather-icon"></section>
				</section>
			</section>
		</React.Fragment>
	);
};

export default NextWeekComponent;

import React from "react";

const UtilityComponent = (props) => {
  return (
    <React.Fragment>
      <section className="utility-component align-items-center justify-content-around m-auto width-toggle-2">
        {props.tags}
      </section>
    </React.Fragment>
  );
};

export default UtilityComponent;

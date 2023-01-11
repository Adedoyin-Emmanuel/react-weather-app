import React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Spinner from "../components/spinner";
const Support = () => {
  const returnHome = () => {
    navigate("/weather");
  };
  return (
    <React.Fragment>
      <Spinner/>
      <section className="container-fluid my-3">
        <h4 className="text-center text-capitalize">abeg support your guy!</h4>

        <section className="d-flex align-items-center justify-content-center">
          <Button
            text="Home"
            className="brand-btn m-auto my-5 width-toggle"
            onClick={returnHome}
          />
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Support;

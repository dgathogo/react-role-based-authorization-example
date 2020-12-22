import FormikWizard from "formik-wizard";
import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import steps from "./steps";

function FormWrapper({
  children,
  isLastStep,
  status,
  goToPreviousStep,
  canGoBack,
  actionLabel,
}) {
  return (
    <div className="container container-fluid" id="formContainer">
      <div id="stepCard">{children}</div>
      <hr />
      {status && (
        <div>
          {status.message}
          <hr />
        </div>
      )}
      <div>
        <Button
          className="prevBtn"
          onClick={goToPreviousStep}
          disabled={!canGoBack}
        >
          Previous
        </Button>
        <Button className="nextBtn" type="submit">
          {actionLabel || (isLastStep ? "Submit" : "Next step")}
        </Button>
      </div>
    </div>
  );
}

function NavbarWrapper() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Students</Nav.Link>
        <Nav.Link href="#pricing">Schools</Nav.Link>
      </Nav>
    </Navbar>
  );
}

function ApplyForm() {
  const handleSubmit = React.useCallback((values) => {
    console.log("full values:", values);
    // const api_key = process.env.REACT_APP_API_KEY;

    return {
      message: "Thanks for submitting!",
    };
  }, []);

  return (
    <div className="container">
      <NavbarWrapper />
      <FormikWizard
        steps={steps}
        onSubmit={handleSubmit}
        render={FormWrapper}
      />
    </div>
  );
}

export { ApplyForm };

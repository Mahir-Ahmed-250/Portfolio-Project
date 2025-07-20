import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../Assets/email.json";
import Title from "../../Components/Title/Title";
import "./ContactMe.css";
import { Button, Form } from "react-bootstrap";

const ContactMe = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="mailContainer">
        <Player autoplay loop src={animationData} />
        <div className="mailForm">
          <div className="d-flex">
            <Title title2="Contact" />
            <span className="ms-2"></span>
            <Title title="Me..." />
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Message</Form.Label>
              <Form.Control required as="textarea" rows={8} />
            </Form.Group>
            <Button variant="outline-primary" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </div>
      </div>
      <hr className="mt-4" />
      <p className="copyrightText">
        Copyright © {year} Mehedi Hasan Tushar. All Rights Reserve
      </p>
    </>
  );
};

export default ContactMe;

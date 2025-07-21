import React, { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../Assets/email.json";
import Title from "../../Components/Title/Title";
import { Button, Form, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactMe.css";

const ContactMe = () => {
  const formRef = useRef();
  const today = new Date();
  const year = today.getFullYear();

  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [toastMsg, setToastMsg] = useState({
    show: false,
    message: "",
    success: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_oashrnn",
        "template_qxfy80i",
        formRef.current,
        "3pmpOPfjDZUhyQwcw"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
        setValidated(false);
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("Failed to send message. Try again!");
      })
      .finally(() => setSending(false));
  };

  return (
    <>
      <div className="mailContainer" id="contact">
        <Player autoplay loop src={animationData} />
        <div className="mailForm">
          <div className="d-flex">
            <Title title2="Contact" />
            <span className="ms-2"></span>
            <Title title="Me..." />
          </div>

          <Form
            ref={formRef}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label className="formLabel">Name</Form.Label>
              <Form.Control required type="text" name="user_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control required type="email" name="user_email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label className="formLabel">Message</Form.Label>
              <Form.Control required as="textarea" rows={8} name="message" />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
              className="w-100 mailBtn"
              disabled={sending}
            >
              {sending ? (
                <>
                  <Spinner animation="border" size="sm" /> Sending...
                </>
              ) : (
                "SEND"
              )}
            </Button>
          </Form>
        </div>
      </div>

      <hr className="mt-4" />
      <p className="copyrightText">
        Copyright © {year} Mehedi Hasan Tushar. All Rights Reserve
      </p>

      {/* ✅ Toast Message */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ContactMe;

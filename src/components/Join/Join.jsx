import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//import customs
import "./Join.css";

function Join() {
  const form = useRef();

  //email send code
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            name="user_email"
            type="email"
            placeholder="example@gmail.com"
          />
          <button className="btn btn-j" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;

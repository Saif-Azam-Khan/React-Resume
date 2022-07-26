import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ContactInfo.css";

function ContactInfo({ toggle }) {
  const [show, setShow] = useState(true);

  const details = {
    email: "saif.azamkhan77@gmail.com",
    address: "Bhopal, MP, India",
    linkedin: "https://www.linkedin.com/in/saif-azam-khanbb6733173/",
    phone: "+91-9111 844 005",
  };

  const handleClose = () => {
    setShow(false);
    toggle("about");
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Info</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h4>
          <i className="fa-solid fa-envelope"></i>  Email
          <CopyToClipboard text={details.email}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{details.email}</p>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-house"></i>  Address
          <CopyToClipboard text={details.address}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{details.address}</p>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-link"></i>  LinkedIN
          <CopyToClipboard text={details.linkedin}>
            <i className="fa-solid fa-copy copy"> </i>
          </CopyToClipboard>
        </h4>
        <a href={details.linkedin}>
          <p>{details.linkedin}</p>
        </a>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-phone"></i>  Contact Number
          <CopyToClipboard text={details.phone}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{details.phone}</p>
        <hr></hr>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ContactInfo;

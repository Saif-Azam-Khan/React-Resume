import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {contactInfo} from "../utils/data"
import "./ContactInfo.css";

function ContactInfo({ show, setShow }) {
  const [shows, setShows] = useState(show);
  
  const handleClose = () => {
    setShows(false);
    setShow(false);
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Info</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h4>
          <i className="fa-solid fa-envelope"></i>  Email
          <CopyToClipboard text={contactInfo.email}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{contactInfo.email}</p>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-house"></i>  Address
          <CopyToClipboard text={contactInfo.address}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{contactInfo.address}</p>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-link"></i>  LinkedIN
          <CopyToClipboard text={contactInfo.linkedin}>
            <i className="fa-solid fa-copy copy"> </i>
          </CopyToClipboard>
        </h4>
        <a href={contactInfo.linkedin}>
          <p>{contactInfo.linkedin}</p>
        </a>
        <hr></hr>
        <h4>
          <i className="fa-solid fa-phone"></i>  Contact Number
          <CopyToClipboard text={contactInfo.phone}>
            <i className="fa-solid fa-copy copy"></i>
          </CopyToClipboard>
        </h4>
        <p>{contactInfo.phone}</p>
        <hr></hr>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ContactInfo;

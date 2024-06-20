import { subdomaintype } from "./dnstype";
function validateForm() {
    let x = document.forms["nuccform"]["domain"].value;
    let y = document.forms["nuccform"]["DNS"].value;
    let z = document.forms["nuccform"]["contact"].value;
    if (x == "" || y == "" || z =="") {
      alert("We need you to enter your domain, dns adress and your contact before submitting");
      return false;
    }
  }
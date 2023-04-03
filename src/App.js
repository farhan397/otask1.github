import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import JobData from "./JobData";
import Axios from "axios";
import Btncomponent from "./Btncomponent";

// import { right } from "@popperjs/core";
// import { hrtime } from "process";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [jobloking, setjobloking] = useState("");
  const [userexp, setUserexp] = useState("");
  const [useredu, setUseredu] = useState("");
  const [userskil, setUserskil] = useState("");
  const [userdesc, setUserdesc] = useState("");

  const [joblokingerror, setjoblokingerror] = useState("");
  const [userexperror, setUserexperror] = useState("");
  const [usereduerror, setUsereduerror] = useState("");
  const [userskilerror, setUserskilerror] = useState("");
  const [userdescerror, setUserdescerror] = useState("");
  // 2ND FOAM
  const [hrerror, sethrerror] = useState("");
  const [esderror, setesderror] = useState("");
  const [carearlavelerror, setcarearerror] = useState("");
  const [gendererror, setgendererror] = useState("");
  const [foamuserdescerror, setfoamUserdescerror] = useState("");
  const [hourrate, sethourrate] = useState("");
  const [esdate, setesdate] = useState("");
  const [carearlavel, setcarearlavel] = useState("");
  const [gender, setgender] = useState("");
  const [fdescrption, setfdescrption] = useState("");

  const [changecolorbtn, setchangecolorbtn] = useState("blue");
  const [changecolordiv, setchangecolordiv] = useState("blue");
  const [isvisible, setisvisible] = useState(0);
  const [issubmit, setissubmit] = useState(false);
  const [fissubmit, setfissubmit] = useState(false);
  const [mydata, setdata] = useState([]);
  const [endbtnvisible, setendbtnvisible] = useState(1);

  

  return (
    <>
   <Btncomponent/>
      
    </>
  );
}

export default App;

import React, { useState } from 'react'
import Axios from "axios";
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import {adduserinfo} from '../service/actions/actions'
import userinformation from '../service/reducers/reducer';
<<<<<<< HEAD
import condinformation from '../service/reducers/reducer';
import Apidata from '../tabledata/Apidata';


=======
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19


const Page3component = (Props) => {
  const dispatch = useDispatch();

  const foam1data = useSelector(state => state.userinformation);
<<<<<<< HEAD
 const foam2data = useSelector(state => state.condinformation);
 const foam3data = useSelector(state => state.shiftinformation);

 



console.log("foam3con",foam3data)

  
  const [jobdata, setjobdata] = useState([]);
  const [jobdatapost, setjobdatapost] = useState([]);
=======
  const foam2data = useSelector(state => state.condinformation);
  const foam3 = useSelector(state => state.shiftinformation);


  
  const [jobdata, setjobdata] = useState([]);
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
  const [monday, setmonday] = useState("");
  const [tuesday, settuesday] = useState("");
  const [wednesday, setwednesday] = useState("");
  const [thursday, setthursday] = useState("");
  const [friday, setfriday] = useState("");
  

  const getprivousfoam2 = () => {
    Props.getprevioussfoam2(1);
  }

  const jobpostclick = () => {
<<<<<<< HEAD
    // console.log("foam3data", foam3data)
    console.log("searchbarsss", Props)
=======
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
    let foam3info = {
      stmonday: monday,
      sttuesday: tuesday,
      stwednesday: wednesday,
      stthursday: thursday,
      stfriday: friday
    }
<<<<<<< HEAD
    let foamlength=foam1data.length-1;
    let userinformations=foam1data[foamlength]
    console.log("foamlength",userinformations)

    let foam2length=foam2data.length-1;
    let condinformations=foam2data[foam2length]
    console.log("foamlength",condinformations)

   
    jobdata.push(userinformations,condinformations,foam3info)
    setjobdatapost([...jobdatapost,jobdata])
    console.log("jobbbdata",jobdatapost)
=======
    jobdata.push([...foam1data, foam2data, foam3info])
    setjobdata([...jobdata])
    console.log("jobpostinfo", jobdata)
    console.log("jobpostinfo", jobdata.length)
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
    Props.addToshiftHandler({
      jobpostdata: jobdata

    })
<<<<<<< HEAD
  console.log("foam1datachk",foam1data)
   
  //  Props.clearuserinfo()
=======

   
    
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19

  }

  
  return (
    <>
      <blockquote
        class="blockquote mb-0"
        style={{
          display: "flex",
          marginTop: "40px",
          justifyItems: "center",
          // align-items: center;
          // text-align: center;
        }}
      >
        <div
          class="divbtn1"
          style={{
            backgroundColor: "#d5d8da",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "35px",
            height: "30px",
            textAlign: "center",
          }}
        >
          S
        </div>
        <div
          class="divbtn1"
          style={{
            backgroundColor: "#006ab3",
            borderRadius: "5px",
            width: "30px",
            color: "white",
            marginLeft: "70px",
            height: "30px",
            textAlign: "center",
          }}
        >
          M
        </div>
        <div
          class="divbtn1"
          style={{
            backgroundColor: "#006ab3",
            borderRadius: "5px",
            width: "30px",
            color: "white",
            marginLeft: "70px",
            height: "30px",
            textAlign: "center",
          }}
        >
          T
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            class="divw1"
            style={{
              backgroundColor: "#006ab3",
              borderRadius: "5px",
              borderRadius: "5px",
              width: "30px",

              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            W
          </div>
          <div
            class="divw2"
            style={{
              backgroundColor: "#006ab3",
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            t
          </div>
          <div
            class="divbtn1"
            style={{
              backgroundColor: "#006ab3",
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            F
          </div>
          <div
            class="divbtn1"
            style={{
              backgroundColor: "#d5d8da",
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            S
          </div>
        </div>
        {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
      </blockquote>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#d5d8da",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
<<<<<<< HEAD
              
=======
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
            }}
          >
            Sunday
          </div>
          <input
            type="text"
<<<<<<< HEAD
            disabled
            // value="07pm-04am"
=======
            value="07pm-04am"
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Monday
          </div>
          <input
            type="text"
<<<<<<< HEAD
            placeholder='8pm-5am'
              onChange={(e) => setmonday(e.target.value)}
=======
            // value="08pm-05am"
            placeholder='8pm-5am'
            onChange={(e) => setmonday(e.target.value)}
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>

      {/* row2=================== */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Tuesday
          </div>
          <input
            type="text"
            placeholder='07pm-04am'
            onChange={(e) => settuesday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Wednesday
          </div>
          <input
            type="text"
            placeholder='08pm-05am'
            onChange={(e) => setwednesday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      {/* row3============================ */}

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Thursday
          </div>
          <input
            type="text"
            placeholder='07pm-04am'
            onChange={(e) => setthursday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Friday
          </div>
          <input
            type="text"
            placeholder='08pm-05am'
            onChange={(e) => setfriday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      {/* row 4========================= */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#d5d8da",
              alignItems: "center",

              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Saturday
          </div>
          <input
            type="text"
<<<<<<< HEAD
            disabled
=======
            value="07pm-04am"
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      <div class="selectbutton1">
        <button
          class="buttonppp"
          onClick={getprivousfoam2}
        >
          Previous
        </button>
        <button
          class="buttonn"
          onClick={jobpostclick}
        >
          Next
        </button>
      </div>


      <div style={{
        marginTop: 30
      }}>
<<<<<<< HEAD
       <Apidata/>
=======
       
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
      </div>
    </>
  )
}

export default Page3component
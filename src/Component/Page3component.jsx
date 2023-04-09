import React, { useState } from 'react'
import Axios from "axios";
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import {adduserinfo} from '../service/actions/actions'
import userinformation from '../service/reducers/reducer';


const Page3component = (Props) => {
  const dispatch = useDispatch();

  const foam1data = useSelector(state => state.userinformation);
  const foam2data = useSelector(state => state.condinformation);
  const foam3 = useSelector(state => state.shiftinformation);


  
  const [jobdata, setjobdata] = useState([]);
  const [monday, setmonday] = useState("");
  const [tuesday, settuesday] = useState("");
  const [wednesday, setwednesday] = useState("");
  const [thursday, setthursday] = useState("");
  const [friday, setfriday] = useState("");
  

  const getprivousfoam2 = () => {
    Props.getprevioussfoam2(1);
  }

  const jobpostclick = () => {
    let foam3info = {
      stmonday: monday,
      sttuesday: tuesday,
      stwednesday: wednesday,
      stthursday: thursday,
      stfriday: friday
    }
    jobdata.push([...foam1data, foam2data, foam3info])
    setjobdata([...jobdata])
    console.log("jobpostinfo", jobdata)
    console.log("jobpostinfo", jobdata.length)
    Props.addToshiftHandler({
      jobpostdata: jobdata

    })

   
    

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
            }}
          >
            Sunday
          </div>
          <input
            type="text"
            value="07pm-04am"
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
            // value="08pm-05am"
            placeholder='8pm-5am'
            onChange={(e) => setmonday(e.target.value)}
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
            value="07pm-04am"
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
       
      </div>
    </>
  )
}

export default Page3component
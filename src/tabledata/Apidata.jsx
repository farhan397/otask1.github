import React, { useState } from 'react'
import Axios from "axios";
import { useSelector } from 'react-redux';
import JobData from './JobData';

const Apidata = () => {
  const jobdata = useSelector(state => state.shiftinformation);

    const [mydata, setdata] = useState(jobdata);
    const [status, setstatus] = useState(0);
    const getdata = () => {
      setdata(jobdata);
      console.log("getdataprops",jobdata)
      setstatus(1);

      };
     
  return (
    <div>
       
        <button class="buttonn" onClick={getdata}>
          get
        </button>
        {status===1&&
        <JobData/>
     }
    </div>
  )
}

export default Apidata

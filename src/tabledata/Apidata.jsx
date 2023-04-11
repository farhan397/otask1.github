<<<<<<< HEAD
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
=======
import React from 'react'

const Apidata = () => {
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const [mydata, setdata] = useState([]);
    const getdata = () => {
        Axios.get(baseURL)
          .then((Response) => {
            setdata(Response.data);
            console.log(mydata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const axiospostdata = () => {
        let address = {
          street: "line3",
          suite: "sector2",
          city: "rawalpindi",
          zipcode: "46000",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        };
        let company = {
          name: "belmedex",
          catchPhrase: "billing company",
          bs: "medical billing market",
        };
        Axios.post(baseURL, {
          id: "1",
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address,
          phone: "03128705955",
          website: "www.belmedex.com",
          company,
        })
          .then((Response) => {
            console.log(Response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
       <button class="buttonp" onClick={axiospostdata}>
          post
        </button>
        <button class="buttonn" onClick={getdata}>
          get
        </button>
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
    </div>
  )
}

export default Apidata

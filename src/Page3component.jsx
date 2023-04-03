import React,{useState} from 'react'
import Axios from "axios";


const baseURL = "https://jsonplaceholder.typicode.com/users";
const Page3component = ({getprevioussfoam2}) => {
   const [mydata, setdata] = useState([]);
   
    const [isvisible, setisvisible] = useState(0);
    const [endbtnvisible, setendbtnvisible] = useState(1);

    const getprivousfoam2=()=>{
        getprevioussfoam2(1);
    }
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
                    value="08pm-05am"
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
                    Wednesday
                  </div>
                  <input
                    type="text"
                    value="08pm-05am"
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
                    Friday
                  </div>
                  <input
                    type="text"
                    value="08pm-05am"
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
                  onClick={() => {
                    alert("Job Post sucessfully");
                    setendbtnvisible(2);
                  }}
                >
                  Next
                </button>
              </div>

              
              <div style={{
                marginTop:30
              }}>
              <button class="buttonp" onClick={axiospostdata}>
                post
              </button>
              <button class="buttonn" onClick={getdata}>
                get
              </button>
            </div>
    </>
  )
}

export default Page3component
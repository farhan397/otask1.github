import React,{useState} from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';


  const JobData = () => {
    const jobdata = useSelector(state => state.shiftinformation);

    const [jobinfo,setJobinfo]=useState(jobdata);
    const [updatestate,Setupdatestate]=useState(" ");
    const [jobtitles,setjobtitles]=useState(" ");
    const [salerys,setsalerys]=useState(" ");
    const initialValue={job_title:" ",j_salery:" "};
  const [foamValue, setFormValue]= useState(initialValue);

  // setJobinfo(jobdata);

  console.log("getdatappprops",jobdata)

    const deletejob=(jobtitle)=>{
        console.log(jobtitle);
          const filtered=jobinfo.filter((item)=>{
          return item.jobtitle!==jobtitle   
        })
        setJobinfo(filtered);
        
    }
    const editjob=(jobtitle,salery)=>{
        console.log(jobtitle);
        console.log(salery)
        setjobtitles(jobtitle)
        setsalerys(salery)
        const filteredUser=jobinfo.filter((item)=>{
            return item.jobtitle!==jobtitle
           
            
            
          })
          setJobinfo(filteredUser);
          
        // Setupdatestate(jobtitle)
        // jobtitles=jobtitle
        // salerys=salery
          
        
    }
    const handleupclick=()=>{
       setJobinfo(jobdata)
       console.log("jobinofoo",jobinfo)
        
      //  console.log(jobtitles);
      //  console.log(salerys);
        
      //   let jobdetail={
      //  jobtitle: jobtitles,
      //   salery:salerys,
          
      //   }
      //   console.log(jobdetail)
        
      //   setJobinfo([...jobinfo,jobdetail])
      //   console.log(setJobinfo)
       
    }
    
   

  const coloumn=[

    {
      name:"job title",
       selector:(row)=>row.jobtitle
      

    },
    {
      name:"Salery",
      selector:(row)=>row.salery

    },
    {
     name:"Update",
     cell: (row)=>(
         <button className="btn btn-primary" onClick={()=>editjob(row.jobtitle,row.salery)}>edit</button>

     )   
    },
    {
        name:"Delete",
        cell: (row)=>(
            <button className="btn btn-primary" onClick={()=>deletejob(row.jobtitle)} >delete</button>
   
        )   
       }
  ]
 
 return(
 <>
 <div className="addfiled">
    <label style={{
       padding:5
     }}
    
    >job title</label>
    <input  type="text" name="name" value={jobtitles} placeholder='enter job title' onChange={e => setjobtitles(e.target.value)}
    style={{
       padding:5
     }}
    
    />
    <input type="text" name="name"value={salerys} placeholder='Enter salery'onChange={e => setsalerys(e.target.value)}
    style={{
        padding:5
      }}
    />
    <button className="btn btn-primary" on onClick={handleupclick} >Add</button>
 </div>
 <DataTable columns={coloumn} data={jobinfo}
 pagination
 
 fixedHeader
 fixedHeaderScrollHeight='400px'
 selectableRows
 selectableRowsHighlight
 highlightOnHover

 subHeader

 
 />
 </>
 )
}
export default JobData


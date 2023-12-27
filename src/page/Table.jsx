import React ,{useEffect, useState} from 'react';

import { allsurveys } from '../api';

const Table = ({setIsLogin}) => {
    const [data,setData]=useState([]);
        useEffect(()=>{
           const  callApi = async ()=>{
                try{
                    const tableData= await allsurveys();
                    if(tableData){
                        setData(tableData.data.surveyData);
                        console.log(tableData)
                    }
                }catch(err){
                    console.log('somthing went wrong in api call')
                }
            }
            callApi();
        },[])
  return (
    <div>
    <div className="table-container">
  <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
    <thead className="">
      <tr>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Gender</th>
        <th className="py-2 px-4 border-b">Email</th>
        <th className="py-2 px-4 border-b">Nationality</th>
        <th className="py-2 px-4 border-b">Phone Number</th>
        <th className="py-2 px-4 border-b">Address</th>
        <th className="py-2 px-4 border-b">Message</th>
        <th className="py-2 px-4 border-b">Date</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i) => (
        <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
          <td className="py-2 px-4 border-b">{item.name}</td>
          <td className="py-2 px-4 border-b">{item.gender}</td>
          <td className="py-2 px-4 border-b">{item.email}</td>
          <td className="py-2 px-4 border-b">{item.nationality}</td>
          <td className="py-2 px-4 border-b">{item.phoneNumber}</td>
          <td className="py-2 px-4 border-b">{item.address}</td>
          <td className="py-2 px-4 border-b">{item.message}</td>
          <td className="py-2 px-4 border-b">{new Date(item.date).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
 
</div>

<button className="buttons  bg-red-800   p-4 m-6 rounded-md" onClick={() => setIsLogin(false)}>
    Survey-Page
  </button>
  </div>
  );
};

export default Table;

import React, { useState } from 'react';

import {form} from '../api/index';

const SurveyForm = ({setResponse,setIsLogin}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const clear=()=>{
    setName('');
    setGender('');
    setNationality('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setMessage('');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      gender,
      nationality,
      email,
      phoneNumber,
      address,
      message,
    };
   
    try{
       const res= await form(formData);
        if(res.data.status === 'success'){
          console.log(res.data.status)
          setResponse(true);
          clear();
        }else if(res.data.status ==='already exists'){
          console.log(res.data.status)
          alert('email ALREADY EXISTS PLEASE TRY AGAIN WITH NEW EMAIL');
          setEmail('');
        }else{
          alert('somthing went wrong please try again');
          clear();
        }
    }catch(err){
      console.log("Error in handleSubmit",err);
    }
  };

  return (
    
<div
  className="flex items-center justify-center h-screen bg-cover"
  style={{
    backgroundImage: 'url("https://images.pexels.com/photos/593322/pexels-photo-593322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  }}
>
  <div className="survey-form-container bg-slate-700 text-green-500 opacity-80 p-8 rounded-md shadow-md">
    <h1 className="text-2xl font-bold mb-6">Survey Form</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <div className="form-row">
        <label htmlFor="selects" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          id="selects"
          className="mt-1 block w-full border p-2 rounded-md text-green-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <input
        type="text"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        placeholder="Nationality"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <input
        type="number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
        className="w-full border p-2 rounded-md text-green-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md transition-transform hover:scale-110"
      >
        Submit
      </button>
    </form>
    <button
      className="bg-red-500 text-white p-2 rounded-md mt-4 transition-transform hover:scale-110"
      onClick={() => setIsLogin(true)}
    >
      All Surveys
    </button>
  </div>
</div>


  );
};

export default SurveyForm;

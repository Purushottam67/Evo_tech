 import axios from 'axios';

 const API=axios.create({ baseURL:'https://kjbjk.onrender.com' });


 export const form=(data)=>API.post('/',data);
 export const logins=(data)=>API.get('/login',data);
 export const allsurveys=()=>API.get('/allsurveys');



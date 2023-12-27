
import './App.css';
import { useState } from 'react';


import Pagecontroller from './page/pagecontroller';
import SurveyControllerPage from './page/SurveyPageController';


function App() {
  const [isLogin,setIsLogin]=useState(false)
  return (
    <div className="bg-slate-600">

    {isLogin?<Pagecontroller setIsLogin={setIsLogin}/>:<SurveyControllerPage setIsLogin={setIsLogin}/>}
  </div>
  );
}

export default App;

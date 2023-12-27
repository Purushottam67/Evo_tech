import React from 'react';
 // Import your CSS file

const ResponsePage = ({setResponse}) => {
  return (
    <div className="response-container bg-green-100 p-8 rounded-md shadow-md text-center">
    <div className="response-header">
      <h1 className="text-4xl font-bold mb-4 animate__animated animate__bounceIn">Thank You!</h1>
      <p className="text-gray-600">Your response has been recorded.</p>
    </div>
    <h3
      className="text-blue-500 cursor-pointer underline hover:text-blue-700"
      onClick={() => setResponse(false)}
    >
      Survey Again
    </h3>
  </div>
  
  );
};

export default ResponsePage;

import React from 'react';
import { GiAutoRepair } from "react-icons/gi";
import { Link } from 'react-router-dom';
const MyComingSoonPage = () => {
  return (<>
<body className="bg-gray-100">
  <div className="min-h-screen flex flex-col justify-center items-center" >
  <Link to={'/Luxcraftadmin'}><GiAutoRepair  className="w-40 h-40 text-yellow-500 "/></Link>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">Site is under maintenance</h1>
    <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
    
  </div>
</body>
  
  </>
  
  );
};

export default MyComingSoonPage;
import React from 'react';
import { useState, useContext } from 'react';
import myContext from '../../context/data/myContext';
import image1 from '../../assets/bgimage.jpg'
export default function Sortprotuctcard() {

  const context = useContext(myContext);
  const { mode, product } = context;
  const handmadePaintings = product.filter((item) => item.productType === 'Handmade Painting');
  const firstHandmadePainting = handmadePaintings.length > 0 ? handmadePaintings[0] : null;
  const secondHandmadePainting = handmadePaintings.length > 1 ? handmadePaintings[1] : null;
  const thirdHandmadePainting = handmadePaintings.length > 2 ? handmadePaintings[2] : null;
  const fourthHandmadePainting = handmadePaintings.length > 3 ? handmadePaintings[3] : null;
  const fifthHandmadePainting = handmadePaintings.length > 4 ? handmadePaintings[4] : null;
  const sixthHandmadePainting = handmadePaintings.length > 5 ? handmadePaintings[5] : null;

  const handlechangehandmade = () => {
  };

  return (
    <div className="w-[100%] 	" >
        <img src={image1} alt='bgimage' style={{ width:'100%', objectFit: 'cover', position: 'absolute', zIndex: -1, backgroundColor:'rgb(136, 171, 142,)' }}/>

      
      <div className=" w-full pl-20 pt-5">
            <h1 className="sm:text-3xl text-2xl capitalize font-medium title-font mb-2 text-blue-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shop Handmade Paintings</h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
      <div className='flex justify-center items-center m-10 '>
      <div className="relative gap-4 flex bg-[#88AB8E] p-10 shadow-2xl shadow-stone-300">

       <div className='flex flex-col space-y-4 '>
        <div className='flex gap-4 '>
            <div >
            {firstHandmadePainting && (
          <img
            key={firstHandmadePainting.id}
            className='w-48 h-52'       
            alt={firstHandmadePainting.productType}
            src={firstHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
            </div>
            <div >
         {secondHandmadePainting && (
          <img
            key={secondHandmadePainting.id}
            className='w-48 h-52'         
               alt={secondHandmadePainting.productType}
            src={secondHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        </div>
       
       
        </div>
       <div className=''>  
        
       {sixthHandmadePainting && (
          <img
            key={sixthHandmadePainting.id}
            className="w-[25rem] h-80 "           
             alt={sixthHandmadePainting.productType}
            src={sixthHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
       </div>

       </div>

       <div className='flex flex-col space-y-4'>
       <div className='w-full'>  
        
        {fifthHandmadePainting && (
           <img
             key={fifthHandmadePainting.id}
             className="w-[25rem] h-80  "            
              alt={fifthHandmadePainting.productType}
             src={fifthHandmadePainting.imageUrl}
             onClick={handlechangehandmade}
           />
         )}
        </div>
        <div className='flex space-x-5 '>
            <div >
            {thirdHandmadePainting && (
          <img
            key={thirdHandmadePainting.id}
            className='w-48 h-52'       
            alt={thirdHandmadePainting.productType}
            src={thirdHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
            </div>
            <div >
         {fourthHandmadePainting && (
          <img
            key={fourthHandmadePainting.id}
            className='w-48 h-52'         
               alt={fourthHandmadePainting.productType}
            src={fourthHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        </div>
       
       
        </div>
       

       </div>
      
      </div>
      </div>
      
    </div>
  );
}

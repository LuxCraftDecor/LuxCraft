import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram   } from "react-icons/fa6";
import { FaFacebook,FaPinterest   } from "react-icons/fa";


function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
<footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
  <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <h1 className='text-black text-2xl' >LuxCraft Decor</h1>

        
        <div className='flex flex-col mt-2'>

        <a className="text-sm  text-purple-blue-500"  href= "mailto: hello@loopple.com">Email: hello@loopple.com</a>
        <a className="text-sm  text-purple-blue-500" href="tel:+516-486-5135"> Tel: +516-486-5135</a>
        <a className="text-sm  text-purple-blue-500" target="_blank" href ="https://goo.gl/maps/QcWzYETAh4FS3KTD7">10924 Urna Convallis</a>


          </div>   
           
        <div className="flex mt-5 space-x-6 text-gray-600">
          <a className="hover:opacity-75"  target="_blank" href='https://www.facebook.com/profile.php?id=61554174676013'>
            <span className="sr-only"> Facebook </span>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 266.893 266.895" id="facebook"><path fill="#485a96" d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"></path><path fill="#fff" d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"></path></svg>
          </a>
          <a className="hover:opacity-75"  target="_blank" href='https://www.instagram.com/luxcraft.decor/'>
            <span className="sr-only"> Instagram </span>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path></svg>          </a>
          <a className="hover:opacity-75"  target="_blank" href='https://twitter.com/luxCraftDecor'>
            <span className="sr-only"> Twitter </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="black" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </a>
        
          <a className="hover:opacity-75"  target="_blank" href='https://in.pinterest.com/luxcraftdecor01/'>
            <span className="sr-only"> Pintrest </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="red" viewBox="0 0 496 512">
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium">
            Company
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" > About </a>
            <a className="hover:opacity-75" > Meet the Team </a>
            <a className="hover:opacity-75" > History </a>
            <a className="hover:opacity-75" > Careers </a>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Services
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" > 1on1 Coaching </a>
            <a className="hover:opacity-75" > Company Review </a>
            <a className="hover:opacity-75" > Accounts Review </a>
            <a className="hover:opacity-75" > HR Consulting </a>
            <a className="hover:opacity-75" > SEO Optimisation </a>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Helpful Links
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" > Contact </a>
            <a className="hover:opacity-75" > FAQs </a>
            <a className="hover:opacity-75" > Live Chat </a>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Legal
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" > Privacy Policy </a>
            <a className="hover:opacity-75" > Terms &amp; Conditions </a>
            <a className="hover:opacity-75" > Returns Policy </a>
            <a className="hover:opacity-75" > Accessibility </a>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-gray-800">
      © 2024 LuxCraft Decor
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer
import React from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css';
import UserSidebar from '../../components/Profile/UserSidebar';
import AccountSettings from '../../components/Profile/AccountSettings';
import ChangePassword from '../../components/Profile/ChangePassword';
import LegalNotice from '../../components/Profile/LegalNotice';
import UserAddress from '../../components/Profile/UserAddress';
import YourOrders from '../../components/Profile/YourOrders';




export default function Myprofile() {
  const {activepage} = useParams()
  const user = JSON.parse(localStorage.getItem('user'));


    return (
      <div className='userprofile'>

<div className="bg-gray-200 flex  p-10 ">
     <div className=''>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{user.user.email}</h2>
     
     </div>
    </div>
          {/* <Navbar/> */}
          {/* <SingleBanner 
          heading={`My Profile`}
          bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
          /> */}
          {/* UserProfile , showing {activepage}
           */}
  
           <div className='userprofilein'>
              <div className='left'>
                <UserSidebar activepage={activepage} />
              </div>
              <div className='right '>
                {activepage === 'accountsettings' && <AccountSettings/>}
                {activepage === 'changepassword' && <ChangePassword/>}
                {activepage === 'yourorders' && <YourOrders/>}
                {activepage === 'address' && <UserAddress/>}
                {activepage === 'legalnotice' && <LegalNotice/>}
              </div>
           </div>
          {/* <Footer1/>
          <Footer2/> */}
















          </div>
    )
}

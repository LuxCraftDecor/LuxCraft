import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';
import logo from '../../assets/Luxcraft logo_line.png';
import { IoPerson } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import Menubar from '../../pages/menu/Navbar';

function Navbar() {
  const context = useContext(myContext);
  const {mode, searchkey, setSearchkey, toggleMode, cartProductsFromFirestore} = context;
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const user = JSON.parse(localStorage.getItem('user'));
  // const { mode,  filterType, setFilterType,
  //   filterPrice, setFilterPrice, product } = context

  // console.log(user.user.email)

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    localStorage.clear('user');
    navigate('/login')
  }

  // sticky top-0 z-50
  return (
    <div className='bg-white  '>  
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-base font-medium text-black " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-black">
                      Order
                    </Link>
                  </div> : ""}
                  {user ? <div className="flow-root">
                    <Link to={'/myProfile/accountsettings'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-black">
                      Profile
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "admin@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-black cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-black cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 text-2xl font-medium text-black cursor-pointer">
                    <IoPerson />
                    </Link>
                  </div>

                  <button className="block font-medium  text-sm text-black" onClick={toggleMode}  style={{ color: mode === 'dark' ? 'white' : '', }}>
                    {mode === 'light' ? (
                      <div className='flex gap-3'>
                        <p>Light</p> 
                        <FiSun size={20} />
                      </div>
                    ) : (
                      <div className='flex gap-3'>
                        <p>Dark </p>
                        <BsFillCloudSunFill size={20} />
                      </div>
                    )}
            </button>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-decor-100 px-4  text-base font-medium text-black sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
        !Introductory offer for first 100 customers avail 30% flat discount. USE CODE: xxxxxx
        </p>

        <nav aria-label="Top" className="bg-decor-200 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex w-40">
                    <img src={logo} alt="" />
                    {/* <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>LuxCraft Decor</h1> */}
                  </div>
                </Link>

              


                <div className="relative hidden lg:flex items-center ml-20 mr-20 w-[300px] ">
                       
                        <input
                            type="text"
                            name="searchkey"
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            id="searchkey"
                            placeholder="Search "
                            className="px-10 py-1 w-full border-2 border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  outline-2 text-base"
                            style={{
                              backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '',
                              color: mode === 'dark' ? 'white' : '',

                            }}/>
                                     
                     <div className=" flex items-center m-[-42px] w-[40px] py-[11px] ">
                            <svg className="w-10 h-5 flex items-center fill-current text-black font-bold" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                            </svg>
                        </div>
              </div> 
              </div>

             


              <div className="ml-auto flex items-center">

           



                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {/* {user ?  
                 <Link to={'/order'} className="text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   
                  <Link to={'/signup'}  className="text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                    } */}

                  {user?.user?.email === 'admin@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {/* {user ?  
                 <a onClick={logout} className="text-base font-medium text-blackcursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""} */}
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-black">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-black">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div> */}

                {/* Cart */}






        <div className="flex items-center">
    
      <div className="hidden lg:ml-8 lg:flex">
        <a href="#" className="flex items-center text-black text-base" onClick={toggleDropdown}>
        <IoPerson className='text-2xl' />
          {/* <img className="inline-block w-10 h-10 rounded-full" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg" alt="Dan_Abromov" /> */}
         <div>
         {user ? 
         <Link>{user.name}</Link>:
          <Link to={'/login'} className="text-base font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}> Login</Link>
          }
         </div>
          {/* <span className="ml-2" style={{ color: mode === 'dark' ? 'white' : '' }}  >{dropdownOpen ? '▲' : '▼'}</span> */}
        </a>
        {/* Dropdown content */}
        {dropdownOpen && (
          <div className="absolute left-[80%] z-10 w-[250px] p-5 mt-10 bg-white rounded-md shadow-lg"  style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>

            <div>
            <Link to={'/myProfile/accountsettings'} className="text-sm font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Profile
                  </Link>
            </div>
           <a href="#" className="flex gap-3 items-center text-gray-700">
          
          <span className=" block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '' }}>
            INDIA
          </span>

          <img
            src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
            alt=""
            className="  block h-auto w-5 flex-shrink-0"
          />
        </a>

        <div>
        {user ?  
                 <Link to={'/order'} className="text-sm font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    My Order
                  </Link> :   
                  <Link to={'/signup'}  className="text-sm font-medium text-black" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                    }
        </div>


           <div>
           {user ?  
            <a onClick={logout} className="text-sm font-medium text-black cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
            </a> : ""}
           </div>


            <button className="block font-medium  text-sm text-black" onClick={toggleMode}  style={{ color: mode === 'dark' ? 'white' : '', }}>
                    {mode === 'light' ? (
                      <div className='flex gap-3'>
                        <p>Light</p> 
                        <FiSun size={20} />
                      </div>
                    ) : (
                      <div className='flex gap-3'>
                        <p>Dark </p>
                        <BsFillCloudSunFill size={20} />
                      </div>
                    )}
            </button>

          </div>
        )}
      </div>
      {/* {user ? (
        <a onClick={logout} className="text-base font-medium text-blackcursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>
          Logout
        </a>
      ) : (
        ''
      )} */}
    </div>





                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 text-yellow-500 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <TiShoppingCart className='w-10 h-8'/>

                    <span className="ml-2 text-base font-medium text-blue-500 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{totalItemsInCart}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Menubar/>
    </div>
  )
}

export default Navbar
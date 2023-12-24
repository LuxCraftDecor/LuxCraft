import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
  const context = useContext(myContext)
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const { mode, cartProductsFromFirestore,deleteCartItemFromFirestore, handleCounterChange } = context;
const navigate = useNavigate()

  const [totalAmout, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartProductsFromFirestore.forEach((cartItem) => {

      temp = temp + parseInt(cartItem.price) * cartItem.quantity;
    })
    setTotalAmount(temp);
  }, [cartProductsFromFirestore])


var shipping;
  var shipping;
if(totalAmout>0){
  shipping = parseInt(100);
}
else{
  shipping = parseInt(0);
}

 
  const grandTotal = shipping + totalAmout;
  const buyNow =  () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userUid = storedUser?.user?.uid;
  if(userUid){
    navigate('/payment')
  }else{
    navigate('/login')
  }
  }




  const makePayment = async () => {
    const stripe = await loadStripe("pk_live_51OODqzHkxAlkXE3gOt575gtaeUnVvt11YokOJe8TNpohtVDAd1MPtjqa2qJ0rA0BJkm8ZB4JZ5vADY83lsocwGsk0065hMlGil");

    const body = {
        products: cartProductsFromFirestore.map(product => ({
            title: product.title,
            price: product.price,
            quantity: product.quantity
        }))
    };

    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch("http://localhost:7000/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const session = await response.json();

        console.log("Session ID:", session.id);
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    } catch (error) {
        console.error('Error making payment:', error);
    }
};

  return (
    <Layout >

{/* <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div> */}


    <div className="h-screen bg-gray-100 pt-5 mb-[60%] " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartProductsFromFirestore.map((item, index) => {
              const { title, price, description, imageUrl, quantity } = item;
              return (
                <div className="justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="line-clamp-1 text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                    <h2 className="line-clamp-1 text-sm text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h2>
                    <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                  </div>
                 
                    <div className="bg-gray-200 h-10 py-2 lg:px-2 rounded-lg">
                    <button className="px-4 text-sm text-black" onClick={() => handleCounterChange(item.id, 'decrease')}>
                      -
                    </button>
                    <span className="mx-2 text-sm text-black">{item.quantity}</span>
                    <button className="text-sm text-black px-4" onClick={() => handleCounterChange(item.id, 'increase')}>
                      +
                    </button>


                    </div>
                 
                  <div onClick={() => {
                dispatch(deleteFromCart(item.id)); // Dispatch the action when deleting
                deleteCartItemFromFirestore(item.id); // This line might not be needed if it only deletes from Firestore
              }} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                </div>
              </div>
              )
            })}

          </div>
          {cartProductsFromFirestore.length > 0 && (
          <div className='flex flex-col md:w-1/3'>
          <div className=' h-32 w-full border border-1 border-gray-200 bg-white py-3 mb-3 px-8'  >
        <div className='flex justify-between'>
             <span className='text-gray-400'>Shipping Address</span>
            <span className=' bg-gray-100 px-4 py-1 rounded-md cursor-pointer' >Change</span>
         </div>
        </div>
        

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>${totalAmout}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>${shipping}</p>
            </div> 
          <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>${grandTotal}</p>
              </div>
            </div>
          <button className="items-center h-10 w-full bg-orange-400" onClick={makePayment}>
            Buy Now
          </button>
            
          </div>

          
          </div>
             )}

        
        </div>
      </div>  
    </Layout>
  )
}

export default Cart
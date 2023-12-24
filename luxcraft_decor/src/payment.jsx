
// import React, { useState } from 'react';

// export default function Payment() {
//   const [formData, setFormData] = useState({
//     name: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., send data to a server)
//     console.log('Form submitted:', formData);
//   }; 
//   const handleAddressChange = ()=>{

//   }

//   return (
//     <div className="max-w-md mx-auto space-y-2 mt-8 p-6 bg-white rounded-md shadow-md">
//         <div className=' h-32 w-full border border-1 border-gray-200 py-3 px-8'  >
//         <div className='flex justify-between'>
//             <span className='text-gray-400'>Shipping Address</span>
//             <span className=' bg-gray-100 px-4 py-1 rounded-md cursor-pointer' on onClick={handleAddressChange}>Change</span>
//         </div>

//         </div>




        
//      <div className=' p-7 w-full border border-1 border-gray-200'>
//      <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//             Name on Card
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               id="expiryDate"
//               name="expiryDate"
//               value={formData.expiryDate}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//               placeholder="MM/YY"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
//               CVV
//             </label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//         >
//           Submit Payment
//         </button>
//       </form>
//      </div>
//     </div>
//   );
// };

// src/PaymentForm.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm';
import stripePromise from './stripContext';

const Payment= () => {


  return (
    <div>
    <h1>Stripe Client-Only App</h1>
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  </div>

  );
};

export default Payment;


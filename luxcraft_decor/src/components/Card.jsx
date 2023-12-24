import { BsFillBagFill } from "react-icons/bs";
import myContext from '../context/data/myContext'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const context = useContext(myContext);
 const navigate =useNavigate();
  const {  product} = context;


  const handleproductClick = (productId) => {
     navigate(`/productinfo/${productId}`);
  };
  return (
    <>

{product.map((item, index) => {
  const { title, price, artistname, imageUrl,id } = item;
 


  return(
   <>
   <section key={index} onClick={() => handleproductClick(id)} className="m-5 w-[20%] border-2 border-gray-300 p-5 cursor-pointer">

   <img   className="rounded-2xl w-full h-40 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="blog" />
    <div className="card-details">
      <h3 className="mb-4 line-clamp-1">{title}</h3>
      <section className="mb-4 flex">
        {artistname}
        {/* <span className="ml-2.5 text-base	">{reviews}</span> */}
      </section>
      <section className="flex justify-between items-center ">
        <div className="price">
       $ {price}
          {/* <del>{prevPrice}</del>  */}
        </div>
        
      </section>
    </div>
    </section>

   
   </>
  )
})}
       
    </>
  );
};

export default Card;











// import React, { useContext, useEffect } from 'react'
// import Filter from '../../components/filter/Filter'
// import ProductCard from '../../components/productCard/ProductCard'
// import Layout from '../../components/layout/Layout'
// import myContext from '../../context/data/myContext'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../../redux/cartSlice'
// import { Link } from 'react-router-dom';
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { fireDB } from '../../fireabase/FirebaseConfig';
// import image1 from '../../assets/peaclok feather.png'

// function Allproducts() {
//   const context = useContext(myContext)
//   const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
//       filterPrice,setFilterPrice} = context

//   const dispatch = useDispatch()
//   const cartItems = useSelector((state)=> state.cart);

//   const addCart = async (product) => {
//     dispatch(addToCart(product));

//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     // Check if the user is logged in and user details are present
//     if (storedUser && storedUser.user && storedUser.user.uid) {
//         const userUid = storedUser.user.uid;

//         // Get the reference to the user's cart in Firestore
//         const userCartRef = doc(fireDB, "carts", userUid);

//         // Get the existing cart data
//         const userCartDoc = await getDoc(userCartRef);
//         const existingCart = userCartDoc.exists() ? userCartDoc.data().cartItems : [];

//         // Add the new product to the cart
//         const updatedCart = [...existingCart, product];

//         // Update the cart in Firestore
//         await setDoc(userCartRef, { cartItems: updatedCart });

//         // Notify the user
//         toast.success('Added to cart and updated in Firebase database');
//     } else {
//         const localCart = JSON.parse(localStorage.getItem('localCart')) || [];
//         const updatedLocalCart = [...localCart, product];
        
//         // Store the cart in local storage
//         localStorage.setItem('localCart', JSON.stringify(updatedLocalCart));
        
//         // Notify the user
//        }
// };

// //   useEffect(() => {
// //       localStorage.setItem('cart', JSON.stringify(cartItems));
// //   }, [cartItems])
// //   useEffect(() => {
// //     window.scrollTo(0, 0)
// //   }, [])



//   const isItemInCart = (productId) => {
//     return cartItems.some(item => item.id === productId);
// };
// const handleproductClick = (productId) => {
//     navigate(`/productinfo/${productId}`);
// };

//   return (
//     <Layout>
//       {/* <Filter/> */}
//       <section className="text-gray-600 body-font bg-blue-100">
//             <div className="container px-5 py-8 md:py-16 mx-auto">
//                 <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
//                     <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
//                     <div class="h-1 w-20 bg-pink-600 rounded"></div>
//                 </div>

//                 <div className="flex flex-wrap m-4">
//                     {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
//                      .filter((obj) => obj.category.toLowerCase().includes(filterType))
//                      .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
//                         const { title, price, description, imageUrl,id } = item;
//                         const isInCart = isItemInCart(id);

//                         return (
//                             <div key={index}  className="p-4 md:w-1/5  drop-shadow-lg " >
//                                 <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-gray-200    border-gray-400 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
//                                 <div onClick={() => handleproductClick(id)} className="flex justify-center cursor-pointer">
//                                     <img className="rounded-2xl w-full h-40 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out " src={imageUrl} alt="blog" />
//                                 </div>
//                                     <div className="p-5 border-t-2">
//                                         <img src={image1} className='h-16 mt-[-70px] z-100' />
//                                         {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>luxCraft Decor</h2> */}
//                                         <h1 className=" line-clamp-1 title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
//                                         {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
//                                         <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
//                                         <div className="flex justify-center">
//                                         {isInCart ? (
//                                             <Link to="/cart"  className="focus:outline-none flex justify-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[75%] py-2"
//                                             >
//                                                 <button
//                                                 type='button'
//                                                 >Go to Cart</button>
//                                             </Link>
//                                         ) : (
//                                             <button
//                                                 type="button"
//                                                 onClick={() => addCart(item)}
//                                                 className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[75%] py-2"
//                                             >
//                                                 Add To Cart
//                                             </button>
//                                         )}

//                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                     <svg
//                                         fill="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         className="w-5 h-5"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//                                     </svg>
//                                 </button>
       

//                                      </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         )
//                     })}




//                 </div>

//             </div>
//         </section >
//     </Layout>
//   )
// }

// export default Allproducts

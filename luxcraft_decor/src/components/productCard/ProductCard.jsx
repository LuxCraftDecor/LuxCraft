import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { fireDB } from '../../fireabase/FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


function ProductCard() {
    const context = useContext(myContext);
    const navigate = useNavigate();
    const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice,setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);
    // console.log(cartItems)

    const addCart = async (product) => {
        await dispatch(addToCart(product));
    
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        // Check if the user is logged in and user details are present
        if (storedUser && storedUser.user && storedUser.user.uid) {
            const userUid = storedUser.user.uid;
    
            // Get the reference to the user's cart in Firestore
            const userCartRef = doc(fireDB, "carts", userUid);
    
            // Get the existing cart data
            const userCartDoc = await getDoc(userCartRef);
            const existingCart = userCartDoc.exists() ? userCartDoc.data().cartItems : [];
    
            // Add the new product to the cart
            const updatedCart = [...existingCart, product];
    
            // Update the cart in Firestore
            await setDoc(userCartRef, { cartItems: updatedCart });
    
            // Notify the user
            toast.success('Added to cart and updated in Firebase database');
        } else {
            const localCart = JSON.parse(localStorage.getItem('localCart')) || [];
            const updatedLocalCart = [...localCart, product];
            
            // Store the cart in local storage
            localStorage.setItem('localCart', JSON.stringify(updatedLocalCart));
            
            // Notify the user
           }
    };
    
    

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cartItems));
    // }, [cartItems])

 

    const isItemInCart = (productId) => {
        // return cartItems.some(item => item.id === productId);
    };

    const handleproductClick = (productId) => {
        navigate(`/productinfo/${productId}`);
    };

    const [isInWishlist, setIsInWishlist] = useState(false);
    const [wishlistStatus, setWishlistStatus] = useState({});


  const addWishlist = async (product) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.user && storedUser.user.uid) {
      const userUid = storedUser.user.uid;
      const userWishlistRef = doc(fireDB, 'wishlists', userUid);

      try {
        const userWishlistDoc = await getDoc(userWishlistRef);
        const existingWishlist = userWishlistDoc.exists() ? userWishlistDoc.data().wishlistItems : [];

        const updatedWishlist = [...existingWishlist, product];

        // Update the wishlist in Firestore
        await setDoc(userWishlistRef, { wishlistItems: updatedWishlist });
        setIsInWishlist(true);

        toast.success('Added to wishlist and updated in Firebase database');
      } catch (error) {
        console.error('Error updating wishlist in Firestore:', error);
        toast.error('Failed to update wishlist');
      }
    } else {
      const localWishlist = JSON.parse(localStorage.getItem('localWishlist')) || [];
      const updatedLocalWishlist = [...localWishlist, product];

      localStorage.setItem('localWishlist', JSON.stringify(updatedLocalWishlist));

      toast.success('Added to local wishlist');
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.user && storedUser.user.uid) {
      const userUid = storedUser.user.uid;
      const userWishlistRef = doc(fireDB, 'wishlists', userUid);

      const checkWishlist = async () => {
        const userWishlistDoc = await getDoc(userWishlistRef);
        const existingWishlist = userWishlistDoc.exists() ? userWishlistDoc.data().wishlistItems : [];

        // Create a map to track wishlist status for each product
        const wishlistStatusMap = existingWishlist.reduce((acc, wishlistItem) => {
          acc[wishlistItem.id] = true;
          return acc;
        }, {});

        setWishlistStatus(wishlistStatusMap);
      };

      checkWishlist();
    }
  }, [product]);
    



const backgroundImage = "https://www.hdwallpapers.in/download/brick_wall_white_texture_background_vintage_hd_brick-1920x1080.jpg";



    return (
        <section className="bg-white text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                <div style={{ position: 'relative' }}>
           {/* <img src={backgroundImage} alt='bgimage' style={{ width: '100%', height:'450px', objectFit: 'cover', position: 'absolute', zIndex: -1 }}/> */}

                <div className="flex flex-wrap m-4 ">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).slice(0,8).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        const isInCart = isItemInCart(id);
                        const isInWishlist = wishlistStatus[id] || false; // Check if the product is in the wishlist

                        return (
                            <div key={index} className="p-1 md:w-1/5  " >
                                <div  className="h-full bg-white hover:border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-xl   hover:border-gray-900 hover:border-opacity-60  overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <div onClick={() => handleproductClick(id)} className="flex justify-center cursor-pointer">
                                    <img className="rounded-2xl w-full h-60 p-2 hover:scale-105 transition-scale-110 duration-500 ease-in-out" src={imageUrl} alt="blog" />
                                </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>LuxCraft Decor</h2>
                                        <h1 className=" line-clamp-1 title-font text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className=" line-clamp-1 title-font text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>{description}</p>

                                        <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>${price}</p>

                                        {/* <div className="flex justify-center">
                                        {isInCart ? (
                                            <Link to="/cart"  className="focus:outline-none flex justify-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[75%] py-2"
                                            >
                                                <button
                                                type='button'
                                                >Go to Cart</button>
                                            </Link>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => addCart(item)}
                                                className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[75%] py-2"
                                            >
                                                Add  Cart
                                            </button>
                                        )}

                                
                                        <button
                                           className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"                                           
                                            onClick={() => addWishlist(item)}
                                            >
                                                <FaHeart 
                                                   className= {`w-5 h-5 ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`}

                                                />
                                           
                                            </button>

       

                                     </div> */}
                                    </div>

                                </div>
                            </div>
                        )
                    })}




                </div>
                </div>

            </div>
        </section >

    )
}

export default ProductCard
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc,setDoc, addDoc, collection,serverTimestamp,updateDoc ,increment, Timestamp} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { FaFacebookF,FaPinterest,FaShare   } from "react-icons/fa";
import { FaInstagram,  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsLightningChargeFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import imageu from '../../assets/Buddhist Culture_product.png';
import { addToCart } from '../../redux/cartSlice';



function ProductInfo() {
    const context = useContext(myContext);
    const dispatch = useDispatch();

    const {product, handleAddToCart, loading, setLoading, addCart } = context;
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [products, setProducts] = useState('')
    const params = useParams()

    // const handleAddToCart = () => {
    //   // Assuming product is defined somewhere in your component
    //   const serializableTime = product.time ? product.time.toDate() : null;
    
    //   // Create a new object with the serializable time
    //   const serializableProduct = { ...product, time: serializableTime };
    
    //   // Dispatch the addToCart action with the serializable product
    //   dispatch(addToCart({ product: [serializableProduct], quantity: 1 }));
    // };
    

    
    
    

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const getRelatedProducts = () => {
      // Filter products based on the matching criteria
      const matchingProducts = product.filter((item) => {
          return (
              item.productType === products.productType &&
              item.category === products.category &&
              item.id !== params.id // Exclude the current product
          );
      });

      // Shuffle the array to get a random order
      const shuffledProducts = matchingProducts.sort(() => Math.random() - 0.5);

      // Select the first four products
      const selectedProducts = shuffledProducts.slice(0, 4);

      setRelatedProducts(selectedProducts);
  };


    useEffect(() => {
        getProductData()

    }, [])

    useEffect(() => {
      if (products) {
          getRelatedProducts();
      }
  }, [products, product]);


    const [count, setCount] = useState(0);

    const handleCounterChange = (operation) => {
      if (operation === 'decrease' && count > 0) {
        setCount(count - 1);
      } else if (operation === 'increase') {
        setCount(count + 1);
      }
    }

    const [review, setReview] = useState({
        rating: 0,
        comment: '',
      });
    
      const handleRatingChange = (newRating) => {
        setReview({ ...review, rating: newRating });
      };
    
      const handleCommentChange = (event) => {
        setReview({ ...review, comment: event.target.value });
      };
    
      const handleSubmitReview = async () => {
        const userEmail = JSON.parse(localStorage.getItem('user'));
      
        try {
          if (!userEmail || !userEmail.user || !userEmail.user.email) {
            toast.error('Please log in to submit a review.');
            return;
          }
      
          const productId = params.id;
      
          if (!productId || typeof productId !== 'string' || productId.trim() === '') {
            toast.error('Invalid product ID for review.');
            return;
          }
      
        
          const reviewsCollectionRef = collection(fireDB, 'products', productId, 'reviews');
          const docRef = doc(reviewsCollectionRef, userEmail.user.email);
          
          await setDoc(docRef, {
            rating: review.rating,
            comment: review.comment,
            userEmail: userEmail,
            timestamp: serverTimestamp(),
          });
          
        
          const productRef = doc(fireDB, 'products', productId);
          const productSnapshot = await getDoc(productRef);
          const productData = productSnapshot.data();
      
          const newAverageRating =
            (productData.averageRating * productData.numReviews + review.rating) /
            (productData.numReviews + 1);
      
          await updateDoc(productRef, {
            averageRating: newAverageRating,
            numReviews: increment(1),
          });
      
          toast.success('Review submitted successfully!');
          setReview({ rating: 0, comment: '' });
        } catch (error) {
          console.error('Error submitting review:', error);
          toast.error('Failed to submit review. Please try again.');
        }
      };




  //   const handleAddToCart = async (product, quantity = 1) => {

  //      const serializableTime = product.time ? product.time.toDate() : null;
    
  //     // Create a new object with the serializable time
  //     const serializableProduct = { ...product, time: serializableTime };
    
  //     // Dispatch the addToCart action with the serializable product
  //     dispatch(addToCart({ product: [serializableProduct], quantity: 1 }));
  //     const storedUser = JSON.parse(localStorage.getItem('user'));
    
  //     // Check if the user is logged in and user details are present
  //     if (storedUser && storedUser.user && storedUser.user.uid) {
  //         const userUid = storedUser.user.uid;
  
  //         // Get the reference to the user's cart in Firestore
  //         const userCartRef = doc(fireDB, "carts", userUid);
  
  //         // Get the existing cart data
  //         const userCartDoc = await getDoc(userCartRef);
  //         const existingCart = userCartDoc.exists() ? userCartDoc.data().cartItems : [];
  
  //         // Check if the product is already in the cart
  //         const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
  
  //         if (existingProductIndex !== -1) {
  //             // If the product is already in the cart, update the quantity
  //             console.log('Before update:', existingCart);
  //             existingCart[existingProductIndex] = {
  //                 ...existingCart[existingProductIndex],
  //                 ...product,
  //                 quantity: existingCart[existingProductIndex].quantity + quantity
  //             };
  //             console.log('After update:', existingCart);
  //                         } else {
  //             // If the product is not in the cart, add it with the specified quantity
  //             existingCart.push({ ...product, quantity });
  //         }
  
  //         // Update the cart in Firestore
  //         await setDoc(userCartRef, { cartItems: existingCart });
  
  //         // Notify the user
  //         toast.success('Added to cart and updated in Firebase database');
  //     } else {
  //         const localCart = JSON.parse(localStorage.getItem('localCart')) || [];
  //         const existingProductIndex = localCart.findIndex(item => item.id === product.id);
  
  //         if (existingProductIndex !== -1) {
  //             // If the product is already in the local cart, update the quantity
  //             localCart[existingProductIndex].quantity += quantity;
  //         } else {
  //             // If the product is not in the local cart, add it with the specified quantity
  //             localCart.push({ ...product, quantity });
  //         }
  
  //         // Store the cart in local storage
  //         localStorage.setItem('localCart', JSON.stringify(localCart));
  
  //         // Notify the user
  //         toast.success('Added to local cart');
  //     }
  // };




    const image1 = products && products.subImages[0];
    const image2 = products && products.subImages[1];
    const image3 = products && products.subImages[2];
    const image4 = products && products.subImages[3];
    const image5 = [imageu]
    const photos = [image1, image2, image3, image4,image5].filter(url => url !== '');
    const imagesArray = [image1, image2, image3, image4, image5].filter(url => url !== '');

      
      const [preview, setPreview] = useState();
      useEffect(() => {
        setPreview(image5);
    }, [image5]);

      function HandleMouseOver(e){
          setPreview(e.target.src);
      }
      
      



      
  



    return (
        <Layout>
            <section className="text-gray-600 bg-white body-font overflow-hidden">
                <div className="container px-5 py-5  w-full">
                   
                    <div className="lg:w-full  flex flex-wrap">
                      <div className=" flex w-3/4 ">
                  <section className=" w-full flex flex-col">
                  <main className="relative flex justify-center items-center col-10">
                  <img
                      onContextMenu={(e) => e.preventDefault()}
                      className="preview-image h-[300px] w-[300px] lg:w-[90%] lg:h-[90%] transition-transform hover:scale-105 hover:shadow-2xl"
                      src={preview}
                  />
                  <button className="wishlist-button bg-white rounded-full absolute top-[7%] right-[7%] h-7 w-7 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                  <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                     </svg>                 
                      </button>
              </main>



                <nav className="  col-2 flex  jystify-center items-center mx-auto space-x-5">
                {imagesArray.map((photo, index) => (
        <div  key={index}>
          {photo && 
                <div className=" mb-2 p-1 border border-2 border-gray-600 w-12 lg:w-16" >

          <img src={photo} onMouseOver={HandleMouseOver} className="w-10 h-10 lg:w-14 lg:h-14" /> 
          </div>}
        </div>
      ))}
                </nav>
                 </section>
                        </div>


                        <div className='w-1/4 flex justify-start items-start left-0'>
                    {products && 
                        <div className="lg:w-full w-full  lg:py-6 mt-6 lg:mt-0">
                           
                            <h1 className="product capitalize text-blue-900 font-bold text-xl md:text-2xl sm:leading-none ">
                                {products.title}
                            </h1>
                            <h2 className="company capitalize text-gray-400  text-xs sm:text-xs tracking-wider ">
                                LuxCraft Decor
                               
                            </h2>



                            {/* <div className='flex flex-col mb-4 text-sm'>
                              <p>Artist: {products.artistname}</p>
                              <p>Type: {products.productType}</p>
                              <p>Orientation: {products.orientation}</p>
                              <p>Color: {products.color}</p>
                              <p>Material: {products.material}</p>
                              <p className='text-sky-950 text-lg pb-2 lg:py-7 lg:leading-6 w-96'>Description: <br/><span className='text-sky-950 text-base pb-2 lg:py-7 lg:leading-6 w-96'>
                                {products.description}</span></p>
                            </div> */}
                            <div className="flex justify-between items-center">

                            <span className="title-font font-bold text-2xl mt-3 text-blue-950">
                                ${products.price}
                                </span> 

                                 {/* <div className="bg-gray-200 lg:px-2 rounded-lg">
                              <button className=" px-4  text-sm text-black" onClick={() => handleCounterChange('decrease')}>
                                    -
                                </button>
                                <span className="mx-2 text-sm text-black">{count}</span>
                                <button className="text-sm text-black px-4 " onClick={() => handleCounterChange('increase')}>
                                    +
                                </button>
                              </div>     */}
                            </div>
                            <div className='mt-5'>
                              <h1 className='text-black'>Size:</h1>
                                
                            <div className='flex mt-2 space-x-4  text-[12px]'>
                              <span className='border border-gray-400 px-2 py-2'> 400cmX500cm</span>
                              <span className='border border-gray-400 px-2 py-2'> 400cmX500cm</span>
                              <span className='border border-gray-400 px-2 py-2'> 400cmX500cm</span>
                            </div>
                           
                          

                            </div>
  
                            

                            <div className="flex pt-14">
                            <button onClick={()=>handleAddToCart(products)} className="flex text-base text-white items-center justify-center text-center w-52  bg-orange-500 border-0  focus:outline-none hover:bg-orange-600 ">
                                  <TiShoppingCart className=' h-10'/>  <span className='pl-2'>Add To Cart</span>
                                </button>
                          

                           
                                <button  className="flex ml-2 text-base text-white items-center justify-center text-center w-52 py-2  bg-orange-500 border-0  focus:outline-none hover:bg-orange-600">
                                  <BsLightningChargeFill  className=' h-10'/>  <span className='pl-2'>Buy Now</span>
                                </button>
                               
                            </div>
                        </div>
                    }
                        </div>
                    </div>

                    <div  className='flex px-52  justify-center items-center mx-auto'>
                        
                    
                    <div className="mt-8  w-full ">
                     

                        <div className="mb-4">
                            <h3 className="text-md font-bold mb-2">Submit a Review</h3>
                            <StarRating rating={review.rating} onRatingChange={handleRatingChange} />
                           <div className='flex flex-col justify-center 	gap-10' >
                           <textarea
                            className="resize-none border rounded-md w-[20%] py-2 px-3 mt-2"
                            value={review.comment}
                            onChange={handleCommentChange}
                            placeholder="Write your review here..."
                            />
                            <button
                            className="bg-blue-500 text-white w-[10%] py-2 px-4 rounded-md mt-2"
                            onClick={handleSubmitReview}
                            >
                            Submit Review
                            </button>
                           </div>
                        </div>
                    </div>

                      <div>
                      <h2 className="text-lg font-bold mb-4">Reviews</h2>
                        {review.reviews && Array.isArray(review.reviews) ? (
                            review.reviews.map((reviewItem, index) => (
                            <div key={index} className="mb-4">
                                {/* Render review content here */}
                            </div>
                            ))
                        ) : (
                            <p>No reviews available</p>
                        )}
                      </div>
                      </div>

                </div>
            </section>
            <h3>Related Products</h3>
            <ul>
                {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id}>
                      <h1>{relatedProduct.title}</h1>
                      <img src={relatedProduct.imageUrl}/>
                    </div>
                    
                    // Display other related product details as needed
                ))}
            </ul>
        

        </Layout>
    )
}


export default ProductInfo


const StarRating = ({ rating, onRatingChange }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        onClick={() => onRatingChange(index + 1)}
        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
      >
        ★
      </span>
    ));
  
    return <div>{stars}</div>;
  };
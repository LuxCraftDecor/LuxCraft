import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { fireDB } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const context = useContext(myContext);
  const navigate = useNavigate();
  const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
      filterPrice,setFilterPrice} = context

  
  const [isInWishlist, setIsInWishlist] = useState(false);

  const addwishlist = async (product) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.user && storedUser.user.uid) {
        const userUid = storedUser.user.uid;
        const userwishlistRef = doc(fireDB, 'wishlists', userUid);

        try {
            const userwishlistDoc = await getDoc(userwishlistRef);
            const existingwishlist = userwishlistDoc.exists() ? userwishlistDoc.data().wishlistItems : [];

            const updatedwishlist = [...existingwishlist, product];
            
            // Update the wishlist in Firestore
            await setDoc(userwishlistRef, { wishlistItems: updatedwishlist });
            setIsInWishlist(true);

            toast.success('Added to wishlist and updated in Firebase database');
        } catch (error) {
            console.error('Error updating wishlist in Firestore:', error);
            toast.error('Failed to update wishlist');
        }
    } else {
        const localwishlist = JSON.parse(localStorage.getItem('localwishlist')) || [];
        const updatedLocalwishlist = [...localwishlist, product];

        localStorage.setItem('localwishlist', JSON.stringify(updatedLocalwishlist));

        toast.success('Added to local wishlist');
    }
};

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.user && storedUser.user.uid) {
    const userUid = storedUser.user.uid;
    const userwishlistRef = doc(fireDB, 'wishlists', userUid);

    // Check if the product is in the wishlist
    const checkWishlist = async () => {
      const userwishlistDoc = await getDoc(userwishlistRef);
      const existingwishlist = userwishlistDoc.exists() ? userwishlistDoc.data().wishlistItems : [];
      const isProductInWishlist = existingwishlist.some(item => item.id === product.id);
      setIsInWishlist(isProductInWishlist);
    };

    checkWishlist();
  }
}, [product]);


  return (
    <div>

<button
  className={`rounded-full w-10 h-10 ${isInWishlist ? 'bg-red-500' : 'bg-gray-200'} p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4`}
  onClick={() => addwishlist(item)}
>
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
</button>

    </div>
  )
}
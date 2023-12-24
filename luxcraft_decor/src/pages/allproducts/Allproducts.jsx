import { useState, useContext, useEffect } from "react";
import myContext from '../../context/data/myContext'
import { useNavigate, useParams,useLocation } from "react-router-dom";
import Recommended from "../../Recommended/Recommended";
import Sidebar from "../../Sidebar/Sidebar";
import "../../index.css";
import Navbar from "../../components/navbar/Navbar";
// ... (imports)

function Allproducts() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { slink } = useParams();
  console.log(slink);

  const context = useContext(myContext);

  const {
    product,
  
  } = context;

  useEffect(() => {
    if (slink) {
      // If slink is present, prioritize it for filtering
      setSelectedCategory(slink);
    }
  }, [slink]);
  
 // ----------- Radio Filtering -----------
 const handleChange = (event) => {
  setSelectedCategory(event.target.value);
};

// ------------ Button Filtering -----------
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
};

function filteredData(products, selected) {
  if (!selected) {
    return products; // Return all products if no category is selected
  }

  return products.filter(({ category, productType, orientation, color, price, title, description }) =>
    // Modify the conditions based on your actual data structure
    category === selected ||
    color === selected ||
    price === selected ||
    title === selected ||
    orientation === selected ||
    productType === selected ||
    description.toLowerCase().includes(selected.toLowerCase()) ||
    productType.toLowerCase().includes(selected.toLowerCase()) ||
    category.toLowerCase().includes(selected.toLowerCase())
  );
  
}

const filteredProducts = filteredData(product, selectedCategory);

const handleproductClick = (productId) => {
  navigate(`/productinfo/${productId}`);
};


  return (
    <>
      <Navbar />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
          <div className="flex flex-wrap ml-80 mt-8 z-[-2]">
      
          {filteredProducts.map((item, index) => {
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
    

      </div>
    </>
  );
}



export default Allproducts;

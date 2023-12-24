import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import MyComingSoonPage from './ComingSoon';
import Luxcraftlogin from './Luxcraftlogin';
import { AuthProvider, useAuth } from './AuthContext';
import ImageUpload from './components/Addimg';
import Myprofile from './pages/Profile/Myprofile';
import LimitedEdition from './components/productCard/LimitedEdition';
import Payment from './payment';

function App() {
  return (
    <AuthProvider>
    
      <Router>
      <MyState>
        <Routes>
          <Route path="/" element={< MyComingSoonPage/>}></Route>


          <Route path="/Luxcraftadmin" element={<Luxcraftlogin />}></Route>

          <Route path="/home"  element={<ProtectedLuxcraft element={<Home />}/>} />
        
          <Route path="/allproducts/:slink" element={<ProtectedLuxcraft  element={<Allproducts />}/>} />
          <Route path="/limited-edition" element={<ProtectedLuxcraft  element={<LimitedEdition />}/>} />



          <Route path="/order" 
          element={<ProtectedLuxcraft element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }/>}
          
         />


          <Route path="/cart"  element={<ProtectedLuxcraft element={<Cart />}/>}/>


          <Route path="/dashboard"  element={<ProtectedLuxcraft element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }/>}  />


          <Route path='/login'  element={<ProtectedLuxcraft element={<Login/>}/>}  />
          <Route path='/signup'  element={<ProtectedLuxcraft
          element={<Signup/>} 
          />} />
          <Route path='/myProfile/:activepage'  element={<ProtectedLuxcraft element={<Myprofile/>}/>} />

          <Route path='/productinfo/:id' element={<ProtectedLuxcraft  element={<ProductInfo/>}/>} />
          <Route path='/addimg'  element={<ProtectedLuxcraft element={<ImageUpload/>}/>}/>

          <Route path='/addproduct' element={<ProtectedLuxcraft  element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />} />
          <Route path='/updateproduct' element={<ProtectedLuxcraft  element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          }/>} />
          <Route path='/payment' element={<ProtectedLuxcraft element={<Payment/>}/>}></Route>
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
        </MyState>
      </Router>
   
    </AuthProvider>
  )
}

export default App 


export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'admin@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}



const ProtectedLuxcraft = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element :element ;
  
};
{/* <Navigate to={'/*'}/> */}
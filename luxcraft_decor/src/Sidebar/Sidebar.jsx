import Category, { Orientation } from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import './sidebar.css'
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="fixed pb-20   h-screen w-1/6 border-r-2  border-gray-300 flex flex-col items-center overflow-y-auto " id="style-4">
       
        <Category handleChange={handleChange} />
        {/* <Price handleChange={handleChange} /> */}
        <Orientation handleChange={handleChange}/>
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

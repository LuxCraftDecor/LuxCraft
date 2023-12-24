import "./Category.css";
import Input from "../../components/Input";

function Type({ handleChange }) {
  return (
    <div>
      <h2 className="text-2xl font-normal mb-5"> Type</h2>

      <div>
        <label className="sidebar-label-container ">
          <input onChange={handleChange} type="radio" value=""  name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Handmade Painting"
          title="Handmade"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Printed Painting"
          title="Printed"
          name="test"
        />
      </div>
    </div>
  );
}

export default Type;


export function Orientation({ handleChange }) {
  return (
    <div>
      <h2 className="text-2xl font-normal mb-5">Orientation</h2>

      <div>
      <label className="sidebar-label-container ">
          <input onChange={handleChange} type="radio" value=""  name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Horizontal"
          title="Horizontal"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Square"
          title="Square"
          name="test"
        />
         <Input
          handleChange={handleChange}
          value="Vertical"
          title="Vertical"
          name="test"
        />
      </div>
    </div>
  );
}
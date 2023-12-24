import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="">
        <h2 className="text-2xl font-normal mb-5 ">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value='price'
          title="$0 - 50"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value='price'
          title="$50 - $100"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value='price'
          title="$100 - $150"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value='price'
          title="Over $150"
          name="price"
        />
      </div>
    </>
  );
};

export default Price;

import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-normal mb-5">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Acrylic"
          title="Acrylic"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Water Color"
          title="Water Color"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Oil"
          title="Oil"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Ink"
          title="Ink"
          name="color"
        />

       <Input
          handleChange={handleChange}
          value="Mixed Media"
          title="Mixed Media"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Pencil"
          title="Pencil"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Poster"
          title="Poster"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="Charcoal"
          title="Charcoal"
          name="color"
        />
        <Input
          handleChange={handleChange}
          value="Sketch pen"
          title="Sketch pen"
          name="color"
        />
      </div>
    </>
  );
};

export default Colors;

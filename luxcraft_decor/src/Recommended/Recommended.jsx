import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="ml-80 mb-[20px] mt-[20px] text-xl	 ">Recommended</h2>
        <div className="flex ml-80 text-xs">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="LandscapePaintings" title="Landscape Paintings" />
          <Button onClickHandler={handleClick} value="Abstract Art" title="Abstract Art" />
          <Button onClickHandler={handleClick} value="Australian Wildlife and Flora" title="Australian Wildlife and Flora" />
          <Button onClickHandler={handleClick} value="Still Life and Objects" title="Still Life and Objects" />
          <Button onClickHandler={handleClick} value="Seascapes and Marine Life" title="Seascapes and Marine Life" />
          <Button onClickHandler={handleClick} value="Street Art and Graffiti-Inspired" title="Street Art and Graffiti-Inspired" />
          <Button onClickHandler={handleClick} value="Indigenous Art" title="Indigenous Art" />
          <Button onClickHandler={handleClick} value="Cultural and Historical" title="Cultural and Historical" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="p-2 px-4 mr-1 border border-gray-300 rounded text-gray-700 cursor-pointer w-36">
      {title}
    </button>
  );
};

export default Button;

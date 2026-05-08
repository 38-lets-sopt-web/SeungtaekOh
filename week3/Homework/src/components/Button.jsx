const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-3 py-1 text-xs ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

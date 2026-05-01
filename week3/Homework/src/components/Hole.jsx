const Hole = ({ type, onClick }) => {
  const typeRender = () => {
    switch (type) {
      case "두더지":
        return (
          <img
            src="/mole.jpg"
            alt="두더지"
            className="h-full w-full object-cover"
          />
        );

      case "맞은두더지":
        return (
          <img
            src="/hit.jpeg"
            alt="맞은 두더지"
            className="h-full w-full object-cover"
          />
        );

      case "폭탄":
        return (
          <img
            src="/bomb.jpeg"
            alt="폭탄"
            className="h-full w-full object-cover"
          />
        );

      default:
        return null;
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square flex-1 bg-hole rounded-full overflow-hidden cursor-pointer"
    >
      {typeRender()}
    </button>
  );
};

export default Hole;

const PaletteBlock = () => {
  return (
      <div
          className="inspo-block"
          style={{
              background: "linear-gradient(to bottom, #F0ABC9, #FEB47B)",
              border: "12px solid #E1DCED",
              borderRadius: "15px",
          }}

      >
          <h1 className="header-2-text">Lead Colors:</h1>
          <h1 className="info-text">#F0ABC9, #FEB47B</h1>
      </div>
  );
};

export default PaletteBlock;

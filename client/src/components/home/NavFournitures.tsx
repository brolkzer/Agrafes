const NavFournitures = () => {
  const navRelocate = () => {
    window.location.href = `/Browse?=Fournitures/1`;
  };

  return (
    <>
      <div className="navCard" onClick={() => navRelocate()}>
        <div className="navArticle navFournitures"></div>
        <p className="navText">Fournitures de bureau</p>
      </div>
    </>
  );
};

export default NavFournitures;

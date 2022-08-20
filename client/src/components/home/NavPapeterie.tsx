const NavPapeterie = () => {
  const navRelocate = () => {
    window.location.href = `/Browse?=Papeterie/1`;
  };

  return (
    <>
      <div className="navCard" onClick={() => navRelocate()}>
        <div className="navArticle navPapeterie"></div>
        <p className="navText">Papeterie</p>
      </div>
    </>
  );
};

export default NavPapeterie;

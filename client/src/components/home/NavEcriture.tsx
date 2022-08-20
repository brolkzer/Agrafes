const NavEcriture = () => {
  const navRelocate = () => {
    window.location.href = `/Browse?=Ecriture/1`;
  };

  return (
    <>
      <div className="navCard" onClick={() => navRelocate()}>
        <div className="navArticle navEcriture"></div>
        <p className="navText">Ecriture</p>
      </div>
    </>
  );
};

export default NavEcriture;

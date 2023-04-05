function TopSection() {
  return (
    <section className="top-section">
      <div className="logo-outer">
        <img className='logo-img' src={require('../assets/logo.png')} alt="logo" />
      </div>
      <div className='person-photo-outer'>
        <img className='person-photo-img' src={require('../assets/top-section/photo-3.png')} alt="person" />
      </div>
    </section>
  );
}

export default TopSection;

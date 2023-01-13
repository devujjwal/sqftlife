const WhyChoose = ({ style = '' }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: 'flaticon-high-five',
      title: 'Direct Sellers',
      descriptions: `No middlemen. Find homes without paying a dime in commission to agents or brokers.`,
    },
    {
      id: 2,
      icon: 'flaticon-profit',
      title: 'Buy, Rent or Sell',
      descriptions: `Thousands of houses and apartments in your favourite cities`,
    },
    {
      id: 3,
      icon: 'flaticon-home-1',
      title: 'Verified Properties',
      descriptions: `We get you the best and exclusively verified properties.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;

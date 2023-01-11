import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <span className="iconify" data-icon="tabler:file-certificate" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "Blockchain Enabled",
      content: "High level of safety and security in storing and transmitting data.",
    },
    {
      icon: <span className="iconify" data-icon="ion:notifications-outline" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "Real-Time Data",
      content:
        "Take control of your cashflow with fast and real-time process.",
    },
    {
      icon: <span className="iconify" data-icon="akar-icons:shipping-box-v1" style={{color: "white",fontSize:"1.5rem"}}></span>,
      name: "AI Based Credit Analytics",
      content: "Dynamic Credit Scoring, Fraud Analytics with power of AI",
    },
    
    
  ];

  return (
    <section id="feature" className="features">
      <h2 className="heading">Our Features</h2>
      <p className="content">Simplyfi trade dynamics through Blockchain & AI.</p>
      <div className="card-container">
        {features.map((feat,i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{feat.icon}</div>
            <h4 className="feature-card-heading">{feat.name}</h4>
            <p className="feature-card-content">{feat.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

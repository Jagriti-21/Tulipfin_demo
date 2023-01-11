import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h1 className="heading">Benefits</h1>
      
      
      <div className="template-container-1">
        <div style={{background:"#E508C3",color:"#E508C3",borderRadius:"10px"}} className="template-1">
          <div className="img-container">
            <div className="badge">RESOURCES</div>
            <img width="100%" height="300px" src="https://tulipfin.com/assets/images/blog/benifit_img.jpg" alt=""/>
          </div>
          <div className="template1-content">
              <h1>Enhanced Liquidity</h1>
              <p>Generate significant cashflows for your buisness through our digitized platform.</p>
          </div>
        </div>

        <div style={{background:"#6E82FE",color:"#6E82FE",borderRadius:"10px",height:"104%",position:"relative",top:"-20px"}}  className="template-1">
          <div className="img-container">
            <div className="badge">RESOURCES</div>
            <img width="100%" height="300px" style={{borderRadius:"10px 10px 0 0"}} src="https://tulipfin.com/assets/images/blog/benifit_img2.png" alt=""/>
          </div>
          <div className="template1-content">
            <h1>Easy Onboarding</h1>
            <p>Immediate Onboarding E-KYC Solution.</p>
          </div>
        </div>

        <div style={{background:"#FBBF24",color:"#FBBF24",borderRadius:"10px"}} className="template-1">
          <div className="img-container">
            <div className="badge">RESOURCES</div>
            <img width="100%" height="300px" src="https://tulipfin.com/assets/images/blog/benifits_img3.jpg" alt=""/>
          </div>
          <div className="template1-content">
            <h1>Real-Time Analytics</h1>
            <p>Our Analytics and credit scoring provides insights for right buisness decisions in dynamic buiness environment.</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Blog;

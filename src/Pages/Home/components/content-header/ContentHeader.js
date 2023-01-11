import { Link } from "react-router-dom"
import "./ContentHeader.css";

const ContentHeader = () => {
    return (
        <section className="content-header">
            <h1 className="heading">SUPPLY CHAIN<span>FINANCE HUB</span></h1>
            <div className="content">
              <p>Our blockchain enabled invoice financing enables you </p>
              <p>to have a consistent flow of working capital.</p>
            </div>
            <div style={{position:"relative"}}>
             
              <button className="primary-btn purchase-btn">Register Now</button>
            </div>
            <Link className="primary-link" style={{marginTop:"0.3rem"}} to="/">Learn More</Link>
        </section>
    );
};

export default ContentHeader;

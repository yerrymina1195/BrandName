import { FaHeart,FaEye ,FaChevronRight, FaShoppingCart,FaChartBar,FaClock} from "react-icons/fa";
import iframe from "../assets/img/Frame 4.svg";
import iframe2 from "../assets/img/Frame.svg";
export const Mapcard = ({ imgUrl }) => {
    return (
        <div className="col border-none ">
    <div className="card border-0 position-relative ">
      <img src={imgUrl} className="img-fluid" alt="" srcset="" />
      <div className="position-absolute px-4 py-3 ">
        <p className="bg-danger text-white px-4 py-1 rounded-2 fw-bold ">Sale</p>
      </div>
      <div className=" position-absolute top-50 pb-md-5 mb-5  start-50 d-flex justify-content-around translate-middle w-75 ">
     
             
                <a href="/" className=" text-dark ret mb-5 border-secondary bg-white p-3">
                 <FaHeart className=" fs-5"/>
                 
                </a>
             
             
                <a href="/" className=" text-dark ret mb-5 border-secondary bg-white p-3">
                 <FaEye className=" fs-5"/>
                 
                </a>
            
              
                <a href="/" className=" text-dark ret mb-5 border-secondary bg-white p-3">
                 <FaShoppingCart className=" fs-5"/>
                 
                </a>
      </div>
      <div className="card-body border-none text-start">
        <h5 className="card-title text-info">English <span  className="float-end" ><img src={iframe} alt="" srcset="" /></span></h5>
        <p className="fw-bold">Graphic Design</p>
        <p>We focus on ergonomics 
           and meeting you....</p>
        <p className="text-secondary fw-bold"><img src={iframe2} alt="" srcset="" /> 15 Sales</p>
        <p className="text-muted fs-6 fw-bold">$16.48 <span className="text-success fw-bolder">$6.48</span></p>
        <p className="text-muted"><FaClock className="text-primary" />pro... <FaChartBar className="ms-2 text-warning"/> 64 Les ... <FaClock className=" ms-2 text-primary" />22hr... </p>
        <a href="/"  className=" btn btn-outline-primary rounded-3 ">
    Learn more <FaChevronRight/>
</a>
      </div>
    </div>
  </div>
    )
  }
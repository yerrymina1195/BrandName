
import children from "../assets/img/col-md-6.png";
import { FaChevronRight } from "react-icons/fa";
export const Section2 = () =>{
    return(

    <section className="container p-5 mb-5">
 
        <div className="row py-5">

            <div className="col-md-6">
                <div className="py-3">
                   <p className="p-1  free w-25 "></p>
                </div>
                <div className="text-start py-3">
                    <h2 className="fw-bold display-6">
                    Packages that are <br/>aprodable
                    </h2>
                </div>
                <div className="text-start py-3">
                    <p className="text-muted fs-6">Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: <br/> 
Newtonian mechanics </p>
<a href="/"  className="text-primary">
    Learn more <FaChevronRight/>
</a>
 </div>

            </div>
            <div className="col-md-6">
                
<img src={children} className="img-fluid" alt="children" />
                </div>

        </div>

    </section>
    )
}

import image1 from "../assets/img/product-cover-66.png";
import image2 from "../assets/img/product-cover-65.png";
import image3 from "../assets/img/product-cover-63.png";
import image4 from "../assets/img/product-cover-64.png";

import { Mapcard } from "./Mapcard";

export const Section3 =()=>{

    return(
        <section className="container">
                   <div className=" text-start py-5">
            <p className="text-primary fw-bold">Practice Advice</p>
            <h4 className="fw-bolder mb-3 display-6">Make online education accessible</h4>
            <p className="text-muted">Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  

 

<Mapcard imgUrl={image1}/>
<Mapcard imgUrl={image2}/>
<Mapcard imgUrl={image3}/>
<Mapcard imgUrl={image4}/>
</div>
             
        </section>
    )
} 
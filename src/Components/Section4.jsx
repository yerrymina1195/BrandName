
import women1 from "../assets/img/testimonial-user-cover-23.png";
import women2 from "../assets/img/testimonial-user-cover-24.png";
import { Test } from "./Test";

export const Section4 =()=>{

    return(
        <section className="container">
                   <div className=" text-start py-5">
            <p className="text-primary fw-bold">Practice Advice</p>
            <h4 className="fw-bolder mb-3 display-6">Our Experts Teacher</h4>
            <p className="text-muted">Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
            <div className="row row-cols-1 row-cols-md-2 p-5  g-4">
<Test imgUrl={women1}/>
<Test imgUrl={women2}/>
            </div>
        </section>
            )

            }
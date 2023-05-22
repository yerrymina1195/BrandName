
import cool from "../assets/img/icon cool-icon-13.svg"
import cardss from "../assets/img/icon cool-icon-15.svg"
import success from "../assets/img/coolicon.svg"


export const Header = () =>{



      return(

   
     <section className="container-fluid header-first mt-5 py-5">
        <div className=" text-center mt-5 py-3">
            <h6 className="text-primary">Welcome</h6>
        </div>
        <div className=" text-center py-3">
            <h1 className="text-white fw-bold display-3 ">Selling on the<br/> internet like a pro</h1>
        </div>
        <div className=" text-center py-3">
            <p className="text-white">We know how large objects will act, but things on a <br/>
small scale just do not act that way.</p>
        </div>
        <div className=" text-center mb-5">
<button className="btn btn-lg btn-info text-white p-2 me-3 ">
    Get Guote Now
</button>
<button className="btn btn-lg btn-outline-primary p-2">
    Learn more 
</button>
        </div>
        <div className="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col">
    <div class="card h-100 py-5 px-3">
      
      <div class="card-body">
        <p className="bg-danger bg-opacity-25 p-3 w-25 rounded-2"><img src={cool} className="img-fluid" alt="icon1" srcset="" /></p>
        <h5 className="card-title text-start fw-bold">training Courses</h5>
        <hr className="bg-danger  w-25" />
        <p class="card-text text-start text-muted">The gradual accumulation of<br/>
information about atomic and <br/>
small-scale behaviour...</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 py-5 px-3">
      
      <div class="card-body">
        <p className="bg-success bg-opacity-25 p-3 w-25 rounded-2"><img src={success} className="img-fluid" alt="icon2" srcset="" /></p>
        <h5 className="card-title text-start fw-bold">2,769 online coursestraining Courses</h5>
        <hr className="bg-danger  w-25" />
        <p class="card-text text-start text-muted">The gradual accumulation of<br/>
information about atomic and <br/>
small-scale behaviour...</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 py-5 px-3">
      
      <div class="card-body">
        <p className="bg-secondary bg-opacity-25 p-3 w-25 rounded-2"><img src={cardss} className="img-fluid" alt="icon3" srcset="" /></p>
        <h5 className="card-title text-start fw-bold">training Courses</h5>
        <hr className="bg-danger  w-25" />
        <p class="card-text text-start text-muted">The gradual accumulation of<br/>
information about atomic and <br/>
small-scale behaviour...</p>
      </div>
    </div>
  </div>
</div>

        </div>
         
     </section>
  
      )
      }
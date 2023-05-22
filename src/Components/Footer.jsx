import { BsFacebook, BsInstagram,BsTwitter } from "react-icons/bs";



export  const Footer = ()=> {
  return (
  <section className="container-fluid footer text-white px-0 ">
    <div className="p-5">
    <div className="row ">
      <div className=" text-md-start   col-lg-3 col-md-6 col-sm-12 mb-5 mb-md-0">
        <h3 className="mb-4">Get In Touch</h3>
        <p  className="mb-4">the quick fox jumps over the lazy dog</p>
        <a href="/"  className="  me-3">
    <BsFacebook className="fs-3"/>
</a>
        <a href="/"  className=" me-3">
    <BsInstagram className="fs-3"/>
</a>
        <a href="/"  className="">
    <BsTwitter className="fs-3"/>
</a>
      </div>
      <div className=" text-md-start   d-flex  flex-column justify-content-center align-items-center  col-lg-3 col-md-6 col-sm-12 mb-5 mb-md-0">
        <h3>Company info</h3>
        <ul class=" text-white list-unstyled">
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2" target="" >
              About Us
              </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white  text-decoration-none  mb-2">
              Carrier
            </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              We are hiring     
               </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              Blog       
               </a>
            </li>
          </ul>
      </div>
      <div className=" text-md-start   col-lg-3 col-md-6 col-sm-12 mb-5 mb-md-0">
        <h3>Features</h3>

        <ul class=" text-white list-unstyled">
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2" target="" >
              Business Marketing
              </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white  text-decoration-none  mb-2">
              User Analytic
            </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              Live Chat     
               </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              Unlimited Support       
               </a>
            </li>
          </ul>
      </div>
      <div className=" text-md-start  d-flex  flex-column justify-content-center align-items-center  col-lg-3 col-md-6 col-sm-12 mb-5 mb-md-0">
        <h3>Resources</h3>
 
        <ul class=" text-white list-unstyled">
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2" target="" >
              IOS & Android
              </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white  text-decoration-none  mb-2">
              Watch a Demo
            </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              Customers     
               </a>
            </li>
            <li class="py-1">
              <a href="/" className="text-white text-decoration-none  mb-2">
              API       
               </a>
            </li>
          </ul>
      </div>

    </div>
    </div>
    <div className="bg-white p-5 text-center">
      <p className=" text-muted fw-bold">Made With Love By Figmaland All Right Reserved </p>

    </div>
     
  </section>
  )
}

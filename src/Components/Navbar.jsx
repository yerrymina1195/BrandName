import { BsFillMenuButtonWideFill } from "react-icons/bs";
import  {  Nav, Navbar}from 'react-bootstrap';


export const NaVbar = () =>{



      return(

   
            <Navbar expand="md" className='footer d-flex align-items-center  border-none fixed-top px-5' >
          <Navbar.Brand href="/">
            <span className='text-white fw-bolder fs-3'> BrandName</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className=" text-white"> <BsFillMenuButtonWideFill/></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className=" d-flex justify-content-around align-items-center mx-auto w-50">
               <Nav.Link href="#home"><span className='text-white '>Home</span></Nav.Link>
               <Nav.Link href="#product" ><span className='text-white '>Product</span></Nav.Link>
               <Nav.Link href="#pricing" ><span className='text-white '>Pricing</span></Nav.Link>
               <Nav.Link href="#contact" ><span className='text-white '>Contact</span></Nav.Link>
              
             </Nav>
             <div className='ms-auto'> <a href="/">
                <button className='bg-none btn border-none text-white '>login</button>
               </a>
               <a href="/">
                <button className=' btn btn-lg btn-info text-white'>join us</button>
               </a>
               </div>
          </Navbar.Collapse>

      </Navbar>
  
      )
      }
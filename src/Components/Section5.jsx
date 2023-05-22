
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Section5 =()=>{


return(
    <section className=" container-fluid py-5">
                           <div className="  py-5">
            <p className="text-primary fw-bold">Featured Products</p>
            <h4 className="fw-bolder mb-3 display-6">Our Experts Teacher</h4>
            <p className="text-muted">Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className=' mx-auto inputfin'>
        <InputGroup className="mb-3  mx-auto ">
        <Form.Control
          placeholder="Your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button  className='btn btn-primary text-white btn-lg' id="button-addon2">
          Subscribe 
        </Button>
      </InputGroup>
        </div>
    </section>
)

}
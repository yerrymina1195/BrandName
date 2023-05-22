
import stars from "../assets/img/stars.svg";


export const Test = ({ imgUrl }) => {

return(
    <div className="col py-5">
    <div>
        <img src={imgUrl} className="rounded-circle" alt=""  />
    </div>
    <div>
        <p className="text-muted">Slate helps you see how many more days <br/>
you need to work to reach your financial <br/>
goal for the month and year.</p>
        <p>
           <img src={stars} alt=""  />
        </p>
        <p className=" fw-bold">Regina Miles</p>
        <p className="text-muted fw-bold">Designer</p>
    </div>


</div>
)


}
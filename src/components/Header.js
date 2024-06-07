import kid from "../images/kid.png"
import abacus from "../images/abacus.png"
import notification from "../images/notifications_unread.png"
import raise_img from "../images/iconoir_stats-up-square-solid.png"
export default function Header()
{
return(
    <>
    <div className="container  ">
        <div className="row py-4">
            <div className="col d-flex justify-content-start mx-1">
              <img src={abacus} alt="bg" />
            </div>
            <div className="col d-flex justify-content-end">
              <img src={raise_img} alt="bg" />
              <img src={notification} alt="bg" />
              <img src={kid} alt="bg" />
            </div>
            
           
        </div>
    </div>   
    </>
)
}
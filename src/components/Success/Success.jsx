import "./Success.css";
import Icon from "../../images/Subtract.svg";
function Success(){
    return(
        <div id="succ">
           <div id="image"><img src={Icon} alt="" /></div>
           <div id="success">Success</div>
        </div>
    )
}
export default Success;
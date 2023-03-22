import { useState } from "react";
import Banner1 from "../../images/Banner.svg";
import Banner2 from "../../images/Banner1.svg";
import Banner3 from "../../images/Banner2.svg";
function Sider(){
    const style1={
        marginLeft: "180px",
        marginTop: "-500px",
    }
    const style2={
        marginLeft:"250px",
        marginTop:"-455px",
    }
    const style3={
        marginLeft:"315px",
        marginTop:"40px",
    }
    return(
        <div>
            <div id="Banner3" style={style3}> <img src={Banner3} alt="" /></div>
            <div id="Banner2" style={style2}> <img src={Banner2} alt="" /></div>
            <div id="Banner1"  style={style1}><img src={Banner1} alt=""/></div>
        </div>
    )
}
export default Sider;
import { useEffect, useState } from "react";
import UserService from "./UserService";

function Szotar(props){

    const [szom, setSzo] = useState("");
    const [helyes, setHelyes] = useState(props.szo.magyar)
    const [jel, setJel] = useState(<i className="bi bi-x-lg"></i>)
    const [pont, setPont] = useState(0);

    useEffect(() => {
        UserService.setPoint(pont)
      }, [szom]);

function dataChange(event){
    let szo = event.target.value
    setSzo(event.target.value)
    if(szo === helyes){
        setJel(<i className="bi bi-check-square-fill"></i>);
        setPont(pont+1);
    }else{
        setJel(<i className="bi bi-x-lg"></i>)
    }
}

    return(
        <>
      <div className="col-sm a"><p>{props.szo.angol}</p></div>
      <input
          type="text"
          id="magyar"
          defaultValue={""}
          onChange={dataChange}
          value={szom}
          className="col-sm magyar"
        />
      <div className="col-sm jel">{jel}</div>
          
        </>
    )
}

export default Szotar;
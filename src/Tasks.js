import React from "react";


function Tasks(props) {
    const arr = props.values
    return <>
     {
      arr.map((value, i) => {
       return (<React.Fragment key={i}>
        <li className="shadow fade-in p-2 my-2 col-sm-9 rounded shadow-lg border" onClick={() => { props.sendStrike(i) }}>{value}</li>
        <button className="btn-close my-2 p-2 col-sm-2 offset-1 btn-lg shadow-lg" onClick={() => { props.sendData(i) }}></button>
       </React.Fragment>)
      })
     }
   
    </>
}

export default Tasks;

import Tasks from "./Tasks"


function Output(props) {
    const values = props.values
    if (values.length === 0) {
        return (<div className="alert alert-dark shadow-lg" role="alert">
        <i className="fa-solid fa-triangle-exclamation"></i> No Tasks currently.
      </div>);
    }
    else {
        return <Tasks values={props.values} sendData={props.sendData} sendStrike={props.SendStrike}/>
    }
}

export default Output;
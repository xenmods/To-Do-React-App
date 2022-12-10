import React, { Component } from 'react';
import Output from "./output.js"
import TasksHeading from "./TasksHeading"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css.'

class App extends Component {
  state = {
    items:[],
    text: "" 
  }
  handleChange = e =>{
    this.setState({text: e.target.value})
  } 
  handleAdd = e =>{
    if (this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text: ""});
    }
  }
  handleDelete = id =>{
    const OldItems = [...this.state.items];
    const items = OldItems.filter((item, i) =>{return i !== id});
    this.setState({items: items});
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (this.state.text !== ""){
        const items = [...this.state.items, this.state.text];
        this.setState({items: items, text: ""});
      }
    }
  }
  sendStrike = id =>{
    const items = [...this.state.items];
    const text = items[id]
    items[id] = `<s>${text}</s>`
    this.setState({items: items});
  }
  render() {
    return (
      <div className="container fade-in my-8">
        <div className="row">
          <div className="col-sm-8 mx-auto text-black shadow-lg pt-3 rounded">
            <h2 className='text-center my-3'>To Do App</h2>
            <TasksHeading values={this.state.items}/>
            <div className="row">
              <div className="col-9">
                <input type="text" onKeyDown={this.handleKeyDown} className='form-control' placeholder='Task Name...' value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col-2">
                <button onClick={this.handleAdd} className="btn btn-dark px-5 fw-bold shadow-lg"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="container">
                <ul className='list-unstyled row m-5'>
                  {/* {
                    this.state.items.map((value, i) =>{
                      return <Tasks key={i} id={i} value={value} sendData={this.handleDelete}/>
                    })
                  } */}
                  <Output values={this.state.items} sendData={this.handleDelete} sendStrike={this.sendStrike}/>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" 

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : ""};
    this.state = {age : ""};
  }
  realName = () => {
    this.setState({name: "Vannith"}); 
  }
  nickName = () => {
    this.setState({name: "NithKiKo"});
  }
  remove = () => {
    this.setState({name: ""});
  }
  static getDerivedStateFromProps(props, state, agechnage) {
    return {age: props.agechnage};
  }
  render() {
    return (
      <div className='form-control'>
        <h1>My name {this.state.name}</h1>
        <h1>My age</h1>
        <div className='d-flex flex-column w-25 h-25'>
        <button className='btn btn-outline-primary m-3' onClick={this.realName}>
          Click to show my Realname!
        </button>
        <button className='btn btn-secondary m-3' onClick={this.nickName}>
          Click to show my Nickname!
        </button>
        <button className='btn btn-danger m-3' onClick={this.remove}>
          Click to remove!
        </button>
        </div>
      </div>
    );
  }
}
export default Info;
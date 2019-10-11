import React , { Component } from 'react';
import {Form , FormControl , Button } from 'react-bootstrap';
import './App.css';

import AgeState from './AgeState'


class App extends Component {
  constructor(){
    super();
    this.state ={
      birthday : '',
      newDate : '',
      apper:false
    }
  }

  changDate(){
    if (this.state.newDate !== '') {
      console.log(this.state);
      this.setState({birthday:this.state.newDate})
      this.setState({apper:true})
    }else {
      alert('You Must Enter Value')
    }
   }


  render(){
    // var date = new Date().getTime();
    return(
      <div className ="App">
        <Form>
          <h2>  <span role="img" aria-label="sheep">🎵</span>  <span role="img" aria-label="amaz"> Input Your Birthday 👀🙄﻿</span>  </h2>
          <FormControl type='date' onChange ={ event => this.setState({newDate: event.target.value})}>
          </FormControl>
          <br/>
          <Button onClick ={() => this.changDate()}>
            submit
          </Button>
            { this.state.apper ?
              <AgeState date={this.state.birthday}/>
              :
              <div></div>
        }
        </Form>
      </div>
    )
  }
}
export default App ;

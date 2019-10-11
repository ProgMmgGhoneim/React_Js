import React , { Component } from 'react';

import mmg from '../assest/mmg.jpg'


class AgeState extends Component  {
  calTime(date){
    let today = new Date().getTime();
    let birthday = new Date(date).getTime();
    let differance = Math.abs(today-birthday)
    let days = Math.floor(differance/(1000*60*60*24))

    if (days !== 0) {
      let years = Math.floor(days/365)
      days -=years*365
      let month = Math.floor(days/31)
      days -= month*31
      return `${years} years ,${month} month , ${days} days`
    }else {
      return `New Baby Congraturation `
    }
  }

  render() {
    var c =this.calTime(this.props.date)
    return (
      <div>
        <h1>{this.props.date}</h1>
        <p>  You have  {c} !!!! </p>
        <img src= {mmg} alt ='mmg' className='img'></img>
      </div>
    )
  }
}
export default AgeState ;

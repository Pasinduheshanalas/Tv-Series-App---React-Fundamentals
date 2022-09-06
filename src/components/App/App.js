import React, { Component } from 'react';
import "./App.css"
import Intro from '../Intro';
import "whatwg-fetch";
import SeriesList from '../SeriesList/SeriesList';
import Loader from '../Loader';

export default class App extends Component {
  state = {
    series : [],
    seriesName:'',
    IsFetching:false
  }
  

  onSeriesInputChange = e => {
    this.setState({seriesName:e.target.value, IsFetching:true})
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({series:json, IsFetching:false}))
  }

  
  render() {
    const { series, seriesName, IsFetching} = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <h1>TV Serious</h1>
      </header>
      <Intro messege = "Here you can find all of your most loved serious"/>
      <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
      {!IsFetching && series.length === 0 && seriesName.trim() === "" 
      && 
      <p>Please Enter Series Name</p>
      }

      {!IsFetching &&  series.length === 0 && seriesName.trim() !== "" 
      && 
      <p>No Tv Series</p>
      }

      {
        IsFetching && <Loader/>
      }
      
     <SeriesList list = {this.state.series}/>
    </div>
    )
  }
}




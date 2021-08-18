import React, { Component } from 'react';
import InputForm from '../components'
import axios from 'axios';


export default class App extends Component {
 state = {
   screenshot:null
 }


  getScrnsht = (e) => {
    e.preventDefault();
    const link = e.target.elements.link.value;
    axios.get(`https://www.airbnb.co.uk/s/India/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=august&flexible_trip_dates%5B%5D=september&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=India&place_id=ChIJkbeSa_BfYzARphNChaFPjNc&adults=1&source=structured_search_input_header&search_type=autocomplete_click`)
    .then((res) => {
      const screenshot = res.data.screenshot;
      this.setState({screenshot})
      console.log(screenshot);
    });
  }
  render() {
    return (
      <div>
        <InputForm getScrnsht={this.getScrnsht}/>
        { this.state.screenshot ?  <img src={ this.state.screenshot } alt="link"/> : <p>Please enter your link.</p> }
      </div>
    )
  }
}

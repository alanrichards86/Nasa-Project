import React, { Component } from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';
const API_KEY = 'RysIEaaxRbS06Yempw6VLNcEuUok5dYmnD21zDSu';

export default class GetImageForm extends Component {
  constructor(props){
    super(props);

    this.state={
      camera: 'FHAZ',
      rover:'Curiosity',
      sol:'',
      images: []
    }

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFetchRoverImage = this.handleFetchRoverImage.bind(this);
  }

  handleRover(e){
    this.setState({rover:e.target.value});
  }

  handleCamera(f){
    this.setState({camera: f.target.value});
  }

  handleSol(g){
    this.setState({sol: g.target.value});
  }

  handleSubmit(h){
    return fetchRoverImage();
  }
  // Each input will need an onChange function to handle grabbing the data when the button is clicked.
  // There should be a method that is bound to this called fetchRoverImage.
  // fetchRoverImage should use a fetch call to retrieve pictures from the NASA Mars Rover API.

  fetchRoverImage = () =>{
    console.log('Its Working!');
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
  }

  render(){

    let theStyle = {
          textAlign: "center"
        }

    console.log(this.state.rover);

    return(
      <div>
        <form onSubmit={this.handleSubmit} style={theStyle}>
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>

            <GetImageButton />

          </form>
          <div style={theStyle}>
            <h3>{this.state.rover}</h3>
          </div>
      </div>
);
}
}

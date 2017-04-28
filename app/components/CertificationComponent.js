import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class CertificationComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  getImageURL(certificationImageName) {
    return "./images/" + certificationImageName + ".png";
  }

  renderCertification(certification) {
    let renderedCertification = [];
    // for looping Certifcations
    for (let i = 0; i < certification.length; i++) {
      renderedCertification.push(<a className="imgSpace" target="_blank" href={certification[i]["url"]}><img className="certificationImg" src={this.getImageURL(certification[i]["imageName"])} title={certification[i]["certificationName"]} alt={certification[i]["certificationName"]}></img></a>);
    }

    return renderedCertification;
  }

  render() {
      let currentURL = window.location.href;
      return (
          <div>
              <div className='row'>
                  <div className='col-xs-12 col-md-2'>
                      <p className='sideHeading'>
                          Certifications
                      </p>
                  </div>
                  <div className='col-xs-12 col-md-10 imagesDiv'>
                      {this.renderCertification(this.props.certifications)}
                  </div>
              </div>
          </div>
      );
  }
}


export default CertificationComponent;

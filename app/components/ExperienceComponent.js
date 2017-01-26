import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class ExperienceComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderExperience(experience) {
    let renderedexperience = [];
    for (let i = 0; i < experience.length; i++){
      let experienceSet = [];
      experienceSet.push(<p className='awardName'>{experience[i]["position"]}</p>);
      experienceSet.push(<p className='awardOrganiser'>{experience[i]["organization"]}</p>);
      experienceSet.push(<p className='awardYear'>{experience[i]["location"]}</p>);
      experienceSet.push(<p className='awardDescription'>{experience[i]["year"]}</p>);
      if(experience[i]["description"].length > 1) {
        for(let j = 0; j < experience[i]["description"].length; j++){
          experienceSet.push(<p className='awardDescription'>{"- "+experience[i]["description"][j]}</p>);
        }
      } else {
        experienceSet.push(<p className='awardDescription'>{experience[i]["description"][0]}</p>);
      }
      renderedexperience.push(experienceSet);
      renderedexperience.push(<br />);
    }
    return renderedexperience;
  }

  render() {
    let currentURL = window.location.href;
    return (
      <div>
          <div className='row'>
              <div className='col-xs-12 col-md-2'>
                  <p className='sideHeading'>
                     experience
                  </p>
              </div>
              <div className='col-xs-12 col-md-10 sideContent'>
                  {this.renderExperience(this.props.experience)}
              </div>
          </div>
      </div>
    );
  }
  }

export default ExperienceComponent;

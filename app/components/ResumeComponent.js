import React, { Component } from 'react';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import resume from '../../resume.json';
import fetch from 'isomorphic-fetch';

import About from './AboutComponent';
import Experience from './ExperienceComponent';
import Skills from './SkillsComponent';
import Contact from './ContactComponent';
import Education from './EducationComponent';
import Awards from './AwardsComponent';
import Projects from './ProjectsComponent';

let styles = {
  robotofont: {
    fontFamily: 'roboto'
  }
};

const muiTheme = getMuiTheme({
  stepper: {
    iconColor: "black"
  },
  raisedButton: {
    primaryColor: "black",
  }
});


class ResumeComponent extends Component {

  componentDidMount() {
    console.log("in componentDidMount");
    fetch('https://o98r03g5xb.execute-api.us-east-1.amazonaws.com/dev/sendMessage', {credentials: 'omit',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      .then(res => {
        if (res.status !== 200) {
          console.log('error in posting event');
        } else {
          console.log(JSON.stringify(res));
          return res.json();
        }
      })
      .then(json => {
        console.log(JSON.stringify(json));
      })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='fullPage'>
          <div className='row col-xs-offset-1 col-md-offset-2'>
            <div className='col-xs-12 col-md-10' style={{'paddingTop' : '37px'}}>
              <h1 className='robotoRegFont' style={{'lineHeight' : 'initial'}}>{resume.name}</h1>
              <h5 className='robotoLightFont' style={{'color' : '#797575','lineHeight' : '2'}}>{resume.address} &nbsp;&nbsp;|&nbsp;&nbsp;{resume.email} &nbsp;&nbsp;|&nbsp;{resume.mobile}</h5>
              <About abt={resume.about}/>
              <br />
              <Skills skillSet={resume.skills}/>
              <br />
              <Experience experience={resume.experience}/>
              <br />
              <Projects projects={resume.projects}/>
              <br />
              <Awards awards={resume.awards}/>
              <br />
              <Education education={resume.education}/>
              <br />
              <Contact contact={resume.contacts}/>
              <br />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({}))(ResumeComponent);

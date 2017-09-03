import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class QualificationComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderQualification() {
    let renderQualification = [];
    renderQualification.push(<div><span className='awardOrganiser'>-</span> <span className='contents'>Successfully designed and delivered secure cloud solutions for domains such as</span> <span className='awardOrganiser'>E-commerce</span>, <span className='awardOrganiser'>Content Management System</span><span className='contents'> and</span> <span className='awardOrganiser'>IoT</span><span className='contents'>.</span></div>);
    renderQualification.push(<div><span className='awardOrganiser'>-</span> <span className='contents'>Earned a reputation for designing cloud deployment strategies that mitigate risk while meeting infrastructure, customer and budgetary needs.</span></div>);
    renderQualification.push(<div><span className='awardOrganiser'>-</span> <span className='contents'>Employed</span> <span className='awardOrganiser'>Serverless</span>, <span className='awardOrganiser'>Microservices</span> <span className='contents'>and</span> <span className='awardOrganiser'>Container</span> <span className='contents'>patterns while implementing cloud applications.</span></div>);
    renderQualification.push(<div><span className='awardOrganiser'>-</span> <span className='awardOrganiser'>AWS</span> <span className='contents'>and</span> <span className='awardOrganiser'>GCP</span> <span className='contents'>certified.</span></div>);
    return renderQualification;
  }

  render() {
    let currentURL = window.location.href;
    return (
      <div>
          <div className='row'>
              <div className='col-xs-12 col-md-2'>
                  <p className='sideHeading'>
                     qualifications
                  </p>
              </div>
              <div className='col-xs-12 col-md-10 sideContent'>
                  {this.renderQualification()}
              </div>
          </div>
      </div>
    );
  }
  }

export default QualificationComponent;

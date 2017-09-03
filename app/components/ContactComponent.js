import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class ContactComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  getImageURL(contactType) {
    return "./images/" + contactType + ".png";
  }

  trackProfileViews(contactType){
    console.log(contactType);
    console.log("callClick");
    ReactGA.event({
      category: 'ViewProfile',
      action: contactType
    });
  }

  renderContact(contact) {
    let renderedcontact = [];
      // for looping contact
      for (let contactType in contact) {
          if (contact.hasOwnProperty(contactType)) {
              renderedcontact.push(<a onClick={this.trackProfileViews.bind(this, contactType)} className="imgSpace" target="_blank" href={contact[contactType]}><img src={this.getImageURL(contactType)}></img></a>);
            }
      }
      return renderedcontact;
  }

  render() {
      let currentURL = window.location.href;
      return (
          <div>
              <div className='row'>
                  <div className='col-xs-12 col-md-2'>
                      <p className='sideHeading'>
                          Contact
                      </p>
                  </div>
                  <div className='col-xs-12 col-md-10 imagesDiv'>
                      {this.renderContact(this.props.contact)}
                  </div>
              </div>
          </div>
      );
  }
  }


export default ContactComponent;

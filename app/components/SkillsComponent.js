import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
    icon2: {
        marginRight: 10,
        marginTop: 14
    }
}

class SkillsComponent extends Component {
    constructor(props) {
        super(props);
    }

    getImageURL(skillType) {
      return "./images/"+skillType+".png";
    }

    componentDidMount() {}

    renderSkillSet(skillSet) {
      let renderedSkillSet = [];
        // for looping skillSet
        for (let skillType in skillSet) {
            if (skillSet.hasOwnProperty(skillType)) {
                let skillNames = skillSet[skillType].split(',');
                let skillValuesAppended = skillNames[0];
                for (let i = 1; i < skillNames.length; i++) {
                    skillValuesAppended += " • " + skillNames[i];
                }
                renderedSkillSet.push(<div id='skill-padding-bottom'><img className='img-skill-icon' src={this.getImageURL(skillType)}></img><p className='skill'>{skillValuesAppended}</p><br /></div>);
            }
        }
        return renderedSkillSet;
    }

    render() {
        let currentURL = window.location.href;
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-12 col-md-2'>
                        <p className='sideHeading'>
                            Skills
                        </p>
                    </div>
                    <div className='col-xs-12 col-md-10 sideContent'>
                        {this.renderSkillSet(this.props.skillSet)}
                    </div>
                </div>
              <br/>
            </div>
        );
    }
}

export default SkillsComponent;

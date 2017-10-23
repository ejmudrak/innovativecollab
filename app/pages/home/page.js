/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';
import Logo from '../../assets/logo-color-01.jpg';

import { Card, Button, Container, Divider, Header, Icon, Image, Item, Menu, Segment } from 'semantic-ui-react';

const aboutItems = [
  {
    childKey: 0,
    image: '../../assets/logo-color.png',
    header: 'About',
    description: 'Innovative Collaborations is a consulting firm that cultivates cultural competency, diversity, and leadership for teams and work environments',
    meta: 'Want training? Contact us.',
    // extra: 'Extra',
  },
];

export default class Home extends React.Component {
  constructor(props) {
     super(props);
    //  this.state = {
    //      home: false,
    //  }
   }

  scrollToDiv = (event) => {
    let location = event.target.name;
    const node = ReactDOM.findDOMNode(this.location);
    node.scrollIntoView({behavior: "smooth"});
  }

    render() {

        return (
            <div>
                <div>
                    <MediaQuery query='(min-device-width: 1224px)'>
                      <MediaQuery query='(min-width: 1000px)'>
                        <div className={styles.infoCards}>
                          <InfoCard className={styles.card} title="Leadership Training" />
                          <InfoCard className={styles.card} title="Cultural Competency" />
                          <InfoCard className={styles.card} title="Team Building" />
                        </div>
                      </MediaQuery>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width: 1224px)'>
                      <MediaQuery query='(max-width: 1000px)'>
                        <div className={styles.moreText}>More</div>
                        <Icon className={styles.arrowDown} name='long arrow down' color='yellow' size='big'/>
                      </MediaQuery>
                    </MediaQuery>
                  </div>

                  {/* SECOND SECTION: ABOUT */}
                  <div id='about' className={styles.about}>
                    <Header as='h2' icon textAlign='center'>
                      <Header.Content>
                        <Divider horizontal><h1>About</h1></Divider>
                      </Header.Content>
                    </Header>
                    <Segment textAlign='center'  size="big" vertical>
                      Innovative Collaborations is a consulting firm that cultivates cultural competency, diversity, and leadership for teams and work environments.
                    </Segment>
                    <Divider />
                  </div>
            </div>
        );
    }
}

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Card>
        <Card.Content header={this.props.title} />
        <Card.Content description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Card.Content>
          <Button basic color="blue">Learn More</Button>
        </Card.Content>
      </Card>
    );
  }
}

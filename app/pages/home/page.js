/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';

import { Card, Button, Container, Divider, Header, Icon, Image, Item, Menu, Segment } from 'semantic-ui-react';

// For Material-UI, uncomment:
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

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
     this.state = {
       activeItem: 'home',
     }
   }

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  scrollToDiv = (event) => {
    let location = event.target.name;
    const node = ReactDOM.findDOMNode(this.location);
    node.scrollIntoView({behavior: "smooth"});
  }

    render() {
      const { activeItem } = this.state;

        return (
            <div>
              {/* FIRST SECTION: HOME */}
              <div id='home' className={styles.landing}>
                <Menu className={styles.menu} pointing secondary color={'yellow'}>
                  <Menu.Menu position='right'>
                    <Menu.Item className={styles.menuItem} name='home' active={activeItem === 'home'} onClick={this.handleMenuClick} />
                    <Menu.Item className={styles.menuItem} name='about' active={activeItem === 'about'} onClick={this.handleMenuClick} />
                    <Menu.Item className={styles.menuItem} name='contact' active={activeItem === 'contact'} onClick={this.handleMenuClick} />
                  </Menu.Menu>
                </Menu>
                <h1 className={styles.heading}>Innovative Collaborations</h1>
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
                    {/* }<InfoCard className={styles.card} title="21st Century Training" /> */}
                    <div className={styles.moreText}>More</div>
                    <Icon className={styles.arrowDown} name='long arrow down' color='yellow' size='big'/>
                  </MediaQuery>
                </MediaQuery>
              </div>

              {/* SECOND SECTION: ABOUT */}
              <div id='about' className={styles.about}>
                <Header as='h2' icon textAlign='center'>
                  <Image className={styles.aboutImage} src='../../assets/logo-color-01.jpg' />
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

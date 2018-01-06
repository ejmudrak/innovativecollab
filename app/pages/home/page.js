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

import { Card, Button, Container, Divider, Header, Icon, Image, Item, List, Menu, Segment } from 'semantic-ui-react';

const aboutItems = [
  {
    childKey: 0,
    image: '../../assets/logo-color.png',
    header: 'About',
    description: 'Innovative Collaboration is a consulting firm that cultivates cultural mindfulness, diversity, and creative leadership.',
    meta: 'Want training? Contact us.',
  },
];

export default class Home extends React.Component {
  constructor(props) {
     super(props);
     this.state = { name: '', email: '', submittedName: '', submittedEmail: '' }
   }

   handleChange = (e, { name, value }) => this.setState({ [name]: value })

   handleSubmit = () => {
     const { name, email } = this.state

     this.setState({ submittedName: name, submittedEmail: email })
   }

  scrollToDiv = (event) => {
    let location = event.target.name;
    const node = ReactDOM.findDOMNode(this.location);
    node.scrollIntoView({behavior: "smooth"});
  }

    render() {

      const { name, email, submittedName, submittedEmail } = this.state

      return (
          <div>
{/*              <div>
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
              </div>*/}

              {/* SECOND SECTION: ABOUT */}
              <div id='about' className={styles.about}>
                <Header as='h2' icon textAlign='center'>
                  <Header.Content>
                    <Divider horizontal><h1>About</h1></Divider>
                  </Header.Content>
                </Header>
                <Container text>
                  <h2>
                    <strong>Innovative Collaboration is a consulting firm that cultivates cultural competency, diversity, and leadership.</strong>
                  </h2>
                </Container> 
                <br/>
                <Container style={{display: 'flex', justifyContent: 'center'}}>
                  <Card style={{width: '95%'}}>
                    <Divider horizontal style={{marginBottom: '35px'}}>Where we make a difference</Divider>
                    <List size='huge' style={{display: 'block', margin: 'auto', padding: '10px', paddingBottom: '40px'}}>
                        <List.Item style={{marginBottom: '20px'}}>
                          <Icon name='graduation' size='big' color='purple'/>
                          <List.Content style={{paddingLeft: 0}}>
                            <List.Header>Higher Education</List.Header>
                            Innovate academics
                          </List.Content>
                        </List.Item>                        
                        <List.Item style={{marginBottom: '20px'}}>
                          <Icon name='book' size='big' color='red'/>
                          <List.Content>
                            <List.Header>K-12</List.Header>
                            Shape the next generation
                          </List.Content>
                        </List.Item>
                        <List.Item style={{marginBottom: '20px'}}>
                          <Icon name='briefcase' size='big' color='orange'/>
                          <List.Content>
                            <List.Header>Businesses</List.Header>
                            Grow your work environment
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <Icon name='users' size='big' color='blue'/>
                          <List.Content>
                            <List.Header>Teams</List.Header>
                            Boost your team's potential
                          </List.Content>
                        </List.Item>
                    </List>
                  </Card>
                </Container>
              </div>

            {/* THIRD SECTION: CONTACT */}
              <div className={styles.contact}>
                <Header as='h2' icon textAlign='center'>
                  <Header.Content>
                    <Divider horizontal><h1>Contact</h1></Divider>
                  </Header.Content>
                </Header>
                <Container style={{display: 'flex', justifyContent: 'center'}}>
                  <h2>info@innovativecollaboration.org</h2>
                </Container>
              </div>
              <Divider />

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

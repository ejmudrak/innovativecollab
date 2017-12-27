/* page.js -- about
Author: Erik Mudrak - Fall 2017 
+ Implements About page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Icon, List, Segment} from 'semantic-ui-react';


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        // state = {
        //     about: false,
        // }
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>About</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'>
                        <strong>Innovative Collaboration is a consulting firm that cultivates cultural competency, diversity, and leadership.</strong>
                    </Segment>                
                </Container> 
                <br/>
                <Container>
                    <Divider horizontal style={{marginBottom: '35px'}}>Where we make a difference</Divider>
                </Container>
                <Container style={{display: 'flex', justifyContent: 'center'}}>
                    <List vertical size='huge'>
                        <List.Item style={{marginBottom: '20px'}}>
                          <Icon name='graduation' size='big' color='purple'/>
                          <List.Content style={{paddingLeft: 0}}>
                            <List.Header>Higher Education</List.Header>
                            Innovate academics
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
                </Container>
            </div>
        );
    }
}

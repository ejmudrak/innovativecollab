/* page.js -- awareness-mindfulness
Author: Erik Mudrak - Fall 2017 
+ Implements Cultural Awareness And Mindfulness page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';
import { Container, Divider } from 'semantic-ui-react';


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Cultural Awareness & Mindfulness</div>
                <div className={styles.headingLine} />
                <Container text>
                    <p>Innovative Collaborations is a consulting firm that cultivates cultural competency, diversity, and leadership for teams and work environments.</p>
                </Container> 
                <Divider section style={{marginLeft: '15em', marginRight: '15em'}}/>                
                <Container text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </Container> 
            </div>
        );
    }
}

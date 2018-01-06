/* page.js -- efficacy
Author: Erik Mudrak - Fall 2017 
+ Implements Efficacy page of app
*/

// Imports:
import React from 'react';
import { browserHistory, withRouter } from 'react-router';
import styles from "../../components/pages.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Image, Segment } from 'semantic-ui-react';


export default class LeadershipPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Leadership</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'><strong>A different dynamic is essential.</strong></Segment>
                    <Segment size='large'>
                        <p><strong>Leadership</strong> is a “a process whereby an individual influences a group of individuals to achieve a common goal”</p>
                        <p className={styles.source}>Northouse, 2010</p>
                    </Segment>
                    <Segment size='large'>
                        <p>A group of individuals include a diverse representation. Therefore, learning and knowing all people is vital to success.</p>
                        <p>Additionally, goal orientation would be equally critical. Therefore, this takes a creative approach within this landscape.</p> 
                        <p><strong>We can guide you in achieving this combination.</strong> A different dynamic is essential. It is beyond just time management and goal setting.</p>
                    </Segment>
                </Container>
                <br />
            </div>
        );
    }
}

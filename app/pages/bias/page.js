/* page.js -- bias
Author: Erik Mudrak - Fall 2017 
+ Implements Unconscious Bias page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "../../components/pages.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Segment } from 'semantic-ui-react';


export default class BiasPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Unconscious Bias</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'><strong>A bias that we are unaware of, and which happens outside of our control.</strong></Segment>
                    <Segment size='large'>
                        <p><strong>Unconscious bias </strong>refers to a bias that happens automatically and is triggered by our brain making quick judgments and assessments of people and situations, influenced by our background, cultural environment and personal experiences.</p>
                        <p className={styles.source}>ECU: 2013 Unconscious bias in higher education</p>
                    </Segment>
                </Container>
            </div>
        );
    }
}

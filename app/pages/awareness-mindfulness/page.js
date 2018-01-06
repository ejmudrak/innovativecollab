/* page.js -- awareness-mindfulness
Author: Erik Mudrak - Fall 2017 
+ Implements Cultural Awareness And Mindfulness page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "../../components/pages.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Segment } from 'semantic-ui-react';

export default class AwarenessPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Cultural Awareness & Mindfulness</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'><strong>To culturally be mindful and aware.</strong></Segment>
                    <Segment size='large'>
                        <p><strong>Mindfulness</strong> is a state of conscious awareness in which the individual is implicitly aware of the context and content of information.</p>
                        <p>It is a state of openness to novelty in which the individual actively constructs categories and distinctions.</p>
                        <p>In contrast, <i>mindlessness</i> is a state of mind characterized by an overreliance on categories and distinctions drawn in the past and in which the individual is context-dependent and, as such, is oblivious to novel (or simply alternative) aspects of the situation.</p>
                        <p className={styles.source}>Langer, 1992: 289</p>
                    </Segment>
                </Container> 
            </div>
        );
    }
}

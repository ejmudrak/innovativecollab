/* page.js -- intersectionality
Author: Erik Mudrak - Fall 2017 
+ Implements Intersectionality page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "../../components/pages.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Segment } from 'semantic-ui-react';


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Intersectionality</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'><strong>The complex factors of social identity</strong></Segment>
                    <Segment size='large'>
                        <p><strong>Intersectionality: </strong>The theory that the overlap of various social identities, as race, gender, sexuality, and class, contributes to the specific type of systemic oppression, privilege and discrimination experienced by an individual.</p>
                        <p className={styles.source}>Crenshaw, 1989</p>
                    </Segment>
                </Container>
            </div>
        );
    }
}

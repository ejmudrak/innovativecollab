/* page.js -- efficacy
Author: Erik Mudrak - Fall 2017 
+ Implements Efficacy page of app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';
import { Container, Divider, Image, Segment } from 'semantic-ui-react';


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <div className={styles.pageHeading}>Cross-Cultural Efficacy</div>
                <div className={styles.headingLine} />
                <Container text>
                    <Segment textAlign='center' size='huge' color='blue'><strong>Understanding differences in culture</strong></Segment>
                    <Segment size='large'>
                        <p><strong>Cross-cultural efficacy:</strong> a term that implies that the caregiver or service provider such as a teacher is effective in interactions that involve individuals of different cultures through the neutral view of neither the
                            caregiver’s nor the patient’s culture is the preferred or more accurate view.</p>
                        <p>This term is adaptable to the academic sector by applying it to the learning environment to the dynamic of the teacher and student. It is also applicable to the business sector with management and team members.</p>
                        <p className={styles.source}>Nunez, 2000</p>
                    </Segment>
                    <Segment size='large'>
                        <p>Additionally, Cross-Cultural/Intersectional Efficacy involves diverse cultures and the intersections of social identities such as race, sex, gender and sexual identity.</p>
                        <Image size='huge' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                        <br />
                        <p className={styles.source}>Barber & Overton, 2017</p>
                    </Segment>
                </Container>
                <br />
            </div>
        );
    }
}

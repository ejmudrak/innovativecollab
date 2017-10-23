/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';


export default class EfficacyPage extends React.Component {
    constructor(props) {
        super(props);
        // state = {
        //     about: false,
        // }
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <h1>Efficacy</h1>
            </div>
        );
    }
}

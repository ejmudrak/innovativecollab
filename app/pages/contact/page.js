/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';


export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        // state = {
        //     about: false,
        // }
    }
    render () {
        return (
            <div className={styles.mainCard}>
                <h1>Contact Us</h1>
            </div>
        );
    }
}

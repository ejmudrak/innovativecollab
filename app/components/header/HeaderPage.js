
import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './header.css';
import { Card, Button, Container, Divider, Header, Icon, Image, Item, Menu, Segment } from 'semantic-ui-react';

export default class HeaderPage extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         activeItem: 'home',
       }
   }

  handleMenuClick = (e, { name }) => {
      this.setState({ activeItem: name });
      browserHistory.push('/' + name);
  }

  render() {
      console.log("Location: ", this.props.location);
      const { activeItem } = this.state;
      return (
        <div id="container">
            {/* FIRST SECTION: HOME */}
            <div id='home' className={styles.landing}>
              <Menu className={styles.menu} pointing secondary color={'yellow'}>
                <Menu.Menu position='right'>
                  <Menu.Item className={styles.menuItem} content='Home' name='home' active={activeItem === 'home'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='About' name='about' active={activeItem === 'about'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Cultural Awareness & Mindfulness' name='awareness-mindfulness' active={activeItem === 'awareness-mindfulness'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Cross-Cultural Efficacy' name='efficacy' active={activeItem === 'efficacy'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Intersectionality' name='intersectionality' active={activeItem === 'intersectionality'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Contact' name='contact' active={activeItem === 'contact'} onClick={this.handleMenuClick} />
                </Menu.Menu>
              </Menu>
              <h1 className={styles.heading}>Innovative Collaboration</h1>
            </div>
        </div>
       );
    }
}

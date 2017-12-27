
import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './header.css';
import { Card, Button, Container, Divider, Header, Icon, Image, Item, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Logo from '../../assets/logo-color.png';
import MediaQuery from 'react-responsive';


export default class HeaderPage extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         activeItem: 'home',
         visible: false,
       }
   }

  handleMenuClick = (e, { name }) => {
      this.setState({ activeItem: name });
      browserHistory.push('/' + name);
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
      console.log("Location: ", this.props.location);
      const { activeItem, visible } = this.state;
      return (
        <div id="container">
            {/* FIRST SECTION: HOME */}
            <div id='home' className={styles.landing}>
            <MediaQuery query='(min-device-width: 985px)'>
              <Menu className={styles.menu} pointing secondary color={'yellow'}>
                <Menu.Menu position='right'>
                  <Menu.Item className={styles.menuItem} content='Home' name='home' active={activeItem === 'home'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='About IC' name='about' active={activeItem === 'about'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Cultural Awareness & Mindfulness' name='awareness-mindfulness' active={activeItem === 'awareness-mindfulness'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Cross-Cultural Efficacy' name='efficacy' active={activeItem === 'efficacy'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Intersectionality' name='intersectionality' active={activeItem === 'intersectionality'} onClick={this.handleMenuClick} />
                  <Menu.Item className={styles.menuItem} content='Unconscious Bias' name='bias' active={activeItem === 'bias'} onClick={this.handleMenuClick} />
                </Menu.Menu>
              </Menu>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 984px)'>
              { visible ? 
                ( <Icon style={{float: 'right', color: 'white', margin: '10px'}} name='close' size='big' onClick={this.toggleVisibility} /> )
                :
                ( <Icon style={{float: 'right', color: 'white', margin: '10px'}} name='bars' size='big' onClick={this.toggleVisibility} /> )
              }
              <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted >
                <Menu.Item className={styles.menuItem} style={{marginRight: 0}} content='Home' name='home' active={activeItem === 'home'} onClick={this.handleMenuClick} />
                <Menu.Item className={styles.menuItem} content='About IC' name='about' active={activeItem === 'about'} onClick={this.handleMenuClick} />
                <Menu.Item className={styles.menuItem} content='Cultural Awareness & Mindfulness' name='awareness-mindfulness' active={activeItem === 'awareness-mindfulness'} onClick={this.handleMenuClick} />
                <Menu.Item className={styles.menuItem} content='Cross-Cultural Efficacy' name='efficacy' active={activeItem === 'efficacy'} onClick={this.handleMenuClick} />
                <Menu.Item className={styles.menuItem} content='Intersectionality' name='intersectionality' active={activeItem === 'intersectionality'} onClick={this.handleMenuClick} />
                <Menu.Item className={styles.menuItem} content='Unconscious Bias' name='bias' active={activeItem === 'bias'} onClick={this.handleMenuClick} />
              </Sidebar>
            </MediaQuery>

              <div>
                <h1 className={styles.heading}>Innovative Collaboration</h1>
                {/*<img src={Logo} />*/}
              </div>
            </div>
        </div>
       );
    }
}

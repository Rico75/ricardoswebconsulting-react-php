import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SideNavigation.scss';
//console.log('side s: ', s);

class SideNavigation extends Component {

  render() {
    return (
      <div className={ s.root }>
        <Nav className={ s['nav-stacked'] + ' ' + s.nav } activeKey={1}>
          <NavItem eventKey={1} href="/" title="Item">Site Sample 1</NavItem>
          <NavItem eventKey={2} href="/" title="Item">Site Sample 2</NavItem>
          <NavItem eventKey={3} href="/" title="Item">Site Sample 3</NavItem>
          <NavItem eventKey={4} href="/" title="Item">Site Sample 4</NavItem>
          <NavItem eventKey={5} href="/" title="Item">Site Sample 5</NavItem>
        </Nav>
      </div>
    );
  }

}
export default withStyles(SideNavigation, s);

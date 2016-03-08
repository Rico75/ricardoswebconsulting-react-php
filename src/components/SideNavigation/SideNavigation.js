import React, { PropTypes, Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SideNavigation.scss';

class SideNavigation extends Component {

  static propTypes = {
    NavItem: PropTypes.string,
  };

  handleSelect = function (selectedKey) {
    event.preventDefault();
    console.log('selected ', selectedKey);
  };

  render() {
    return (
      <Nav className={s['nav-stacked']} activeKey={NavItem.eventKey} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home" title="Item">Site Sample 1</NavItem>
        <NavItem eventKey={2} href="/home" title="Item">Site Sample 2</NavItem>
        <NavItem eventKey={3} href="/home" title="Item">Site Sample 3</NavItem>
        <NavItem eventKey={4} href="/home" title="Item">Site Sample 4</NavItem>
        <NavItem eventKey={5} href="/home" title="Item">Site Sample 5</NavItem>
      </Nav>
    );
  }

}
export default withStyles(SideNavigation, s);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import FontsPanel from './sub-components/FontsPanelMini';
import AssetManagerSection from './sub-components/AssetManagerSection';


class ComposeBar extends Component {
  render() {
    return (
      <section className="ComposeBar">
        <input type="text" placeholder="Your Message"></input>
      </section>
    );
  }
}

export default ComposeBar;

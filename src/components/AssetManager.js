import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import FontsPanel from './sub-components/FontsPanelMini';
import AssetManagerSection from './sub-components/AssetManagerSection';


class AssetManager extends Component {
  render() {
    return (
      <section className="AssetManager">
        <FontsPanel />
        <hr />
        <AssetManagerSection sectionName="Team" />
      </section>
    );
  }
}

export default AssetManager;

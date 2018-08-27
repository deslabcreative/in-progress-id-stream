import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import AssetManagerSection from './AssetManagerSection';

class FontsPanelMini extends Component {
    render() {
      return (
        <div>
            <AssetManagerSection sectionName="Fonts" />
            <AssetManagerSection sectionName="Colours" />
            <AssetManagerSection sectionName="Graphics" />
            <AssetManagerSection sectionName="Icons" />
            <AssetManagerSection sectionName="Photo / Video" />
            
        </div>
      );
    }
  }
  
  export default FontsPanelMini;
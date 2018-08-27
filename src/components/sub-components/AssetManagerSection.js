import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

class AssetManagerSection extends Component {
    render() {
      return (
        <div className="AssetManagerWrap">
            <section className="AssetManagerSection">
                <h3>{this.props.sectionName}</h3>
                <h4>Edit</h4>
            </section>
        </div>
      );
    }
  }
  
  export default AssetManagerSection;
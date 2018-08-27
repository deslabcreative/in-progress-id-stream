import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

class BubbleLeft extends Component {
    render() {
      return (
        <div className="MessageBubble left">
            <div className="Message">
                <b>{this.props.Name}</b><br />
                <span>{this.props.MessageContent}</span><br />
                <span className="grey">attachment: {this.props.AttachmentTitle}</span>
            </div>
            <div className="AttachmentPreview">
                {this.props.Attachment}
            </div>
        </div>
      );
    }
  }
  
  export default BubbleLeft;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import BubbleLeft from './sub-components/BubbleLeft';


class MessageStream extends Component {
  render() {
    return (
      <section className="MessageStream">
        <BubbleLeft Name="Bob Doe" MessageContent="Lorum Ipsum Dolor Pene Pasta" AttachmentTitle="logo.png"/>
        <BubbleLeft Name="Bob Doe" MessageContent="Lorum Ipsum Dolor Pene Pasta" AttachmentTitle="logo.png"/>
        <BubbleLeft Name="Bob Doe" MessageContent="Lorum Ipsum Dolor Pene Pasta" AttachmentTitle="logo.png"/>
        <BubbleLeft Name="Bob Doe" MessageContent="Lorum Ipsum Dolor Pene Pasta" AttachmentTitle="logo.png"/>
      </section>
    );
  }
}

export default MessageStream;

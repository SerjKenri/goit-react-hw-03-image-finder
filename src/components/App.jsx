import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import { ImageGallery } from "./ImageGallery/ImageGallery";

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    request: '',
  }

  handleFormSubmit = request => {
    this.setState({request})
  }

  render () {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery request={this.state.request}/>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover
      theme="colored"
      />
    </div>
  );}
};

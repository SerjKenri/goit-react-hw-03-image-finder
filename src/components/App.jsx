import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar />
    </div>
  );
};

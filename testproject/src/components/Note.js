import React, { Component } from 'react';

const Note = ({ note }) => {
    return (
      <li>{note.content}</li>
    )
  }
  

export default Note;
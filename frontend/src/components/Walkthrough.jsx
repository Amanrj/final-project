// Walkthrough.js
import React, { useState } from 'react';
import Tour from 'reactour';

const Walkthrough = ({ isOpen, onRequestClose }) => {
  const steps = [
    {
      selector: '.navbar-brand',
      content: 'This is the website logo.',
    },
    {
      selector: '.navbar-nav',
      content: 'These are the navigation links.',
    },
    {
      selector: '.rounded-circle',
      content: 'These are Your Profile.',
    },
    {
      selector: '.log-out',
      content: 'Logout profile.',
    },
    // Add more steps as needed
  ];

  return (
    <Tour steps={steps} isOpen={isOpen} onRequestClose={onRequestClose} />
  );
};

export default Walkthrough;

import React, { Component } from 'react';

import MainLayout from './modules/main/MainLayout';
import MeetingLayout from './modules/meeting/MeetingLayout';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <MeetingLayout />
      </MainLayout>
    );
  }
}

export default App;

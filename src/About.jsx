import React from 'react';
import Header from './Header'; // ✅ Required import

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <h1>About</h1>
      </div>
    );
  }
}

export default About;

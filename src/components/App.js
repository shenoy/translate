import React from 'react';

class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        App
      <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App; 
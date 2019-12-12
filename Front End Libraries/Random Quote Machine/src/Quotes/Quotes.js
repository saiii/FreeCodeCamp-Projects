import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    quotes: null,
    color: null,
    randomNumber: null
  }

  componentDidMount() {
    axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
    .then(response => {
      this.setState({quotes: response.data.quotes});
      this.setState({randomNumber: Math.floor(Math.random() * this.state.quotes.length)});
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
      if (this.state.randomNumber !== nextProps.randomNumber) {
          return true;
      }
  }
  randomHandler = () => {
    this.setState({randomNumber: Math.floor(Math.random() * this.state.quotes.length)});
  }

  render() {
    let quote = <p id='text'>Loading</p>;
    let author = <p id='author'>Loading</p>;
    
    if (this.state.quotes) {
      quote = <p id='text'>{this.state.quotes[Number(this.state.randomNumber)].quote}</p>
      author = <p id='author'>{this.state.quotes[Number(this.state.randomNumber)].author}</p>
    }
    return (
      <div>
        {quote}
        {author}
        <button onClick={this.randomHandler}>New quote</button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import classes from './Quotes.module.css';

class App extends React.Component {
  state = {
    quotes: null,
    color: null,
    randomNumber: null,
    colors: ['#fa3c5a', '#447ac4', '#5e73d1', '#194052', '#2d999f', '#ff7142', '#db7164', '#aabec2', '#e3c5fd', '#84d8f1'],
    randomColor: null
  }

  componentDidMount() {
    axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
    .then(response => {
      this.setState({quotes: response.data.quotes});
      this.setState({randomNumber: Math.floor(Math.random() * this.state.quotes.length)});
    });
    this.setState({randomColor: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]})
  }
  shouldComponentUpdate(nextProps, nextState) {
      if (this.state.randomNumber !== nextProps.randomNumber) {
          return true;
      }
  }
  randomHandler = () => {
    this.setState({randomNumber: Math.floor(Math.random() * this.state.quotes.length)});
    this.setState({randomColor: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]})
  }

  render() {
    let quote = <p id='text'>Loading</p>;
    let author = <p id='author'>Loading</p>;
    let twitter = null;
    if (this.state.quotes) {
        document.body.style.backgroundColor = this.state.randomColor;
        
      quote = <p id='text' className={classes.Text} style={{color: this.state.randomColor}}><span>"</span>{this.state.quotes[Number(this.state.randomNumber)].quote}</p>;
      author = <p id='author' className={classes.Author} style={{color: this.state.randomColor}}>- {this.state.quotes[Number(this.state.randomNumber)].author}</p>;
      twitter = 'https://twitter.com/intent/tweet?hashtags=quotes&text="'+this.state.quotes[Number(this.state.randomNumber)].quote+'" '+this.state.quotes[Number(this.state.randomNumber)].author;
    }
    return (
      <div className={classes.Quotes}>
        <p></p>
        {quote}
        {author}
        <div className={classes.Button}>
            <div className={classes.SocialMedia}>
                <a href={twitter}  target='_blank' style={{backgroundColor: this.state.randomColor}}><div><i class='fab fa-twitter'></i></div></a>
                <a href="/" style={{backgroundColor: this.state.randomColor}}><div><i class="fab fa-tumblr"></i></div></a>
            </div>
            <div>
                <button onClick={this.randomHandler} style={{backgroundColor: this.state.randomColor}}>New quote</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

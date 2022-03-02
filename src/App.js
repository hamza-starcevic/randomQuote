import React from "react";
import "./App.css";
import ReactFCCtest  from  'react-fcctest';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        [
          "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
          "Toni Morrison",
        ],
        [
          "We write to taste life twice, in the moment and in retrospect.",
          "Annais Nin",
        ],
        [
          "One day I will find the right words, and they will be simple.",
          "Jack Kerouac",
        ],
        ["You can make anything by writing", "C.S. Lewis"],
      ],
    };
  }
  render() {
    let random = Math.floor(Math.random() * (3 + 1));
    console.log(random);
    return (
      <div className="Center">
        <ReactFCCtest></ReactFCCtest>
        <QuoteBox
          quote={this.state.quote[random][0]}
          author={this.state.quote[random][1]}
        />
      </div>
    );
  }
}

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <div className="wall" id="top">
          <p id="text">{this.props.quote}</p>
        </div>
        <div className="wall" id="bot">
          <div id="author"><p id='auth'>{this.props.author}</p></div>
          <div className='tnew' id='tweet'><a href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a></div>
          <div className='tnew' id='new'><a href="javascript:void(0)" id='new-quote'>New</a></div>
        </div>
      </div>
    );
  }
}


<div>
  <p>
    silly
  </p>
</div>


export default App;

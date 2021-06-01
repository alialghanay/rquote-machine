import React, { Component } from 'react';
import './App.scss';
import COLORARR from './colorArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const quoteHClass = [
  {author: "social-media@alialghanay", quote: "{this is quoteApp designed by}"},
  {author: "J.D. Salinger, The Catcher in the Rye", quote: "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like i That doesn't happen much, though."},
  {author: "Thomas Mann, Essays of Three Decades", quote: "A writer is someone for whom writing is more difficult than it is for other people."},
  {author: "Mark Twain", quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."},
  {author: "Ann Landers", quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."},
  {author: "Leonardo da Vinci", quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."},
  {author: "Christopher Columbus", quote: "You can never cross the ocean until you have the courage to lose sight of the shore."},
  {author: "Stephen Covey", quote: "I am not a product of my circumstances. I am a product of my decisions."},
  {author: "Jesus", quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."},
  {author: "Steve Jobs", quote: "The only way to do great work is to love what you do."},
  {author: "Alice Walker", quote: "The most common way people give up their power is by thinking they don’t have any."},
  {author: "Frank Sinatra", quote: "The best revenge is massive success."},
  {author:"Osama elbasser", quote: "Where have you been on Fourth of April?"},
  {author: "G.K. Chesterton, Heretics", quote: "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author."}
];
const quoteArrLnFixed = quoteHClass.length - 1;
const colorArrLnFixed = COLORARR.length - 1;
const fixedRand = (arrFixedSize) => Math.floor(arrFixedSize*Math.random());
const rand = fixedRand(quoteArrLnFixed);
let qResult = quoteHClass[rand];
const objKeys = Object.keys(qResult);

class QuoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: quoteHClass.indexOf(qResult),
      quote: qResult[objKeys[1]],
      author: qResult[objKeys[0]],
      randColor: COLORARR[fixedRand(colorArrLnFixed)]
     }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(){
    let fixedRands = (arrFixedSize) => Math.floor(arrFixedSize*Math.random());
    let rands = fixedRands(quoteArrLnFixed);
    let q = (rands !== this.state.index ? rands : quoteArrLnFixed);  
    let qR = quoteHClass[q];
    const oKeys = Object.keys(qR);
    this.setState({
      index: quoteHClass.indexOf(qR),
      quote: qR[oKeys[1]],
      author: qR[oKeys[0]],
      randColor: COLORARR[fixedRands(colorArrLnFixed)]
    });
  }
  render() { 
    console.log(this.state.index);
    return ( 
      <div className="App" style={{backgroundColor: this.state.randColor}}>
          <div id="quote-box" style={{color: this.state.randColor}}>
            <p id="text">{this.state.quote}</p>
            <p id="author">- {this.state.author}</p>
            <button id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.state.randColor}}>NEW QUOTE</button>
            <a 
            id="tweet-quote" 
            target='_blank' 
            rel="noreferrer"
            href={
                `https://twitter.com/intent/tweet?text=${this.state.quote} -${this.state.author} `+
                 encodeURIComponent(`#quotes #FreeCodeCamp`)
                } 
            style={{backgroundColor: this.state.randColor}}
            >
              <FontAwesomeIcon icon={faTwitter} />
              </a>
          </div>
      </div>
     );
  }
}
export default QuoteApp; 
/*
readme saction:

- in last wednesday:
https://www.youtube.com/watch?v=EDWwhVoCvHM  30:00 min


*/
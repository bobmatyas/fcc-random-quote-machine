function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class QuoteContainer extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "newQuote",















    state => {
      let randomItem = Math.floor(Math.random() * 30);
      let randomQuote = this.state.data[randomItem].content;
      let randomAuthor = this.state.data[randomItem].title;
      this.setState({
        quote: randomQuote,
        author: randomAuthor });

    });this.state = { quote: 'Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that’s why it is so complicated.', author: 'Paul Rand', data: [] };this.newQuote = this.newQuote.bind(this);}componentDidMount() {console.log('The component is mounted');fetch('https://gist.githubusercontent.com/bobmatyas/156c3db431009ff36bd6215ef0a86dcf/raw/518f8b898b9150b6f1bd9c9d08034f80d45ef9f4/quotes.json').then(data => data.json()).then(data => this.setState({ data: data }));}


  render() {
    return (
      React.createElement("div", { id: "quote-box", class: "quote-container rounded mt-5 mb-5" },

      React.createElement("h1", { class: "display-4 design__quote__header" }, "Random Design Quote"),
      React.createElement(Quote, { quote: this.state.quote, author: this.state.author }),

      React.createElement("div", { class: "container mt-5" },
      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col" },
      React.createElement("button", { id: "new-quote", class: "btn btn-primary", onClick: this.newQuote }, "New Quote")),


      React.createElement("div", { class: "col-25" },
      React.createElement(QuoteTweet, { quote: this.state.quote }))))));





  }}


function Quote(props) {

  function createMarkup() {
    return { __html: props.quote };
  }

  return (
    React.createElement("div", null,
    React.createElement("blockquote", { id: "text", class: "blockquote text-center mt-5" },
    React.createElement("p", { class: "mb-0" }, "\"", React.createElement("span", { dangerouslySetInnerHTML: createMarkup() }), "\""),
    React.createElement("footer", { id: "author", class: "blockquote-footer" }, props.author))));



}


function QuoteTweet(props) {

  let encodedText = encodeURI(props.quote);

  return (
    React.createElement("p", null, React.createElement("a", { id: "tweet-quote", class: "btn btn-outline-secondary", href: "https://twitter.com/intent/tweet/{encodedText}" }, React.createElement("i", { class: "fab fa-twitter" }), " Share on Twitter")));

}


ReactDOM.render(React.createElement(QuoteContainer, null), document.getElementById('app'));
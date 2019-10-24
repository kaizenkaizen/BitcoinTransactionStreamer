import React from 'react';
import './App.css';
import TransactionTable from './TransactionTable';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       unconfirmed: [{
         time: "1571719348",
         txIndex: "502702928",
         hash: "190ca60f9558ea8c3d808ea960c575f43b57008c6e405abab69362983a301dd7"
       }]
     };
  }

  componentDidMount() {

    // open websocket connection to get blockchain transactions
    var webSock = new WebSocket("wss://ws.blockchain.info/inv");

    // websocket onopen event listener
    webSock.onopen = () => {
      console.log("on open");
      webSock.send(JSON.stringify({ "op": "unconfirmed_sub"}));
    };

    // websocket onclose event listener
    webSock.onclose = e => {
      console.log("on close called");
    };

    // websocket receives a message listener
    webSock.onmessage = e => {
      console.log("on message");
      console.log(e.data);
      var responseJSON = JSON.parse(e.data);

      // extract out data from transaction for table
      var transaction = {
        time: responseJSON.x.time,
        txIndex: responseJSON.x.tx_index,
        hash: responseJSON.x.hash
      };

      // we only want to show the top 10 transactions
      var newTopTen = this.state.unconfirmed.concat(transaction)
      if (newTopTen.length > 10){
        newTopTen.shift();
      }
      this.setState({ unconfirmed: newTopTen});

      // code to generate a set number of transactions before closing connection
      // var ran = Math.random();
      // console.log("ran is " + ran);
      // if (ran > 0.95) {
      //   webSock.close();
      // }

    };

    // websocket onerror event listener
    webSock.onerror = err => {
        console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket");

        webSock.close();
      };
    }


  render() {
    return (<TransactionTable unconfirmed = {this.state.unconfirmed}/>);
  }
}


export default App;

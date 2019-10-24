Create a Bitcoin transaction stream viewer for any desktop browser with React;
you can get a stream of Bitcoin transactions from
https://blockchain.info/api/api_websocket.
Examples include bitbonkers.com, bitlisten.com, bitcoinglobe.com,
bitcointicker.co/transactions, bitcointicker.co, realtimebitcoin.info,
coinlaunch.com, https://blockchain.info/unconfirmed-transactions and
https://explorer.bitcoin.com/btc. Take no more than four hours.

What Finished Bitcoing transaction stream viewer looks like:
![alt text](https://github.com/kaizenkaizen/BitcoinTransactionStreamer/blob/master/public/readme_image.png "What Project Looks Like")


First 30 minutes:
1. Looked at the API
2. We figured out the websocket protocol
3. Checked out example bitcoin transaction streaming sites
4. Installed yarn
5. Also looked at HTML pages using babel to inject react

Next 1 hour:
1. Use Yarn to install react app project
2. Create our own React Component
3. Added react component to our index.jsx page
4. We subscribed to unconfirmed transactions
5. Figured out websocket messages
6. Got sample transactions

Next 1 hour:
1. Try to create a table (Time of Transaction, Transaction Index, Hash)
2. Update the table whenever a new transaction comes in
3. Use React states


Next 1 hour:
1. Use react material UI to make everything look nice :)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

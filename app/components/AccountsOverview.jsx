import React from 'react';
import AccountsSelector from './AccountsSelector.jsx';
import AccountsActions from '../actions/AccountsActions';
import AccountsStore from '../stores/AccountsStore';

class AccountsOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
    this.onChange = () => this.setState(this.getState());
  }

  getState() {
    return AccountsStore.getState();
  }

  componentDidMount() {
    console.log('AccountSelector:componentDidMount')
    AccountsStore.listen(this.onChange);
    AccountsActions.getAccounts();
  }

  componentWillUnmount() {
    AccountsStore.unlisten(this.onChange);
  }

  onAccountChanged(accountId) {
    console.log('AccountsOverview:onAccountChanged', accountId)
  }

  render() {
    return (
      <div>
        <h1>Accounts overview</h1>
        <AccountsSelector accounts={this.state.accounts} selected={this.state.currentAccount} onAccountChanged={this.onAccountChanged} />
        <h2>Transactions</h2>
        <p>Show some transactions here ...</p>
      </div>
    );
  }
}

export default AccountsOverview

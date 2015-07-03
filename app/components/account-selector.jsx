import AccountsService from '../services/Accounts.js';
import React from 'react';

class AccountSelector extends React.Component {
  constructor() {
    super();
    console.log('AccountSelector:constructor')
    this.state = { accounts: AccountsService.getAll() };
  }

  render() {
    console.log('AccountSelector:render')

    var optionsNodes = this.state.accounts.map((account) => {
      return <option value={account.id}>{account.id}</option>
    });

    return <select>{optionsNodes}</select>
  }
}

export default AccountSelector

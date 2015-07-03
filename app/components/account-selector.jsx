import AccountsService from '../services/Accounts.js';
import React from 'react';

class AccountSelector extends React.Component {

  constructor(props) {
    super(props)
    console.log('AccountSelector:constructor')
    this.state = { accounts: [] }
  }

  componentDidMount() {
    console.log('AccountSelector:componentDidMount')
    this.setState({ accounts: AccountsService.getAll() })
  }

  render() {
    console.log('AccountSelector:render')

    var optionsNodes = this.state.accounts.map((account) => {
      return <option value={account.id}>{account.name} {account.id}</option>
    });

    return <select value={this.props.selected}>{optionsNodes}</select>
  }
}

export default AccountSelector

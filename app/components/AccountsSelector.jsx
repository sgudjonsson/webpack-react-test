import React from 'react';
import ReactDom from 'react-dom';

export default class AccountsSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onAccountChanged = (e) => { this.props.onAccountChanged(this.refs.accountSelector.value); }
  }

  render() {

    const optionsNodes = this.props.accounts.map((account) => {
      return <option key={account.id} value={account.id}>{account.name} {account.id}</option>
    });

    return (
      <select value={this.props.selected} ref="accountSelector" onChange={this.onAccountChanged}>{optionsNodes}</select>
    )
  }
}

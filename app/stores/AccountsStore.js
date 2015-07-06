const alt = require('../alt');
const AccountsActions = require('../actions/AccountsActions');

class AccountsStore {
  constructor() {
    this.accounts = [];

    this.bindListeners({
      onUpdateAccounts: AccountsActions.UPDATE_ACCOUNTS,
      onGetAccounts: AccountsActions.GET_ACCOUNTS
    });
  }

  onUpdateAccounts(accounts) {
    this.accounts = accounts;
    // optionally return false to suppress the store change event
  }

  onGetAccounts() {
    this.accounts = [];
  }

}

export default alt.createStore(AccountsStore, 'AccountsStore');

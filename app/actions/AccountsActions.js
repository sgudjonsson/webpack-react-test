import alt from '../alt';
import AccountsService from '../services/Accounts.js';

class AccountsActions {
  updateAccounts(accounts) {
    this.dispatch(accounts);
  }

  getAccounts() {
    this.actions.updateAccounts(AccountsService.getAll());
  }
}

export default alt.createActions(AccountsActions);

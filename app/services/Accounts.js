class AccountsService {
  constructor() {

  }

  getAll() {
    return [{
      id:'010226123456',
      name: 'Tékkareikningur'
    },{
      id:'010205000001',
      name: 'Vaxtareikningur'
    }, {
      id:'010205012345',
      name: 'Kjörbók'
    }];
  }
}


export default new AccountsService();

const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Caue',
    email: 'teste@teste.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Caue 1',
    email: 'teste1@teste.com',
    phone: '12312312',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find(((contact) => contact.id === id)));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
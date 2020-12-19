// 3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей в объекте users и возврата количества пользователей, для которых для свойства онлайн установлено значение true.

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function countOnline(obj) {
  let onlineUsers = 0;
  for (let user in obj) {
    if (users[user].online === true) {
      onlineUsers++;
    }
  }
  return onlineUsers;
}

console.log(countOnline(users));

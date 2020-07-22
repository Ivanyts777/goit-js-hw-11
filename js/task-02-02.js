const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    }, 0);
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Повинно працювати так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

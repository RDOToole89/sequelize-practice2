const User = require("../models").user;
const TodoList = require("../models").todoList;
const TodoItem = require("../models").todoItem;
const { Op } = require("sequelize");

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

// createSampleTodoItems().then((todos) => console.log(todos));

const findAllUsers = async () => {
  try {
    const allUsers = await User.findAll();

    console.log(allUsers.map((user) => user.get({ plain: true })));
  } catch (error) {
    console.log(error);
  }
};

// findAllUsers();

const findUserByKey = async () => {
  try {
    const user = await User.findByPk(1);

    console.log(user.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
};

// findUserByKey();

const createNewUser = async () => {
  try {
    const newUser = await User.create({
      name: "Some Dude",
      email: "dude@gmail.com",
      phone: 123456789,
      password: "test",
    });

    console.log(newUser.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
};

// createNewUser();

const findImportantTodo = async () => {
  try {
    const importantTodo = await TodoItem.findAll({ where: { important: true } });
    console.log(importantTodo.map((todo) => todo.get({ plain: true })));
  } catch (error) {
    console.log(error);
  }
};

// findImportantTodo();

const finderUsersWithNewsletter = async () => {
  try {
    const userWithNewsletter = await User.findAll({ where: { newsletter: true } });
    console.log(userWithNewsletter.map((user) => user.get({ plain: true })));
  } catch (error) {
    console.log(error);
  }
};

// finderUsersWithNewsletter();

const findUsersByHeight = async (height) => {
  try {
    const userTallerThan = await User.findAll({
      where: {
        height: {
          [Op.gte]: 180,
        },
      },
    });

    const tallUsers = userTallerThan.map((user) => user.get({ plain: true }));
    console.log("TALL USER:", tallUsers);

    // userTallerThan.map((user) => {
    //   console.log("TALLUSERS MAP", user.get({ plain: true }));
    // });
  } catch (error) {
    console.log(error);
  }
};

findUsersByHeight();

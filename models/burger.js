const orm = require("../config/orm.js");

const burger = {
  all: (callback) => {
    orm.all("burgers", (res) => {
      console.log(res);
      callback(res);
    });
  },

  create: (columns, values, callback) => {
    orm.create("burgers", columns, values, (res) => {
      console.log("res in burger.js create: " + res);
      callback(res);
    });
  },

  update: (objectColumnsValues, condition, callback) => {
    // console.log("callback");
    // console.log(callback);
    orm.update("burgers", objectColumnsValues, condition, (res) => {
      // console.log("hello from inside burger.js update")
      // console.log(res);
      callback(res);
      // console.log(res);

    });
  },

  delete: (condition, callback) => {
    orm.delete("burgers", condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;

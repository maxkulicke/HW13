const orm = require("../config/orm.js");

const burger = {
  all: (callback) => {
    orm.all("burgers", (res) => {
      callback(res);
    });
  },

  create: (columns, values, callback) => {
    orm.create("burgers", columns, values, (res) => {
      callback(res);
    });
  },

  update: (objectColumnsValues, condition, callback) => {
    orm.update("burgers", objectColumnsValues, condition, (res) => {
      callback(res);
    });
  },

  delete: (condition, callback) => {
    orm.delete("burgers", condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;

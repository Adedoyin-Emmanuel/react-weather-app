/**
 * Database.js
 * Backend localstorage connector
 */

class Database {
  constructor() {
    this.dbName = "weather-app";

    this.create = (key, value) => {
      if (key === undefined || value === undefined) {
        throw new Error("Database key and value must be declared");
      }
      localStorage.setItem(key, value);
    };

    this.delete = (key) => {
      if (key === undefined) {
        throw new Error("Database key and value must be declared");
      }
      localStorage.removeItem(key);
    };

    this.update = (key, value) => {
      this.create(key, value);
    };

    this.get = key => {
      return localStorage.getItem(key);
    };

    this.countItems = () => {
      return localStorage.length;
    };

    this.destroy = () => {
      localStorage.clear();
    };
  }
}


export default Database;
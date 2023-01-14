/**
 * Database.js
 * Backend localstorage connector
 */

class Database {
  constructor() {
    this.dbName = "weather-app";

    this.addItem = (key, value) => {
      if (key === undefined || value === undefined) {
        throw new Error("Database key and value must be declared");
      }
      localStorage.setItem(key, value);
    };

    this.removeItem = (key) => {
      if (key === undefined) {
        throw new Error("Database key and value must be declared");
      }
      localStorage.removeItem(key);
    };

    this.updateItem = (key, value) => {
      this.addItem(key, value);
    };

    this.destroy = () => {
      localStorage.clear();
    };
  }
}

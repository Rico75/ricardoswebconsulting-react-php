import db from 'promise-mysql';
import Promise from 'bluebird';
import { databaseUrl, databaseUser, databasePassword, database } from '../config';

let connection;

// TODO: Customize database connection settings
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
db.ssl = true;
db.poolSize = 2;
db.application_name = 'RSK';
/* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */

/**
 * Promise-based wrapper for mysql.Client
 */
function AsyncClient(client) {
  this.client = client;
  this.query = this.query.bind(this);
  this.end = this.end.bind(this);
}

AsyncClient.prototype.query = function query(sql, ...args) {
  return new Promise((resolve, reject) => {
    if (args.length) {
      this.client.query(sql, args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      this.client.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};

AsyncClient.prototype.end = function end() {
  this.client.end();
};

/**
 * Promise-based wrapper for mysql.connect()
 */
db.connect = (connect => callback => new Promise((resolve, reject) => {
  connect.createConnection({
    host: databaseUrl,
    user: databaseUser,
    password: databasePassword,
    database: database
  }).then(function(conn){
    connection = conn;
    console.log('Connected successfully');
  });
}))(db.connect);

export default db;

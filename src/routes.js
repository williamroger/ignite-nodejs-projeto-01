import { randomUUID } from 'node:crypto';
import { Database } from './database.js';

const database = new Database();

export const routes = [
  {
    methode: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = database.select('users');

      return response.end(JSON.stringify(users));
    }
  },
  {
    methode: 'POST',
    path: '/users',
    handler: (req, res) => {
      const { name, email } = request.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert('users', user);

      return response.writeHead(201).end();
    }
  }
];
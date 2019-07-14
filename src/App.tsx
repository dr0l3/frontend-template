import * as React from 'react';
import logo from './logo.svg';
import { Query } from 'react-apollo'
import './App.css';
import listUsersQuery from './queries/listUsersQuery'
import { listUsers, listUsers_users } from './queries/types/listUsers'

class UsersQuery extends Query<listUsers, null> {}

const App: React.FC = () => {
  return (
    <UsersQuery query={listUsersQuery}>
      {({data, loading,error}) => (
        <React.Fragment>
          <h1> Users </h1>
          {data && data.users && data.users.map(user => (
            <div>
              <div>Name: {user && user.name}</div>
              <div>Email: {user && user.email}</div>
            </div>
          ))}
        </React.Fragment>
      )
    }
    </UsersQuery>
  );
}

export default App;

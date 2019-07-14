import * as React from 'react';
import logo from './logo.svg';
import { Query } from 'react-apollo'
import './App.css';
import listUsersQuery from './queries/listUsersQuery'
import { listUsers, listUsers_users } from './queries/types/listUsers'
import { Card, Icon, Image } from 'semantic-ui-react'


class UsersQuery extends Query<listUsers, null> {}

const App: React.FC = () => {
  return (
    <UsersQuery query={listUsersQuery}>
      {({data, loading,error}) => (
        /*<React.Fragment>
          <h1> Users </h1>
          {data && data.users && data.users.map(user => (
            <div>
              <div>Name: {user && user.name}</div>
              <div>Email: {user && user.email}</div>
            </div>
          ))}
        </React.Fragment>*/
        <React.Fragment>
        {data && data.users && data.users.map(user => (
          <Card>
            <Card.Content>
              <Card.Header>
                {user && user.name}
              </Card.Header>
            </Card.Content>
            <Card.Description>
              Email: {user && user.email}
            </Card.Description>
          </Card>
        ))}
        </React.Fragment>
      )
    }
    </UsersQuery>
  );
}

export default App;

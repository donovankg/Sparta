import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sparta database</h2>
          <h4>User Name <input/> Password <input/></h4>
          <button>login / logout</button>

        </div>
        <p className="App-intro">
        <button>Add person</button>

        <table>
          <thead>
            <th>
              Edit
            </th>
            <th>
              Delete
            </th>
            <th>
              title
            </th>
            <th>
              first initial
            </th>
            <th>
              Last Name
            </th>
            <th>
              Branch
            </th>
            <th>
              City
            </th>
            <th>
              state
            </th>
            <th>
              number
            </th>
          </thead>
          <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td>sir</td>
            <td>T</td>
            <td>Smith</td>
            <td>Army</td>
            <td>Dallas</td>
            <td>Tx</td>
            <td>555-5550</td>
          </tr>
          <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td>Maam</td>
            <td>A</td>
            <td>Horn</td>
            <td>Army Reserves</td>
            <td>Garland</td>
            <td>Ok</td>
            <td>555-5551</td>
          </tr>
          <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td>sir</td>
            <td>A</td>
            <td>Green</td>
            <td>Navy</td>
            <td>Orlando</td>
            <td>Fl</td>
            <td>555-5552</td>
          </tr>
          <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td>Maam</td>
            <td>T</td>
            <td>Smith</td>
            <td>Air Force</td>
            <td>Greenville</td>
            <td>Tx</td>
            <td>555-5554</td>
          </tr>


        </table>

        </p>
      </div>
    );
  }
}

export default App;

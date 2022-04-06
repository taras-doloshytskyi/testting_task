import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import * as data from './data.json';
import avatar from './avatar.png';


const { nodes } = data;

const uniqueArr = [...new Map(nodes.map(item =>[item.user.name, item])).values()]




function App() {
  const [search, setSearch] = useState('');
  return (
    
      <div className="clearfix">
        <header className="clearfix mt-4">
          <h1 className="header_text">LIST OF THE USERS</h1>
          </header>
          <div className="searchbar">
            <input className="form-control" type = "text" placeholder = "Search..." onChange={event => {setSearch(event.target.value)}}/>
          </div>
        <div className="row">
          {nodes.filter((val) => {
            if(search == ""){
              return val
            }
            else if(val.user.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map(data => (
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div>
                    <p>Created by: {data.spentAt}</p>
                  </div>
                   <div className="avatar">
                    <img
                      src={avatar}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.user.name}
                  </h5>
                  <div>
                   {}
                  </div>
                    <br />
                    <span className="phone">{data.issue.webUrl}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default App;

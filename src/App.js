import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const Getuser = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      setUser(await response.json());
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

    useEffect(() => {
      Getuser();
    }, []);

    if (loading) {
      return <Loading />;
    }

    return (
      <>
      <h2 className="heading">Github Users Profile</h2>
        <div className="row newrow">
          {user.map((curEle) => {
            const { id, login, avatar_url, node_id,html_url } = curEle;
              return (
              <div className="card" key={id}>
                <img src={avatar_url} alt="John" />
                <h1>{login}</h1>
                <p className="title">{node_id}</p>
                <p>ID:{id}</p>
                <p>
                  <a href={html_url} target="_blank" rel="noreferrer" ><button className="btnb">Contact</button></a>
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  };


export default App;

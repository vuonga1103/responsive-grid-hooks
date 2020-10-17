import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import PplCard from "./PplCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // JS executes code synchronously / is single-threaded, but we can call async things into our code by setting async function: we can send out a call to request info / we ask for a promise and we wait for the promise to resolve
    async function fetchData() {
      setUsers(
        // by adding await here we are telling JS to stop here and wait for the fetch to resolve; otherwise it will keep on running
        await fetch("https://reqres.in/api/users?page=2")
          .then((res) => res.json())
          .then((res) => res.data)
          .catch((err) => console.log(err, "Fetch warning!!"))
      );
    }

    fetchData();
  }, []); // setting [] ensures that useEffect() only runs one time when component mounts; if we don't have it useEffect() will keep running; we can also add a variable in the arr, in which case useEffect() will executive everytime that variable changes

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
      {/* Outer grid */}
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {/* ex: when small, each card will span 12 columns (12/12 = 1 card will spans the screen); when xl, each card will span 3/12 columns (12/3 = 4 cards will span the screen)*/}

        {users.map((user) => {
          return (
            <Grid item xs={12} sm={6} m={4} lg={4} xl={3}>
              <PplCard />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;

import { useState } from "react";
import { puppyList } from "./data.js";
import "./path-to-css.css";
import "./App.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        <div className="puppy-list">
          {puppies.map((puppy) => {
            return (
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
                className="puppy-item"
              >
                {puppy.name}
              </p>
            );
          })}
        </div>
        {featPupId && featuredPup && (
          <div className="featured-puppy">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
import React from "react";
import Nav from "./Nav";
import PigCardList from "./PigCardList";
import hogs from "../porkers_data";
import PigSorter from "./PigSorter";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigSorter 
      name={hogs.name}
      weight={hogs.weight}
      />
      <PigCardList 
      hogs={hogs}
      />
    </div>
  );
}

export default App;


/* 
App
-Nav
-PigSorter
-PigCardList
-PigCards
-PigCardInfo (on click to display information)
*/
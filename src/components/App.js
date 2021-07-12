import React from "react";
import Nav from "./Nav";
import PigCardList from "./PigCardList";
import hogs from "../porkers_data";
import PigSorter from "./PigSorter";

// filteredHogs.sort((a, b) => a[hogs.name].localeCompare(b[hogs.name]))

function App() {  

  return (
    <div className="App">
      <Nav />
      <PigSorter 
      name={hogs.name}
      weight={hogs.weight}
      // filteredHogs={filteredHogs}
      />
      <PigCardList 
      // filteredHogs={filteredHogs}
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
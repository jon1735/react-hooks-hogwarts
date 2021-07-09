import React, { useState } from "react";
import PigCards from "./PigCards"

const PigCardList = ({ hogs, filteredHogs }) => {
    const [ isHidden, setisHidden] = useState(false)
    
    const pigList = hogs.map(hog => {
        const handlePigSelect = () => {
            setisHidden(!isHidden)
        }
    return(
        <PigCards 
        hogs={hog}
        key={hog.name}
        filteredHogs={filteredHogs}
        isHidden={isHidden}
        onPigSelect={handlePigSelect}
        />
    )
})

return (
<div className="pigList">
    {pigList}
</div>
)
}




export default PigCardList;

// const listOfHogs = hogs.map(hog => {
//     const handleHogSelect = () => {
//       setActiveHog(hog.name)
//     }
//     return (
//       <HogTile 
//         key={hog.name}
//         name={hog.name}
//         specialty={hog.specialty}
//         greased={hog.greased}
//         weight={hog.weight}
//         highestMedalAchieved={hog["highest medal achieved"]}
//         image={hog.image}
//         activeHog={activeHog}
//         onHogSelect={handleHogSelect}
//       />
//     )
//   })
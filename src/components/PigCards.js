import React from "react";

const PigCards = ({ hogs, filteredHogs, showInformation, onPigSelect}) => {    
   
// const showPigInfo = () => setShowInformation(true) {

//     return (
//   <div>
//   { showInformation ? <PigInfo /> : null })
//   </div>
// })
   
   
    return (
            //have to map through array of objects to display hogs
        <div className="pigTile" >
            <h3>{hogs.name}</h3>
                <img
                alt={hogs.name}
                src={hogs.image} 
                style={{width:250, height:250}}
                />

            <div className="hiddenInfo" onClick={{onPigSelect} ? "hidden": null}>
                 <p>Specialty: {hogs.specialty}</p>
                 <p>Greased: {hogs.greased}</p>
                 <p>Weight: {hogs.weight} tons</p>
                 <p>Highest Medal Achieved: {hogs["highest medal achieved"]} </p>
            </div>
            
        </div>
    
    )
}

export default PigCards;


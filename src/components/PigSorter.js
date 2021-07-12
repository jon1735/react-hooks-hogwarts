import React from "react";

const PigSorter = ({ name, weight, filteredHogs }) => {
        return (
            <div>
                <input type= "checkbox" />
            <button className="buttonName" onClick={filteredHogs}>
                name
            </button>
            <button className="buttonWeight">
                weight
            </button>

            </div>
    )
}


export default PigSorter;


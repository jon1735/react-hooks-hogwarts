import React from "react";
import PigCards from "./PigCards"

const PigCardList = ({ hogs }) => {
    return(
    <ul>
        <PigCards 
        hogs={hogs}
        key={hogs.name}
        />
    </ul>
    )
}








export default PigCardList;
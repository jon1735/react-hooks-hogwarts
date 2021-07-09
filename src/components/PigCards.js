import React from "react";


const PigCards = ({ hogs }) => {    
    return (
        hogs.map(hog => (
            //have to map through array of objects to display hogs
        <div className="pigTile">
            <h3>{hog.name}</h3>
                <img
                alt={hog.name}
                src={hog.image}
                />
            <p>
                {hog.specialty}
            </p>
            <p>    
                {hog.greased}
            </p>
            <p>   
                {hog.weight} tons
            </p>
            {/* <p>
                {hog.[4]}
            </p> */}
        </div>
    
    )))
}




export default PigCards;


/* <div className={"card"}>
      <h2>{toy.name}</h2>
      { featuredToy === toy.name && <h4>Featured Toy!!!</h4> }
      <img
          alt={toy.name}
          src={toy.image}
          className={"toy-avatar"}
      />
      <p>{`${toy.likes} likes`}</p>
      <button
          className={"like-btn"}
          id={toy.id}
          onClick={handleButtonClick}
      >
        Pick me!
      </button>
    </div> */
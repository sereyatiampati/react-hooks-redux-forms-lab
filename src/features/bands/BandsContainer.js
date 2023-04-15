import React from "react";
import BandInput from "./BandInput";
import { useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector(state=> state.bands.entities)

  return <div>
    <BandInput onBandSubmit={bandAdded}/>
    <p>List of bands: </p>
    <ul>
    {bands.map((band, index)=> <li key={index}>{band.name}</li>)}
    </ul>
    </div>
}

export default BandsContainer;

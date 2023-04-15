import React, {useState} from "react";
import { useDispatch } from "react-redux";

function BandInput({onBandSubmit}) {
  const [name, SetName] =useState("");
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    dispatch(onBandSubmit({name: name}));
    SetName("");
  }

  return <form onSubmit={handleSubmit}>
    <label htmlfor="name"> Name</label>
    <input type="text" value={name} placeholder="Band name.." onChange={(e) => SetName(e.target.value)}/>
    
    <button type="submit">Submit</button>
  </form>;
}

export default BandInput;

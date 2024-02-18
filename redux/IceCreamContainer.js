import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "./ice-cream/iceCreamActions";
import { connect } from "react-redux";

function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of IceCreams - {numOfIceCreams}</h2>
    <button onClick={()=>dispatch(buyIceCream())}>Buy IceCreams</button>
    </div>
  )
}

export default IceCreamContainer


// function iceCreamContainer(props) {
//   const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
//   const dispatch = useDispatch();
//     return (
//     // <div>
//     //     <h2>Number of Cakes - {numOfCakes}</h2>
//     //     <input type="text" value={number} onChange={e=> setNumber(e.target.value)}></input>
//     //     <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>
//     // </div>
//     <div>
//     <h2>Number of IceCreams - {numOfIceCreams}</h2>
//     <button onClick={()=>dispatch(buyIceCream())}>Buy IceCreams</button>
// </div>
//   )
// }

// export default iceCreamContainer



import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './cake/cakeActions';
import { buyIceCream } from './ice-cream/iceCreamActions';
import { UseDispatch } from 'react-redux';

function ItemContainer() {
  return (
    <div>
        <h2>Items = {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes:state.iceCream.numOfIceCreams
        return {
            item: itemState
        }
}

  
const mapDispatchToProps = (dispatch) =>{
    const dispatchFunction = ownProps.cake ?
                            ()=> dispatch(buyCake()) :
                            ()=> dispatch(buyIceCream())
    return{
      buyItem : dispatchFunction
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {
  const selector = useSelector(state => state.basketReduser.purchasedProducts)
  console.log(selector);
  return (
    <div>
      {
        selector?.map(m =>
          <div key={m.product.id}>
            <img src={m.product?.images?.at(0)} alt="" />
            {/* <p> {m.product.creationAt} </p> */}
          </div>
        )
      }
    </div>
  )
}

export default Basket
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Like() {
  const likedProduct = useSelector(state => state.likedReduser.likedProducts);
  return (
    <div className='search-result__wrapper'>
      {
        likedProduct?.map(searchItem =>
          <div className="product-item" key={searchItem.id}>
            <Link to={`/product/${searchItem.id}`}>
              {/* {
                searchItem.images.at(0) && searchItem.images.at(0).starsWith("https//:") ?
                <img src={searchItem.images.at(0)} alt="" />
                :
                <img width={300} src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
              } */}
              <img src={searchItem.images?.at(0)} alt="" />
            </Link>
            <div>
              <h2>{searchItem?.title}</h2>
              <p>{searchItem?.description} </p>
              <strong>${searchItem?.price}</strong>
            </div>
          </div>   
        )
      }
    </div>
  )
}

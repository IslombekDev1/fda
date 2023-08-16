import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FiHeart} from "react-icons/fi";
import "./Like.css";

export default function Like() {
  const likedProduct = useSelector(state => state.likedReduser.likedProducts);
  console.log(likedProduct);
  const dispatch = useDispatch();
  function searchItemRemoveFromLike(searchItemParametr){
    dispatch( {id: searchItemParametr.id, type: "REMOVE_FROM_LIKE"})
   
  };
  
  return (
    <div className='search-result__wrapper'>
      {
        likedProduct?.map(searchItem =>
          <div className="product-item" key={searchItem.id}>
            <Link to={`/product/${searchItem.id}`}>
              {/* {
                searchItem.images.at(0) && searchItem.images.at(0).starsWith("https//:") ?
                <img sr3221q bvc={searchItem.images.at(0)} alt="" />
                : 
                <img width={300} src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
              } */}
              <img src={searchItem.images?.at(0)} alt="searchItem.images" />
            </Link>
            <div>

              <h2>{searchItem?.title}</h2>
              <p>{searchItem?.description} </p>

              <div className='searchItem__info'>

                <strong>${searchItem?.price}</strong>

                <button onClick={() => searchItemRemoveFromLike(searchItem)} style={{background: 'transparent', border: 'none'}}>
                  <FiHeart className='FiHeart'/>
                </button>

              </div>
              
            </div>
          </div>   
        )
      }
    </div>
  )
};
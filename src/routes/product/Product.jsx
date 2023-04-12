import React from 'react';
import "./Product.scss";
import { useParams } from 'react-router-dom';
import useFetchData from "../../hooks/useFetchData";
import Container from '../../utils/Container';
import { useSelector, useDispatch } from 'react-redux';
import {BsFillSuitHeartFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";

const Product = () => {
  const productIdData = useParams();
  const [data, isLoading] = useFetchData(`https://api.escuelajs.co/api/v1/products/${productIdData.id}`)
  console.log(data);

  const dispatch = useDispatch();
  const likedProduct = useSelector(state => state.likedReduser.likedProducts)
  function addToLike(product){
    console.log(product);
    dispatch({product, type: "LIKE_PRODUCT"})
  }

  return (
    <section className='single-product'>
      <Container>
        {!isLoading ?
          <div className='single-product__wrapper'>
            <div className='single-product__wrapper__img-wrapper'>
              {/* {
                data.images?.at(0) && data.images?.at(0).starsWith("https//:") ?
                <img src={data.images?.at(0)} alt="" />
                :
                <img src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
              } */}
              <img src={data.images?.at(0)} alt="er" /> 
            </div>
            <div className='single-product__info'>
              <h1> {data.title} </h1>
              <p> {data.description} </p>
              <strong> ${data.price} </strong>
              <button className='link link--dark'>Add to cart</button>
              {likedProduct.find(omborMalumot => omborMalumot.id === data.id) ? <BsFillSuitHeartFill style={{color: 'red'}} />
                  : <FiHeart onClick={() => addToLike(data)} /> }
            </div>
          </div>
          :
          <p>Loading...</p>
        }
      </Container>
    </section>
  );
}

export default Product;
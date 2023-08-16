import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';
import { FiHeart } from "react-icons/fi";
import { BsFillSuitHeartFill} from 'react-icons/bs';
import {RiShoppingBasketLine} from "react-icons/ri";
import useFetchData from '../../hooks/useFetchData';
import "./MainProducts.scss";
import { useTranslation } from "react-i18next";
import blankImg from "../../assets/blank.jpg";


const MainProducts = () => {
  const dispatch = useDispatch();
  const [data, isLoading] = useFetchData("https://fakestoreapi.com/products");
  const { t } = useTranslation();

  function trimDescription(str){
    return str.split(" ").slice(0, 10).join(" ") + "..."
  };
  function addToLike(product){
    console.log(product);
    dispatch({product, type: "LIKE_PRODUCT"})
  };
  function addToBasket(product){
    console.log(product);
    dispatch({product, type: "BASKET_PRODUCT"})
  };

  const likedProduct = useSelector(state => state.likedReduser.likedProducts)
  function removeFromLikeProducts(product){
  //jo'natish
    dispatch({id: product.id, type:"REMOVE_FROM_LIKED" })
  }

  return (
    <section className='main-products'>
        <h2 className="main-products__title"> {t("main-products_title")} </h2>
      <Container>
        <div className="main-products__wrapper">
          {!isLoading ?
            data?.map(product => 
              <div className='product-item' key={product.id}>
                <Link to={`/product/${product.id}`}>
                    {
                      product.image?.startsWith("https://") && <img className='product-item__img' src={product.image} alt="product-item__img" />
                    }

                    {
                      product.image?.startsWith("https://api") && <img width={200} src={blankImg} alt="blankImg" />
                    }
                  <h3> {product.title} </h3>
                </Link>
                <div className='product-item__info'>
                  <div>
                    <p> {trimDescription(product.description)} </p>
                    <strong> ${product.price}  </strong>
                  </div>
                  <div className='info__icon'>
                    <RiShoppingBasketLine onClick={() => addToBasket(product)} />
                    {likedProduct.find(omborMalumot => omborMalumot?.id === product?.id) ? <BsFillSuitHeartFill className='heartFill' onClick={() => removeFromLikeProducts(product)} />
                    : <FiHeart className='heart' onClick={() => addToLike(product)} /> }
                    {likedProduct.length === 1 && likedProduct.find(omborMalumot => omborMalumot.id === product.id) && alert("1 product has been added to like or there is 1 product") } 
                  </div>
                </div>
              </div> 
              // console .log(product) 
            )
            :
            <p className='loading'>Loading...</p>
          }
        </div>
      </Container>
    </section>
  );
}

export default MainProducts;

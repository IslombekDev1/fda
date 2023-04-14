import React from "react";
import Container from "../../utils/Container";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./Categories.scss";
import { useTranslation } from "react-i18next";
import blankBox  from "../../assets/blankBox.jpg"


const Categories = () => {
  const [data, isLoading] = useFetchData("https://api.escuelajs.co/api/v1/categories");
  const { t } = useTranslation();

  function trimDescription(parametr) {
    return parametr.split(" ").slice(0, 1).join(" ")
  
  }
  
  return (
    <section className="categories">
        {/* <h2 className="categories__title"> {t("categories_title")} </h2> */}
        <h2 className="categories__title"> {t("categories_title")} </h2>
      <Container>
        <div className="categories__wrapper">
          {!isLoading ?
            data?.slice(0, 12).map(category =>
              <div key={category.id} className="categoryLink">
                <Link to={`/category/${category.id}`} key={category.id}>
                  {
                    !category.image?.startsWith("https://www") ? <img className="category__img" src={category.image} alt="category__img" />
                    : category.image?.startsWith("https://www") ?  <img className="category__img" src={blankBox} alt="blankBox" />
                    : <></>
                  }
                </Link>
                {
                  !category.image?.startsWith("https://www") ? <h3>{trimDescription(category.name)}</h3>
                  : category.image?.startsWith("https://www") ?  <h3>blank</h3>
                  : <></>
                }
              </div>
            )
            // data?.slice(0, 12).map(category =>
            //  console.log(category?.name.length)
            // )
            :
            <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  );
};

export default Categories;

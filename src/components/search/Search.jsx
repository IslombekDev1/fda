import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../utils/Container';
import { FiSearch } from 'react-icons/fi';
import { Link} from "react-router-dom";    
import "./Search.scss";

const Search = () => {
  const [searchResult, setsearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const {t} = useTranslation();
  const giveSearchSuggestions = (e) => {
    setSearchValue(e.target.value);
    fetch(`https://api.escuelajs.co/api/v1/products/?title=${e.target.value}&offset=10&limit=10`)
      .then(response => response.json())
      .then(data => setsearchResult(data))
      .catch(err => console.log(err))
  };

  const giveMoreResults = (e) => {
    e.preventDefault();
    window.location.pathname = `/search/${searchValue}`;
  };

  return (
    <section className='search'>
      <Container>
        <form onSubmit={giveMoreResults}>
          <div className="search__wrapper">
            <div className='search__elements'>
              <FiSearch />
              <input onChange={(e) => giveSearchSuggestions(e)} type="text" placeholder={t("search_placeholder")} />
              {searchResult?.length > 0 && searchValue ?
              <div className='search__suggestions'>
                {
                  searchResult?.map(searchItem =>
                    <Link to={`/product/${searchItem.id}`} key={searchItem.id}>
                      <p> {searchItem.title} </p>
                    </Link>
                  )
                }
              </div> : <></>}
            </div>
            {/*                event - voqea */}
            <button> <FiSearch onSubmit={giveMoreResults}/> {t("search_btn")} </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Search;
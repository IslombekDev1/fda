import React, { useState, useEffect} from 'react';
import { useParams, Link  } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import SearchComp from '../../components/search/Search';
import { v4 as uuidv4 } from 'uuid'; 
import "./Search.scss";

const Search = () => {
  const [LowerSelect, setLowerSelect] = useState(1);
  const [upperSelect, setupperSelect] = useState(1);
  var [filterResult, setfilterResult] = useState([]);
  const productInfo = useParams();
  var [data] = useFetchData(`https://api.escuelajs.co/api/v1/products/?title=${productInfo.productName}`);
  const prices = [1, 10, 100, 1000, 10000, 100000];

  useEffect(() => {
    if(LowerSelect > upperSelect){
      setLowerSelect(upperSelect);
      setupperSelect(LowerSelect);
  }
  fetch(`https://api.escuelajs.co/api/v1/products/?title=${productInfo.productName}&price_min=${LowerSelect}&price_max=${upperSelect}`)
    .then((response) => response.json())
    .then((data) => setfilterResult(data))
    .catch(err => console.log(err))
  
  }, [LowerSelect, upperSelect])
  if(filterResult.length > 0){
    data = filterResult;
  } 
  console.log(filterResult);
  return (
    <section className='search-result'>
      <SearchComp />
      <Container>
        <div className="search-result__filters">
          <select value={LowerSelect} onChange={(e) => setLowerSelect(e.target.value)}>
            {
              prices.map(price =>
                <option key={uuidv4()} value={`${price}`}>{price}</option>
              )
            }
          </select>
          <select value={upperSelect} onChange={(e) => setupperSelect(e.target.value)}>
            {
              prices.map(price =>
                <option key={uuidv4()} value={`${price}`}>{price}</option>
              )
            }
          </select>
        </div>
        <div className="search-result__wrapper">
          {
            data?.map(searchItem =>
              // console.log(searchItem)
              <div>
                <img width={200} src={searchItem.images[0]} alt="" />
                <strong>{searchItem.title}</strong>
              </div>
            )
          }
        </div>
      </Container>
    </section>
  );
}

export default Search;
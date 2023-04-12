import { useState, useEffect } from "react";

const useFetchData = (ENDPOINT) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {setdata(data)
      setisLoading(false)
      })
      .catch((err) => {console.log(err)
      setisLoading(false)
    });
  }, [])
  return [data, isLoading];
};

export default useFetchData;
import React from "react";
import Icon from "../../assets/icon";
import Search1 from "../../components/search/search";
import "./main.scss"
import CarCard from "../../components/card";
import useFetch from "../../hooks/fetch";



const Home = () => {
  const url = `http://localhost:3000/products`
  const { data, loading, error } = useFetch(url);
  return (
    <>
      <div className="container">
        <div className="header">
          <div>

            {
              data?.map((item, key) => (
                <CarCard car={item} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

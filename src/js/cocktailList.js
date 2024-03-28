"use client";
import React, { useState } from "react";

export default function CocktailList() {
  const [searchText, setSearchText] = useState("");
  const [drinks, setDrinks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
        console.log('Drinks:', data.drinks);
      setDrinks(data.drinks);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="col-12">
        <h2 className="mb-lg-5 mb-4">Search cockatil.</h2>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter cocktail name"
          className="form-control mb-4"
        />
      </div>

      {drinks &&
        drinks.map((drink, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="menu-thumb">
              <img
                src={drink.strDrinkThumb} alt={drink.strDrink}
                className="img-fluid menu-image"
              />
    
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">{drink.strDrink}</h4>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">{drink.strCategory}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}

      
    </>
  );
}

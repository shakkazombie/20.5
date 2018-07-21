import React from "react";
import {Link} from "react-router";
import CountryFlag from "./flag-component";

const CountryFlagList = props => (
  <div className="countries-list">
    {props.countries.map((item) => {
      return (
        <div className="single-country" key={item.id}>
          <Link className="logo" to={"countries/country/" + item.id}>
            <CountryFlag country={item} />
          </Link>
          <button onClick={props.deleteCountry.bind(null, item.id)}>DELETE</button>
        </div>
      )
    })}
  </div>
);

export default CountryFlagList;
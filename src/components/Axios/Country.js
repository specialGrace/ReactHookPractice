
import React from "react";
import styles from './Country.module.css';
import {
  // FaRegStar,
  // FaCircle,
  // FaEllipsisV,
  FaLanguage,
  FaLocationArrow,
} from "react-icons/fa";



function Country({ country }) {
  console.log("country component", country);
  return (
    <div className={styles.country}>
      {country.name.common}
      <img
        src={country.flags.png}
        alt={country.name.common}
        className={styles.img}
      />

      {/* <div className={styles.icons}>
        <FaRegStar className={styles.star} />
        <FaCircle className={styles.circle} />
        <FaEllipsisV className={styles.ellip} />
      </div> */}
      <div>
        <p><FaLanguage />Language(s):{typeof country.languages !== "undefined" && Object.keys(country.languages).map((key, i) => (
              <li key={i}>{country.languages[key]}</li>))} </p>
        <p>
          <FaLocationArrow /> Area:{country.area}
        </p>
      </div>
    </div>
  );
}

export default Country;

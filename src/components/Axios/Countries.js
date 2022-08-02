import React from "react";
import Country from "./Country";
import styles from './Countries.module.css'


function Countries({ countries }) {
  return (
    <div className={styles.countries}>
      {countries.length > 0 &&
        countries.map((country) => <Country country={country} />)}
      {/* <input type="text" name="firstName" value= placeholder= /> */}
    </div>
  );
}

export default Countries;

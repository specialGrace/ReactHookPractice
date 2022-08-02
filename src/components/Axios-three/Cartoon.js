import React from 'react'
import styles from './Cartoon.module.css'
import {
  // FaRegStar,
  // FaCircle,
  // FaEllipsisV,
  FaLocationArrow,
} from "react-icons/fa";

import { BsCalendarDate, BsPersonCircle } from "react-icons/bs";

function Cartoon({ cartoon }) {
        return (
          <div className={styles.cartoon}>
            <div>
              <h3 className={styles.head}>{cartoon.name}</h3>
              <img
                src={cartoon.image}
                alt={cartoon.name}
                className={styles.img}
              />
            </div>

            <div>
              {/* <p>{cartoon.name} is a {cartoon.gender} cartoon, It is mostly found at {cartoon.location} </p> */}

              {/* {cartoon.map((cartoon, index) => (
                  <p key={index}>{cartoon.name} is a {cartoon.gender} cartoon, It is mostly found at {cartoon.location}</p>
                ))} */}

              <div className={styles.paragraph}>
                <p>
                  <FaLocationArrow className={styles.icons} />
                  Location(s):
                  {typeof cartoon.location !== "undefined" &&
                    Object.keys(cartoon.location).map((key, i) => (
                      <li className={styles.list} key={i}>
                        {cartoon.location[key]}
                      </li>
                    ))}{" "}
                </p>
                <p>
                  <BsPersonCircle className={styles.icons} /> Gender:{" "}
                  {cartoon.gender}
                </p>

                <p>
                  <BsCalendarDate className={styles.icons} /> Created on:{" "}
                  {cartoon.created}
                </p>
              </div>
            </div>
          </div>
        );

}

export default Cartoon
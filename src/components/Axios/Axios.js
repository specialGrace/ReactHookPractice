                                                                                
import React, { Component } from "react";
// axios is a package which
// send requests to a server to fetch data
import axios from "axios";
import Countries from "./Countries";
import styles from "./Axios.module.css"
class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    };
  }

  componentDidMount() {
    const API_KEY_YELP =
      "_KXWfRK-8jSxhTU5WCHjtyvn7kcAlo5ppqXbG3xkiY3mApR4PPzpsY5Px4bmWcnlHQHmPue3uwgjInRKuvpaa6mSnVvAXNQ1D2kO6Iz0oWIov9_fTb41s0VLNSO7YnYx";
    const API_URL = this.state.search ? `https://restcountries.com/v3.1/name=${this.search}` : "https://restcountries.com/v3.1/all";
    const apiOptions = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${API_KEY_YELP}`
      },
    };
    axios
      .get(API_URL, {}, apiOptions)
      .then((response) => {
        const { data } = response;
        console.log("2. response", data);
        this.setState(
          {
            data: data,
          },
          () => console.log("3. current state", this.state.data)
        );
        console.log("1. default state", this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler(e) {
    e.preventDefault();
    const { data } = this.state;
    this.setState({
      data: data,
      
    });
  }

  render() {
    // console.log('1. default state', data)
    return (
      <div className={styles.container}>
        <h1>Fetching Data Using Axios</h1>
        <p>There are {this.state.data.length} countries in the api</p>
        <Countries countries={this.state.data} />
        {this.state.data.length > 0 && this.state.data.map((country, i) => <p key={i}>{country.capital}</p>)}
        <input type='text' name='name' placeholder="Search for any country" />
        <button onSubmit={this.submitHandler = this.submitHandler.bind(this)}>submit</button>
      </div>
    );
  }
}

export default Axios;

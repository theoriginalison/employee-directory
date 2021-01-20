import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.searchEmployees = this.searchEmployees.bind(this)
  }
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for an employee
  componentDidMount() {
    this.getEmployees();
  }

  //this is where we need API.EmployeeDetail().then...the rest of line 24 and onward?
  getEmployees = () => {
    API.search()
      .then(res => { console.log(res); return this.setState({ result: res.data.results }) })
      .catch(err => console.log(err));
  };

  //add the function to search employees-- will probably be a filter, to filter through the state
  searchEmployees = (searchTerm) => {
    this.state.result.filter((item) => {
      console.log(item)
      //this is where you'll have the logic for comparing, JS comparison function
    })
    //this returns an array of the items that match the query

  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for an Employee here."}
            >
              {this.state.result.Title ? (
                <EmployeeDetail
                  src={this.state.result.picture.thumbnail}
                  firstName={this.state.result.name.first}
                  firstName={this.state.result.name.last}
                  phone={this.state.result.phone}
                  email={this.state.result.email}
                  birthday={this.state.result.dob.date}
                />
                //shorthanded if/else statement
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
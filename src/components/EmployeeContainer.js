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
    result: [],
    filteredResult: [],
    search: ""
  };

  // When this component mounts, search for an employee
  componentDidMount() {
    this.getEmployees();
  }

  //this is where we need API.EmployeeDetail().then...the rest of line 24 and onward?
  getEmployees = () => {
    API.search()
      .then(res => {
        console.log(res);
        return this.setState({
          result: res.data.results,
          filteredResult: res.data.results
        })
      })
      .catch(err => console.log(err));
  };

  //add the function to search employees-- will probably be a filter, to filter through the state
  searchEmployees = (searchTerm) => {
    if (!this.state.search) {
      this.setState({ filteredResult: this.state.result })
      return
    }
    const filteredPeople = this.state.result.filter((item) => {
      console.log(item);
      return item.name.first.includes(this.state.search)
        || item.name.last.includes(this.state.search)

      //this is where you'll have the logic for comparing, JS comparison function
    })
    this.setState({ filteredResult: filteredPeople })
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

  //writing a function that will sort this.state.filteredResult based on a given criteria
  //Then add a button to each header in your table that you want the user to be able to sort on. The click event for the button should call the function that I mentioned above
  //use an arrow function for any method on a class that you want to be able to access the “this” and “this.state” and “this.setState” that belong to the class



  // constructor(props) {
  //   super(props)
  //   this.state = { filteredResult }
  //   this.sortByName = this.sortByName.bind(this);
  // };

  sortByName = () => {
    this.state.filteredResult.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for an Employee here."}
            >
              <table>
                <caption>Employees</caption>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th><button onClick={this.sortByName}>Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>D.O.B.</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredResult.map((person, index) => (
                    <tr key={index}>
                      <EmployeeDetail {...person} />
                    </tr>
                  ))}
                </tbody>
              </table>

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

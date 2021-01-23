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

  componentDidMount() {
    this.getEmployees();
  }

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

  searchEmployees = (searchTerm) => {
    if (!this.state.search) {
      this.setState({ filteredResult: this.state.result })
      return
    }
    const filteredPeople = this.state.result.filter((item) => {
      console.log(item);
      return item.name.first.includes(this.state.search)
        || item.name.last.includes(this.state.search)
    })
    this.setState({ filteredResult: filteredPeople })

  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  sortByName = () => {
    let sortedNames = this.state.filteredResult.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    },
    );
    this.setState({ filteredResult: sortedNames })
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

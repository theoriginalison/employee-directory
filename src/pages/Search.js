import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
    state = {
        //create properties in here; search input box needs to be saved in here-- capture the value in this box, and with that value, we'll do the filtering
        //AND then all of the random people need to be stored in state
        //UI is updated every single time state is changing
    };

    //create didMount and pairing data as props to other components here

    //use this to sort: https://www.smashingmagazine.com/2020/03/sortable-tables-react/


    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search</h1>
                    <Alert
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
                        {this.state.error}
                    </Alert>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        breeds={this.state.breeds}
                    />
                    <SearchResults results={this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Search;
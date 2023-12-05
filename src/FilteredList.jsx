import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    onSearch = (event) => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    }

    handleTypeSelect = (selectedType) => {
        // Implement your logic based on the selectedType
        console.log(`Selected Type: ${selectedType}`);
        // You can update state or perform other actions as needed
    }

    filterItem = (item) => {
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                <DropdownButton id="typeDropdown" title="Type">
                    <Dropdown.Item eventKey="all" onSelect={() => this.handleTypeSelect("all")}>All</Dropdown.Item>
                    <Dropdown.Item eventKey="fruit" onSelect={() => this.handleTypeSelect("fruit")}>Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="vegetable" onSelect={() => this.handleTypeSelect("vegetable")}>Vegetable</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;

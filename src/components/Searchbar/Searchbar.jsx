import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchIcon, StyledHeader, StyledSearchForm } from './Searchbar.styled';


export class Searchbar extends Component {

  state = {
    searchQuery: ''
  };

  searchInputId = crypto.randomUUID();

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleInputChange = ({target}) => {
    this.setState({searchQuery: target.value})
  }

  render() {
    return (
      <StyledHeader>
        <StyledSearchForm
          onSubmit={(ev) => this.props.onSubmit(ev)}>
          <label htmlFor={this.searchInputId}>Search input</label>
          <input
            id={this.searchInputId}
            value={this.state.searchQuery}
            onChange={(ev) => this.handleInputChange(ev)}
            type='text'
            name='searchQuery'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
          <button type='submit'>
            <SearchIcon />
          </button>
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}

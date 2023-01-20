import React, { Component } from "react";
import propTypes from 'prop-types';
import css from './Searchbar.module.css'

const {SearchbarStyle, SearchForm, SearchFormButton, SearchFormInput} = css;

export const Searchbar = ({ onSubmit }) => (

<header className={SearchbarStyle}>
    <form className={SearchForm}>
        <button type="submit" className={SearchFormButton}>
            <span className="button-label">Search</span>
        </button>
            <input
            className={SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
    </form>
</header>
    );
    
    Searchbar.propTypes = {
        onSubmit: propTypes.func.isRequired,
    };
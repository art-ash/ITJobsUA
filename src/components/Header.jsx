import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { setSearch, setSelectQuery, fetchJobs } from "../actions";
import Preloader from "./Preloader";
import { categoryOptions, cityOptions } from "../config";

function Header(props) {
  const navigate = useNavigate();

  function handleSearchChange(event) {
    const value = event.target.value;
    props.setSearch(value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    props.fetchJobs();
    navigate("/");
  }

  function handleSelectChange(e) {
    const { name, value } = e.target;
    props.setSelectQuery(name, value);
    props.fetchJobs();
    navigate("/");
  }

  const { search, city, category, isFetching } = props;

  return (
    <header className="header mb-3 py-3 bg-dark">
      <div className="d-flex">
        <h1 className="h4 mb-4">
          <Link to="/" className="text-white me-4">
            IT Jobs in Ukraine
          </Link>
        </h1>
        {isFetching ? <Preloader /> : null}
      </div>
      <div>
        <form name="search" className="w-25 mb-1" onSubmit={handleSearchSubmit}>
          <div className="input-group">
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              className="form-control"
              placeholder="Search by Keyword"
              aria-label="Location"
              aria-describedby="basic-addon1"
            />
            <button type="submit" className="btn btn-light">
              Search
            </button>
          </div>
        </form>
        <select
          name="category"
          value={category}
          onChange={handleSelectChange}
          className="form-select w-25 mb-1"
        >
          <option value="">Choose Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="city"
          value={city}
          onChange={handleSelectChange}
          className="form-select w-25 mb-1"
        >
          <option value="">Choose Ctiy</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  const { search, city, category, records, isFetching } = state.appReducer;

  return {
    search,
    city,
    category,
    records,
    isFetching,
  };
};

Header.propTypes = {
  search: PropTypes.string,
  city: PropTypes.string,
  category: PropTypes.string,
  records: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, {
  setSearch,
  fetchJobs,
  setSelectQuery,
})(Header);

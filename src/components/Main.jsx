import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Message from "./Message";

function Main(props) {
  const { records, isError, isFetching } = props;

  if (isError) {
    return <Message type="danger" text="An Error occured" />;
  }

  if (!records.length && !isFetching) {
    return (
      <Message type="info" text="Search for a Location to see job offers" />
    );
  }

  const offers = records.map((record) => {
    return (
      <li key={record.id}>
        <Link to={`/offer/${record.id}`} className="text-white">
          {record.title}
        </Link>
      </li>
    );
  });

  return (
    <main>
      <ul>{offers}</ul>
    </main>
  );
}

const mapStateToProps = (state) => {
  const { records, isError, isFetching } = state.appReducer;

  return {
    records,
    isError,
    isFetching,
  };
};

export default connect(mapStateToProps)(Main);

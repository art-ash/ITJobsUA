import React from "react";
import { connect } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

import PropTypes from "prop-types";

function Offer(props) {
  const location = useLocation();
  const { records } = props;
  let record;

  const id = location.pathname.slice(7);
  for (let i = 0; i < records.length; i++) {
    if (records[i].id === id) {
      record = records[i];
      break;
    }
  }

  if (!record) {
    return <Navigate to="/" />;
  }

  const description = new DOMParser().parseFromString(
    record.description,
    "text/html"
  ).documentElement.textContent;

  return (
    <main>
      <h1>{record.title}</h1>
      <h5>
        <a href={record.link} target="_blank" className="text-white">
          View this offer on DOU.ua
        </a>
      </h5>
      <br />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </main>
  );
}

const mapStateToProps = (state) => {
  const { records } = state.appReducer;

  return { records };
};

Offer.propTypes = {
  records: PropTypes.array,
};

export default connect(mapStateToProps)(Offer);

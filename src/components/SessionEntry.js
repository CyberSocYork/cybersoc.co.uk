import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const SessionEntry = ({ date, topic, presenter, slides, resources }) => {
  return (
    <>
      <p>{date}</p>
      <p>{topic}</p>
    </>
  );
};

SessionEntry.propTypes = {
  date: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  presenter: PropTypes.string.isRequired,
  slides: PropTypes.string.isRequired,
  resources: PropTypes.array,
};

export default SessionEntry;

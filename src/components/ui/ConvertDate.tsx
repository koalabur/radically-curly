// React
import React from "react";
import PropTypes from "prop-types";

type Props = {
  date: string;
};

export default function ConvertDate({ date }: Props) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "long",
  });

  return <>{formattedDate}</>;
}

ConvertDate.propTypes = {
  date: PropTypes.string.isRequired,
};

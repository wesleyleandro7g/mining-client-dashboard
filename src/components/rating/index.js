import React from "react";
import Rating from "@material-ui/lab/Rating";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function HoverRating({ value }) {
  return (
    <>
      <Rating
        name="half-rating-read"
        value={value}
        defaultValue={0}
        precision={0.5}
        readOnly
      />
    </>
  );
}

export default HoverRating;

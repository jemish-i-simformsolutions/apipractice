import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  let { fname, lname } = useParams();

  return (
    <div>
      Welcome {fname} {lname} to the page
    </div>
  );
}

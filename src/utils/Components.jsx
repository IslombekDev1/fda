import React from 'react';
import { Link } from 'react-router-dom';

const RedirectButton = ({ redirect, title, type }) => {
  return (
    <Link className={type === "light" ? "link link--light" : "link link--dark"} to={redirect} >
      {title}
    </Link>
)}

export { RedirectButton };
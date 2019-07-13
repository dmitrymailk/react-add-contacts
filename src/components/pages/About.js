import React from "react";

export default function About(props) {
  return (
    <div>
      <h1 className="display-4">About Page #{props.match.params.id}</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">v 1.0.0</p>
    </div>
  );
}

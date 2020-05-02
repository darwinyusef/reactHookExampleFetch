import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

const Navigation = (props) => {
  const { history } = props;
  return (
    <React.Fragment>
      <button onClick={() => history.props("/Settings")}>Go To Settins</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
      </ul>

      {false && <Redirect to="/test" />}
    </React.Fragment>
  );
};

export default withRouter(Navigation);

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <button id="btn">
        {""}
        <Link to="/AGames" className="link">
          {" "}
          Action Games
        </Link>
      </button>

      <button id="btn-1">
        <Link to="/Battle" className="link">
          {" "}
          Battle-Royale-Games{" "}
        </Link>
      </button>

      <button id="btn-2">
        {" "}
        <Link to="/Sports" className="link">
          {" "}
          Sports Game{" "}
        </Link>
      </button>
      <hr />
    </div>
  );
}

export default Nav;

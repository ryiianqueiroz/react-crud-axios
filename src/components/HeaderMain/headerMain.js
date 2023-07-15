import React from 'react'

import { Link } from 'react-router-dom'

function HeaderMain() {
  return (
    <div className="headerMain">
      <nav>
        <h2>CRUder</h2>
        <Link to="/post">
          <button>+ Adicionar</button>
        </Link>
      </nav>
    </div>
  );
}

export default HeaderMain;
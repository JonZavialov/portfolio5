import { useState } from "react";

function CollapsableDiv({ name, children }) {
  const [closed, setClosed] = useState(true);

  return (
    <div className="explorer-element">
      <p onClick={() => setClosed(!closed)}>
        <i className={`fa fa-caret-${closed ? "right" : "down"}`} />
        {name}
      </p>
      <div className={`explorer-children-container ${closed ? "closed" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default CollapsableDiv;

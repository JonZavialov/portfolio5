import { useState } from "react";

function CollapsableDiv({ name, children }) {
  const [closed, setClosed] = useState(true);

  return (
    <div className="explorer-element">
      <p onClick={() => setClosed(!closed)}>
        <span>{closed ? "⏵" : "⏷"}</span>
        {name}
      </p>
      <div className={`explorer-children-container ${closed ? "closed" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default CollapsableDiv;

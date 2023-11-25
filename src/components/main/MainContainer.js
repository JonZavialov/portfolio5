import Default from "./states/Default";

const stateMap = {
  undefined: <Default />,
};

function MainContainer({ state }) {
  return <div id="main-container">{stateMap[state]}</div>;
}

export default MainContainer;

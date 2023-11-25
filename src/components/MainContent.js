import MainContainer from "./main/MainContainer";
import SideBar from "./sidebar/SideBar";

function MainContent() {
  return (
    <div id="main-content">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default MainContent;

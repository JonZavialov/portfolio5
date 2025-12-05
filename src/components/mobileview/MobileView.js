import NavBar from "../NavBar";
import "../../styles/mobileview.scss";
import Default from "../main/states/Default";
import { useState } from "react";
import Resume from "../main/states/Resume";
import Footer from "../Footer";

function MobileView() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div id="mobile-container">
      <NavBar goHome={() => setShowResume(false)} noSearchBar />
      {!showResume ? (
        <Default setParent={() => setShowResume(true)} mobileView />
      ) : (
        <Resume goBack={() => setShowResume(false)} mobileView />
      )}
      <Footer minified />
    </div>
  );
}

export default MobileView;

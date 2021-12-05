import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./containers/common/navbar/NarbarContainers";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Intern from "./pages/Intern";
import { useEffect, useState } from "react";


function App() {
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggined(true);
    } else {
      setIsLoggined(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer isLoggined={isLoggined} setIsLoggined={setIsLoggined}/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/intern" component={Intern} />
    </>
  );
}

export default App;

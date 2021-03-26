import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, useHistory } from "react-router-dom";
import { theme } from "./styles/theme";
import RouterHeader from "./navigation/RouterHeader";
import store from "./redux/store";
import RouterContent from "./navigation/RouterContent";
import "./styles/normalize.scss";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions";

function App() {
  const push = useHistory();
  useEffect(() => {
    store.dispatch(loadUser());
  }, [push]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/navigation">
          <div className="App">
            <div className="App_header">
              <RouterHeader />
            </div>
            <div className="App_Content">
              <RouterContent />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "react-query-devtools";
import { routes } from "./routes/appRoute";
import { SnackbarProvider } from "notistack";
import { DeletePromptProvider } from "./components/common/DeletePrompt/DeletePrompt";

function App(): JSX.Element {
  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false} />
      <DeletePromptProvider>
        <SnackbarProvider>
          <Router>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Router>
        </SnackbarProvider>
      </DeletePromptProvider>
    </div>
  );
}

export default App;

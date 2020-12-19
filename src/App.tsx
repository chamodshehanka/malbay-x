import React from "react";
import { Route, Switch } from "react-router-dom";
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
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </SnackbarProvider>
      </DeletePromptProvider>
    </div>
  );
}

export default App;

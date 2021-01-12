import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "react-query-devtools";
import { routes } from "./routes/appRoute";
import { SnackbarProvider } from "notistack";
import { DeletePromptProvider } from "./components/common/DeletePrompt/DeletePrompt";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;

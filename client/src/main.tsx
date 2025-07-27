import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/theme.ts";

export const client = new QueryClient();

let root = createRoot(document.getElementById("root")!);
// console.log(rootElement.childNodes);
// if(!rootElement.hasChildNodes()){
//   const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);


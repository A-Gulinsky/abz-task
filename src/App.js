
// components
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";

// emotion theme
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

// toast notification
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      
      <ToastContainer theme="dark" autoClose={4000} />
    </ThemeProvider>
  );
}

export default App;

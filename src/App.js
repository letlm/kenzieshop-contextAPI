import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </>
  );
}

export default App;

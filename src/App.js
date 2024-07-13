import Layout from "./Components/Layout/Layout";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Layout />
      </div>
    </ContextProvider>
  );
}

export default App;

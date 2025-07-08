import Results from "./pages/Results/Results";
import { ResultProvider } from "./provider/resultProvider";
function App() {
  return (
    <>
      <ResultProvider>
        <Results />
      </ResultProvider>
    </>
  );
}

export default App;

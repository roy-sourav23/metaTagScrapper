import "./App.css";
import CopyComp from "./components/CopyComp";
import EditComp from "./components/EditComp";
import PreviewComp from "./components/PreviewComp";
import SearchComp from "./components/SearchComp";

function App() {
  return (
    <>
      <SearchComp />
      <div>
        <EditComp />
        <CopyComp />
        <PreviewComp />
      </div>
    </>
  );
}

export default App;

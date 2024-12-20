import "./App.css";
import Dashboard from "./components/Dashboard";
// import FormModal from "./components/modal/FormModal";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Dashboard />
      </div>
      {/* <FormModal /> */}
    </>
  );
}

export default App;

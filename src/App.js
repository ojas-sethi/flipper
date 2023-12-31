import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar Component, which is not scrollable */}
      <Sidebar />
      <Feed />
      {/* <Widgets /> */}
      {/* Widgets, also not scrollable */}
    </div>
  );
}

export default App;

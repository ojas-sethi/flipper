import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Building a Flipper App</h1>
      {/* Sidebar Component, which is not scrollable */}
      <Sidebar />
      {/* Feed component, which is scrollable */}
      {/* Widgets, also not scrollable */}
    </div>
  );
}

export default App;

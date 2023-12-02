import "./App.css";
import BottomOrderDetail from "./Components/BottomOrderDetail";
import Header from "./Components/Header";
import Item from "./Components/Item";
import TopOrderDetail from "./Components/TopOrderDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <TopOrderDetail />
      <BottomOrderDetail />
      <Item />
    </div>
  );
}

export default App;

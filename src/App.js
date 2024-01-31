import "./App.css";
import AdminSidebar from "./components/admin_sidebar/AdminSidebar";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <Routing />
      <AdminSidebar/>
    </div>
  );
}

export default App;

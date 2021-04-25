import { Content } from "./components/Content";
import { FormReservacion } from "./components/FormReservacion";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <FormReservacion />

      <Content />

    </div>
  );
}

export default App;

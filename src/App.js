import { Provider } from "react-redux";
import EntryDisplay from "./Components/EntryDisplay";
import FormEntry from "./Components/FormEntry";
import Header from "./Components/Header";
import { employeestores } from "./redux/store";


function App() {
  return (
    <Provider store={employeestores}>
      <div className="App px-2 ">
        <Header />
        <FormEntry />
        <EntryDisplay />
      </div>
    </Provider>
  );
}

export default App;

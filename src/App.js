import { Provider } from "react-redux";
import { store } from "./store";
import { Messages } from "./components/Messages";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { Header } from "./components/Header/Header";

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <div className="wrapper">
          <Header></Header>
          <StatusBar></StatusBar>
          <Messages></Messages>
        </div>
        <div className="footer">
          <p>
            © 2025, Все права защищены. Автор идеи и разработчик: Кальская Яна. </p>
        </div>
      </div>
    </Provider>
  );
}

export default App;

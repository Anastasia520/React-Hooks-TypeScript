import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import CustomHookComponent from "./components/CustomHookComponent";

function App() {
  return (
    <>
      <h1>useState</h1>
      <UseStateComponent />

      <h1>useEffect</h1>
      <UseEffectComponent />

      <h1>useContext</h1>
      <UseContextComponent />

      <h1>useReducer</h1>
      <UseReducerComponent />

      <h1>useRef</h1>
      <UseRefComponent />

      <h1>useCustomHook</h1>
      <CustomHookComponent />
    </>
  );
}

export default App;

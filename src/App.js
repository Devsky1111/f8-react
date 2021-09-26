import { Test, Form } from "./Bai1";

function App() {
  return (
    <div className="App">
      <Test props1={1} props2={2} props3={3} />
      <div>
        <Form.Input />
        <Form.Checkbox />
      </div>

    </div>
  );
}

export default App;

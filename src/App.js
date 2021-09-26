import { Test, Form, Test1, MultiProps } from "./Bai1";

function App() {
  return (
    <div className="App">
      <Test props1={1} props2={2} props3={3} />
      <Test1 props1={4} props2={5} content={"Click me"} callback={() => { console.log("callback o day") }} />
      <div>
        <Form.Input />
        <Form.Checkbox />
      </div>
      <MultiProps
        type={"text"}
        placehoder={"MultiProps in input"}
        title={"mutilProps"}
        name={"test multi props"}


      />
    </div>
  );
}

export default App;

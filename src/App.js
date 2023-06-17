import { useReducer } from "react";
import "./styles.css";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorPCKeyboardInput from "./CalculatorPCKeyboardInput";
import { reducer } from "./Reducer";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <CalculatorDisplay
        previousOperand={previousOperand}
        operation={operation}
        currentOperand={currentOperand}
      />
      <CalculatorButtons dispatch={dispatch} />
      <CalculatorPCKeyboardInput dispatch={dispatch} />
    </div>
  );
}

export default App;

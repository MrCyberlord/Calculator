import { useEffect } from "react";
import { ACTIONS } from "./Actions";

export default function CalculatorPCKeyboardInput({ dispatch }) {
  useEffect(() => {
    const operationMapping = {
      "*": "×",
      "/": "÷",
      "+": "+",
      "-": "-",
    };

    const handleKeyDown = (e) => {
      if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: e.key } });
      } else if (operationMapping[e.key]) {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: operationMapping[e.key] },
        });
      } else if (e.key === "Backspace") {
        dispatch({ type: ACTIONS.DELETE_DIGIT });
      } else if (e.key === "Enter") {
        e.preventDefault();
        dispatch({ type: ACTIONS.EVALUATE });
      } else if (e.key === "Delete") {
        dispatch({ type: ACTIONS.CLEAR });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  // render nothing
  return null;
}

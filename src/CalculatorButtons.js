import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { ACTIONS } from "./Actions";

export default function CalculatorButtons({ dispatch }) {
  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>

      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>

      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />

      <DigitButton digit="0" dispatch={dispatch} />

      <OperationButton operation="+" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />

      <OperationButton operation="×" dispatch={dispatch} />
      <OperationButton operation="÷" dispatch={dispatch} />

      <button onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </>
  );
}

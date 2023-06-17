export default function CalculatorDisplay({
  previousOperand,
  operation,
  currentOperand,
}) {
  return (
    <div className="output">
      <div className="previous-operand">
        {previousOperand} {operation} {currentOperand}
      </div>
    </div>
  );
}

export default function CalculatorDisplay({
  previousOperand,
  operation,
  currentOperand,
}) {
  return (
    <div className="output">
      {previousOperand} {operation} {currentOperand}
    </div>
  );
}

import { Button } from "antd";
import { ACTIONS } from "../App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <Button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}

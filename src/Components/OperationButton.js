import { Button } from "antd";
import { ACTIONS } from "../App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <Button type="primary"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
}

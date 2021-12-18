import React from "react";
import { useHistory } from "react-router";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "../Invoice/Invoice";
import invoice from "../../invoice";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  // <PDFViewer width="1000" height="930">
  //   <Invoice invoice={invoice} />
  // </PDFViewer>;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>
                {"₹"}
                {getBasketTotal(basket)}
              </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={() => history.push("/invoice")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;

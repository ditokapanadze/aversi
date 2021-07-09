import React from "react";
import "./PaymantPage.css";

function PaymantPage() {
  return (
    <>
      <div className="white__space"></div>
      <div className="paymant">
        <div className="check">
          <i class="far fa-check-square"></i>
          <p>გადახდილია!</p>
        </div>
        <p>გადახდის დეტალები:</p>
        <div className="paymant__details">
          <p>
            ჯამური თანხა: <span>37.00 ლ</span>
          </p>
          <p>უნაღდო ანგარიშსწორებით</p>
        </div>
      </div>
    </>
  );
}

export default PaymantPage;

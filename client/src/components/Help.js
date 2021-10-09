import React from "react";
import "./help.css";
function Help() {
  return (
    <div className="help">
      <div className="help__left">
        <p> აფთიაქების მუშაობის გრაფიკი: </p>

        <i class="far fa-clock"></i>
        <ul>
          <li>ორშ-პარ: 10:30 - 21:00 </li>
          <li>შაბ: 11:30 - 20:00</li>
          <li>კვ: 12:30 - 20:00</li>
        </ul>
      </div>

      <p>
        დახმარებისთვის დაგვიკავშირდით: <i class="fas fa-phone-alt"></i>
        2-900-800
      </p>
    </div>
  );
}

export default Help;

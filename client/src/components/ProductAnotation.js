import React from "react";
import "./ProductAnotation.css";

function ProductAnotation({ anotation }) {
  return (
    <div className="product__anotation">
      <div className="anotation__title">
        <p className="anotation__title__item active">ანოტაცია</p>
        <p className="anotation__title__item">შემადგენლობა</p>
      </div>

      <div className="anotation">
        {/* <div className="composition">
          შემადგენლობა შემადგენლობა შემადგენლობა შემადგენლობა შემადგენლობა
          შემადგენლობა შემადგენლობა შემადგენლობა შემადგენლობა
        </div> */}
        {/* <div>
          <p className="name">რედუქსინი</p>
          <p className="eng__name">საერთაშორისო დასახელება - raduksin</p>
          <p className="group">
            კლინიკურ-ბარმაკოლოგიური ჯგუფი <br />
            არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ
            ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ
            არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ
            ასდასდასდა დასდ ასდა დ
          </p>
          <p className="review">
            აღწერა <br />
            ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ
            არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ
            ასდასდასდა დასდ ასდა დ
          </p>
          <p className="pharma">
            ფარმაკოლოგიური თვიესებები <br />
            ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ
            არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ
            ასდასდასდა დასდ ასდა დასდასდასდა დასდ ასდა დ არასტერილური ბაასდ
            ასდასდასდა დასდ ასდა დ არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ
            არასტერილური ბაასდ ასდასდასდა დასდ ასდა დ
          </p>
        </div> */}
        <p>{anotation}</p>
      </div>
    </div>
  );
}

export default ProductAnotation;
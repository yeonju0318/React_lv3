import React from "react";
import { useState, useRef } from "react";

function Modal2() {
  const [menuBtnClick, setMenuBtnClick] = useState(false);
  const outSection = useRef();

  return (
    <>
      {menuBtnClick === true ? (
        <div
          className="modal-outside"
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              setMenuBtnClick(false);
            }
          }}
        >
          <div className="modal-content">
            닫기 버튼 1개가 있고,외부 영역을 누르면 모달이 닫혀요.
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal2;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPickedData } from "../../BLL/Squares/squares.selector";
import { setUsed } from "../../BLL/Squares/squares.slice";
import "./squares.scss";

function Squares() {
  const dispatch = useDispatch();
  let pickedData: any = useSelector(selectPickedData);

  return (
    <div className="squares__board">
      {pickedData &&
        pickedData.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`squares__block ${item.used && "used"}`}
              onMouseEnter={() => {
                if (item.used) {
                  dispatch(setUsed([pickedData, index, false]));
                } else {
                  dispatch(setUsed([pickedData, index, true]));
                }
              }}
            ></div>
          );
        })}
    </div>
  );
}

export default Squares;

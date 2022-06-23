import React from "react";
import { useSelector } from "react-redux";
import { selectPickedData } from "../../BLL/Squares/squares.selector";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./hoverSquares.scss";
const uniqid = require("uniqid");

function HoverSquares() {
  let pickedData: any = useSelector(selectPickedData);

  return (
    <div className="hover-squares">
      <Typography className="hover-squares__typography">
        {pickedData && "Hover squares"}
      </Typography>
      {pickedData && (
        <div className="hover-squares__scroll">
          {pickedData
            .filter((item: any) => {
              if (item.used) {
                return item;
              }
            })
            .map((item: any) => {
              return (
                <div key={uniqid()} className="hover-squares__block">
                  {item.info}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default HoverSquares;

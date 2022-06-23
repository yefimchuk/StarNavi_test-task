import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { fetchSquaresData, setPickData } from "../../BLL/Squares/squares.slice";
import "antd/dist/antd.css";
import "./pickMode.scss";

const { Option } = Select;

function PickMode() {
  const dispatch = useDispatch();
  const [pickValue, setPickValue] = useState("");
  useEffect(() => {
    dispatch(fetchSquaresData({}));
  }, [dispatch]);
  const handleChange = (value: string) => {
    setPickValue(value);
  };

  return (
    <div className="pick-mode">
      <Select
        defaultValue="Pick mode "
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Easy">Easy</Option>
        <Option value="Normal">Normal</Option>
        <Option value="Hard">Hard</Option>
      </Select>
      <button
        className="pick-mode__button"
        onClick={() => dispatch(setPickData(pickValue))}
      >
        Start
      </button>
    </div>
  );
}

export default PickMode;

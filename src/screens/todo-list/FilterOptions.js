import React from "react";
import { Space } from "antd";

const FilterOptions = ({ viewAll, viewActive, viewComplete }) => {
  return (
    <div>
      <Space className="filter__data">
        <span onClick={viewAll}>View All</span>/
        <span onClick={viewActive}>Active</span>/
        <span onClick={viewComplete}>Completed</span>
      </Space>
    </div>
  );
};

export default FilterOptions;

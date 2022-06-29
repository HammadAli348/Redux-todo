import React from "react";

import { Input, Button } from "antd";

const SharedInput = ({ data, setData, addHandler, editInput }) => {
  return (
    <Input.Group compact>
      <Input
        placeholder="Add Todo"
        style={{
          width: editInput ? "10rem" : "30rem",
        }}
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
      <Button className="todo__button" type="primary" onClick={addHandler}>
        {editInput ? "Save" : "Add Item"}
      </Button>
    </Input.Group>
  );
};

export default React.memo(SharedInput);

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BasicDetails from "./basic-form";

const UpdateMovie = () => {
  const { id } = useParams();
  let [data, setData] = useState();

  const getMovies = useSelector((state) => state?.movieReducer?.movies);

  useEffect(() => {
    if (id) {
      let records = getMovies.filter((res) => res.id === id);
      setData(records[0]);
    }
  }, [id]);

  console.log({ id });

  return (
    <div className="add__movie">
      <BasicDetails intialData={data} />
    </div>
  );
};

export default UpdateMovie;

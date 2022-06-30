import React from "react";
import { useNavigate } from "react-router-dom";

import { Image, Typography } from "antd";

import { useSelector } from "react-redux";

import "./showMovies.css";
import browserRoute from "../../constants/path";

const ShowMovies = () => {
  const { Text } = Typography;
  const movies = useSelector((state) => state?.movieReducer?.movies);
  let navigate = useNavigate();

  const showMovieData = (id) => {
    navigate(`${browserRoute.ADD_MOVIE}/${id}`);
  };

  return (
    <>
      {movies?.map(({ id, movie_name, amount }) => (
        <div key={id} className="image_card">
          <Image
            preview={false}
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            onClick={() => showMovieData(id)}
          />
          <Text>{movie_name}</Text>
          <Text>{amount}</Text>
        </div>
      ))}
    </>
  );
};

export default ShowMovies;

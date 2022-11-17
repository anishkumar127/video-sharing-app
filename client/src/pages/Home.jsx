import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Home = ({ type }) => {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      // const res = await axios.get(`http://localhost:5000/api/videos/${type}`);
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {/* {Array.from(videos)
        ? Array.from(videos).map((video) => (
            <Card key={video._id} video={video} />
          ))
        : null} */}
      {/* {Array.from(Videos).map((video) => (
        <Card key={video._id} video={video} />
      ))} */}
      {Videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;

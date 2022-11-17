import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      // const res = await axios.get("/videos/random");
      // const res = await axios.get(`http://localhost:5000/api/videos/${type}`);
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
      // console.log(typeof res.data);
      // console.log(res.data.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {Array.isArray(videos)
        ? videos.map((video) => <Card key={video._id} video={video} />)
        : null}
    </Container>
  );
};

export default Home;

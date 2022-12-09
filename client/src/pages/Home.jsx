import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "../components/Card";
// import axios from "axios";
import axiosInstance from "../axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axiosInstance.get(`/videos/${type}`, {
        withCredentials: true,
      });
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos && videos.length > 0 ? (
        videos.map((video) => <Card key={video._id} video={video} />)
      ) : (
        <>
          No videos found...due to slow database server issue. please wait a
          while.
        </>
      )}
    </Container>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Comments from "../components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess, like, dislike } from "../redux/videoSlice";
import axiosInstance from "../axios";
import { subscription } from "../redux/userSlice";
import Recommendation from "../components/Recommendation";

import { format } from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  // console.log(currentVideo); // getting null
  const [channel, setChannel] = useState({});

  /*
  // console.log(path); ok hai video user id aa rahi hai.
  // its working its getting all the data.
  const test = async () => {
    const isWorking = await axios.get(
      "http://localhost:5000/api/videos/find/63931e44de7c22e61c4ffd6c"
      );
      console.log(isWorking.data);
      console.log(isWorking.data.videoUrl);
    };
    const videoRes = test();
    console.log(videoRes);

    */

  // {withCredentials: true}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axiosInstance.get(`/videos/find/${path}`, {
          withCredentials: true,
        });
        // console.log(videoRes);
        const updatedView = await axiosInstance.put(`videos/view/${path}`);
        // console.log(updatedView.data, "view is updating");
        const channelRes = await axiosInstance.get(
          `/users/find/${videoRes.data.userId}`,
          { withCredentials: true }
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.log(err);
        return "opps something went wrong!";
      }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    try {
      await axiosInstance.put(`/users/like/${currentVideo._id}`, {
        withCredentials: true,
      });
      dispatch(like(currentUser._id));
    } catch (err) {
      console.log(err);
      return "opps something went wrong!";
    }
  };
  const handleDislike = async () => {
    try {
      await axiosInstance.put(`/users/dislike/${currentVideo._id}`, {
        withCredentials: true,
      });
      dispatch(dislike(currentUser._id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axiosInstance.put(`/users/unsub/${channel._id}`, {
          withCredentials: true,
        })
      : await axiosInstance.put(`/users/sub/${channel._id}`, {
          withCredentials: true,
        });
    dispatch(subscription(channel._id));
  };

  if (!currentUser) return "Loading....";
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views •{format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={() => handleLike()}>
              {currentVideo?.likes.includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{" "}
              {currentVideo?.likes.length}
            </Button>
            <Button onClick={() => handleDislike()}>
              {currentVideo?.dislikes.includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />

            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  );
};

export default Video;

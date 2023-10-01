import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { parseCookies } from "nookies";
import Feed from "../components/Feed";
import baseUrl from "../utils/baseUrl";
import styles from "../styles/styles.module.css";
import RightSideColumn from "../components/RightSideColumn";

function Home({ user, userFollowStats, postsData, chatsData, errorLoading }) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // Update the window width when the component mounts
    setWindowWidth(window.innerWidth);

    // Add a listener to update the window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Conditionally render the Sidebar based on screen width
  const renderSidebar = windowWidth > 500;

  return (
    <>
      <div className="bg-gray-100 min-h-screen ">
        <Header user={user} />

        <main className="flex">
          {/* <Sidebar user={user} /> */}
          {renderSidebar && <Sidebar user={user}/>}
          <Feed
            user={user}
            postsData={postsData}
            errorLoading={errorLoading}
            increaseSizeAnim={{
              sizeIncDown: styles.increasesizereally,
              sizeIncUp: styles.sizeup,
            }}
          />
          <RightSideColumn
            chatsData={chatsData}
            userFollowStats={userFollowStats}
            user={user}
          />
        </main>
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token },
      params: { pageNumber: 1 },
      // pageNumber set to 1
    });

    const chatRes = await axios.get(`${baseUrl}/api/chats`, {
      headers: { Authorization: token },
    });

    return { postsData: res.data, chatsData: chatRes.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Home;

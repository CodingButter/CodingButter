import { useState, createContext, useEffect } from "react";
const twitchButterEndoint = "http://localhost:3000/apis/twitch/";
const dataToGrab = { "status": "", "stream": {}, "schedule": [], "streamclips": [] };
const dataToGrabKeys = Object.keys(dataToGrab)
const getEnpointData = async (endpoint) => {
  const fetchedResponse = await fetch(`${twitchButterEndoint}${endpoint}`);
  const { response } = await fetchedResponse.json();
  return response;
};

const getTwitchData = async () => {
  try {
    const dataArray = await Promise.all(
      dataToGrabKeys.map((endpoint) => getEnpointData(endpoint))
    );
    const data = {};
    dataArray.forEach((value, index) => {
      data[dataToGrabKeys[index]] = value;
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const TwitchContext = createContext();

export const UseTwitchContext = ({ children }) => {
  const [twitchData, setTwitchData] = useState(dataToGrab);

  const updateTwitchData = async () => {
    const twitchData = await getTwitchData();
    setTwitchData(twitchData);
  };

  useEffect(() => {
    const getIntval = setInterval(() => {
      updateTwitchData();
    }, 1000 * 60);
    updateTwitchData();
    return () => {
      clearInterval(getIntval);
    };
  }, []);

  return (
    <TwitchContext.Provider value={twitchData}>
      {children}
    </TwitchContext.Provider>
  );
};

import { createContext, useContext } from "react";

const SpotifyContext = createContext<any>(undefined);

const useSpotify = () => {
  const context = useContext<any>(SpotifyContext);
  

  return context;
};

export { SpotifyContext, useSpotify };

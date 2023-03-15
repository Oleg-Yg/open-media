import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import LabelInput from "./components/LabelInput";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [song, setSong] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    checkAudioSrc(song);
  }, [song]);

  const onSearchChange = () => {
    setIsSearch(true);
  };

  const checkAudioSrc = useCallback((src: string) => {
    const audio = new Audio();
    setIsError(false);

    audio.addEventListener(
      "error",
      function () {
        setIsError(true);
      },
      false
    );
    audio.src = src;
  }, []);

  const onClickSend = () => {
    if (isError) return;
    setIsSearch(false);
  };

  return (
    <div className="App">
      {isSearch ? (
        <>
          <span className={"title"}>Insert the link</span>
          <LabelInput
            value={song}
            setValue={setSong}
            isError={isError}
            onClickSend={onClickSend}
            errorMassage={"Error message here"}
          />
        </>
      ) : (
        <>
          <button className={"back"} onClick={onSearchChange}>
            <img className={"backIcon"} src={"static/icons/BackIcon.png"} />
            Back
          </button>
          <AudioPlayer song={song} />
        </>
      )}
    </div>
  );
}

export default App;

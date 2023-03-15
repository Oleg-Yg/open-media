import React, { ChangeEvent, useRef, useState } from "react";
import s from "./styles.module.scss";
import { AudioPlayerProps } from "./types";
import { getFormattedTime } from "./utils";

const AudioPlayer: React.FC<AudioPlayerProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [volume, setVolume] = useState(100);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = (audio.duration / 100) * +e.target.value;
    setPercentage(+e.target.value);
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = +e.target.value / 100;
    setVolume(+e.target.value);
  };

  const getCurrDuration = (e: React.ChangeEvent<HTMLAudioElement>) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);

    setPercentage(+percent);
    setCurrentTime(+e.currentTarget.currentTime.toFixed(0));
  };

  return (
    <div className={s.audioPlayer}>
      <audio ref={audioRef} onTimeUpdate={getCurrDuration} src={song} />

      <div>
        <button className={s.button} onClick={play}>
          {!isPlaying ? (
            <img className={s.playIcon} src={"static/icons/Play.png"} />
          ) : (
            <img className={s.playIcon} src={"static/icons/Pause.png"} />
          )}
        </button>
      </div>

      <input
        className={s.slider}
        type={"range"}
        value={percentage}
        onChange={onSliderChange}
        style={{
          background: `linear-gradient(90deg, #FFFFFF ${percentage}%, #ADACAD ${percentage}%)`,
        }}
      />

      <div className={s.info}>
        <div className={s.time}>{getFormattedTime(currentTime)}</div>
        <input
          className={s.volume}
          type={"range"}
          value={volume}
          onChange={onVolumeChange}
          style={{
            background: `linear-gradient(90deg, #000000 ${volume}%, #FFFFFF ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

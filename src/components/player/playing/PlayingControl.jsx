import React, { useRef, useState, useEffect } from 'react';
import { PiShuffleBold, PiDevicesBold } from "react-icons/pi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5';
import { BiRepeat } from "react-icons/bi";
import Song from "../../../assets/song.mp3";

const PlayingControl = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
        return () => {
            audio.removeEventListener('timeupdate', updateTime);
        };
    }, []);

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeDrag = (e) => {
        const progressBar = e.target;
        const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  return (
      <div className="col-span-2 flex items-center justify-center flex-col space-y-2">
          <div className="w-full flex items-center justify-center flex-col space-y-2">
              <div className="flex items-center justify-center gap-x-5">
                  <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                      <PiShuffleBold className='w-5 h-5' />
                  </button>
                  <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                      <GiPreviousButton className='w-5 h-5' />
                  </button>
                  <button
                      onClick={togglePlayPause}
                      className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-900 flex items-center justify-center"
                  >
                      {isPlaying ? (
                          <IoPauseSharp className='w-5 h-5' />
                      ) : (
                          <IoPlaySharp className='w-5 h-5 ml-1' />
                      )}
                  </button>
                  <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                      <GiNextButton className='w-5 h-5' />
                  </button>
                  <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                      <BiRepeat className='rotate-180 w-5 h-5' />
                  </button>
              </div>
              <div className="md:w-3/4 w-full flex items-center justify-center gap-x-3">
                  <p className="text-xs text-neutral-400 font-medium">{formatTime(currentTime)}</p>
                  <div className="flex-1 h-1 bg-neutral-700/60 rounded-full relative cursor-pointer" onClick={handleTimeDrag}>
                      <div
                          className="h-1 bg-green-600 rounded-full"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                      ></div>
                  </div>
                  <p className="text-xs text-neutral-400 font-medium">{formatTime(duration)}</p>
              </div>
          </div>
          <audio ref={audioRef} src={Song} onTimeUpdate={updateTime} />
      </div>
  )
}

export default PlayingControl
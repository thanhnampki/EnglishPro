'use client';

import { useRef, useEffect, useState } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  playbackSpeed: number;
  startTime?: number;
  endTime?: number;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export function AudioPlayer({
  audioUrl,
  playbackSpeed,
  startTime = 0,
  endTime,
  onPlay,
  onPause,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Update playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Monitor time and stop at endTime
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !endTime) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= endTime) {
        audio.pause();
        setIsPlaying(false);
        onPause?.();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [endTime, onPause]);

  const handlePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = startTime;
    audioRef.current.play();
    setIsPlaying(true);
    onPlay?.();
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPause?.();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onEnded?.();
  };

  return {
    audioElement: (
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={handleEnded}
        preload="metadata"
      />
    ),
    isPlaying,
    play: handlePlay,
    pause: handlePause,
    seek: (time: number) => {
      if (audioRef.current) {
        audioRef.current.currentTime = time;
      }
    },
    getCurrentTime: () => audioRef.current?.currentTime ?? 0,
  };
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { youtubeWatchUrl } from "@/lib/youtube";
import { YouTubePlayer } from "./YouTubePlayer";

interface Props {
  slug: string;
  videoId: string;
  title: string;
  poster: string;
}

export function VideoPlayer({ slug, videoId, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) containerRef.current?.focus();
  }, [playing]);

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      role="group"
      aria-label={`Video: ${title}`}
      className="relative aspect-(--video-ratio) overflow-hidden rounded-md bg-ink outline-none"
    >
      <Image
        src={poster}
        alt=""
        fill
        preload
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />

      {playing ? (
        <div className="absolute inset-0 [&>*]:size-full [&_iframe]:size-full">
          <YouTubePlayer
            slug={slug}
            src={youtubeWatchUrl(videoId)}
            title={title}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 grid place-items-center bg-overlay-video outline-none"
        >
          <span className="grid size-(--play-size) place-items-center rounded-full bg-white transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-white motion-reduce:transition-none">
            <Play
              size={28}
              className="ms-1 fill-accent text-accent"
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect } from "react";
import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { VideoSkin } from "@videojs/react/video";
import { YouTubeVideo } from "@videojs/react/media/youtube-video";
import { saveCoursePercent } from "@/lib/storage";

const { Player, usePlayer } = createPlayer({ features: videoFeatures });

function ProgressTracker({ slug }: { slug: string }) {
  const percent = usePlayer((state) =>
    state.duration > 0
      ? Math.round((state.currentTime / state.duration) * 100)
      : 0,
  );

  useEffect(() => {
    if (percent > 0) saveCoursePercent(slug, percent);
  }, [slug, percent]);

  return null;
}

interface Props {
  slug: string;
  src: string;
  title: string;
}

export function YouTubePlayer({ slug, src, title }: Props) {
  const setIframeTitle = useCallback(
    (iframe: HTMLIFrameElement | null) => {
      if (iframe) iframe.title = title;
    },
    [title],
  );

  return (
    <Player>
      <VideoSkin>
        <YouTubeVideo ref={setIframeTitle} src={src} autoplay />
      </VideoSkin>
      <ProgressTracker slug={slug} />
    </Player>
  );
}

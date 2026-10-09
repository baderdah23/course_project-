type ThumbnailQuality = "maxresdefault" | "hqdefault" | "mqdefault";

/** maxresdefault is true 16:9 (1280x720) but not every video has it. */
export const youtubeThumbnail = (
  id: string,
  quality: ThumbnailQuality = "maxresdefault",
) => `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

export const youtubeWatchUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;

"use client";

import { useState } from "react";

/** Build a Pollinations.ai on-the-fly image URL from a natural-language prompt. */
export function pollinationsUrl(prompt: string, width = 900, height = 600) {
  const encoded = encodeURIComponent(
    `${prompt.trim()}, photorealistic, sharp focus, high detail`,
  );
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&nologo=true&seed=${hashString(prompt)}`;
}

/** Deterministic seed so the same prompt always yields the same image. */
function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

type AIImageProps = {
  prompt: string;
  fallback: string;
  alt: string;
  className?: string;
};

/** Loads a Pollinations AI image, falling back to a local SVG on failure. */
export default function AIImage({
  prompt,
  fallback,
  alt,
  className,
}: AIImageProps) {
  const [failed, setFailed] = useState(false);
  const src = failed ? fallback : pollinationsUrl(prompt);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

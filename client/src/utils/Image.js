import React from "react";

export default function Image({ src, className, alt }) {
  return <img src={src} alt={alt} className={className} />;
}

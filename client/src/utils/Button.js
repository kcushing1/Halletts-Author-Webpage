import React from "react";

export default function Button({ className, href, text }) {
  return (
    <button type="button" className={className}>
      <a
        href={href}
        target="_blank"
        className="text-reset text-decoration-none"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </button>
  );
}

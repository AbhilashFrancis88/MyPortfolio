import React from 'react';

export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="site-logo"
    >
      {/* Hexagon outline */}
      <path
        d="M60 4L110.62 33V91L60 120L9.38 91V33L60 4Z"
        stroke="var(--cyan)"
        strokeWidth="4"
        fill="var(--bg)"
      />

      {/* Inner glow accent */}
      <path
        d="M60 4L110.62 33V91L60 120L9.38 91V33L60 4Z"
        fill="var(--indigo)"
        opacity="0.08"
      />

      {/* Letter A */}
      <path
        d="M32 88L52 34H58L78 88H71L66.2 76H43.8L39 88H32ZM46 70H64L55 44L46 70Z"
        fill="var(--text)"
      />

      {/* Letter F - overlapping, offset right */}
      <path
        d="M62 88V40H88V47H69V60H84V67H69V88H62Z"
        fill="var(--cyan)"
        opacity="0.85"
      />

      {/* Code bracket accents */}
      <path
        d="M18 58L28 48V52L22 58L28 64V68L18 58Z"
        fill="var(--indigo)"
      />
      <path
        d="M102 58L92 48V52L98 58L92 64V68L102 58Z"
        fill="var(--indigo)"
      />
    </svg>
  );
}

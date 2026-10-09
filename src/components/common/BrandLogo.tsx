interface BrandLogoProps {
  className?: string;
  inverted?: boolean;
}

export default function BrandLogo({
  className = "",
  inverted = false,
}: BrandLogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 370 82"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 70V37C11 18.8 24.6 9 41 9s30 9.8 30 28v33"
        stroke={inverted ? "var(--spice)" : "var(--grill)"}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M28 27h19c7 0 11 3.5 11 9s-4.3 9-11.4 9H28zm0 18h20c8 0 12 4 12 10s-4.6 10-12.6 10H28z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text
        x="91"
        y="48"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="39"
        fontWeight="700"
        letterSpacing="-1.4"
      >
        Broadway
      </text>
      <text
        x="94"
        y="70"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="4.1"
      >
        KEBAB · TOOTING
      </text>
    </svg>
  );
}

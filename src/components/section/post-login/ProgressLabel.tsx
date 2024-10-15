import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularWithValueLabel() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        strokeWidth={12}
        value={66}
        styles={buildStyles({
          pathColor: "url(#gradient)", // Apply gradient to the path
          trailColor: "var(--ik_greenvariant)", // Light color for the background circle
        })}
      />
      <svg>
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00796b" /> {/* Darker teal */}
            <stop offset="100%" stopColor="#80deea" /> {/* Lighter blue */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

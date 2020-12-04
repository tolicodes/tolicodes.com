import React from "react";

export function Project() {
  return (
    <g id="project">
      <rect
        id={"project-1"}
        className="cls-1"
        width="180"
        height="54"
        rx="12.19"
      />
      <image
        x={10}
        y={10}
        href="https://cdn.thedoctorschannel.com/wp-content/themes/WhosWho/theme-2018/images/tdc-logo.svg"
        height={32}
        width={32}
      />
      <text
        x={10}
        y={
          document.getElementById("project-1")?.getBoundingClientRect().height /
          2
        }
      >
        The Doctor\'s Channel
      </text>
    </g>
  );
}

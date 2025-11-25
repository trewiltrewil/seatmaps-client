import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function ({
  borderColor = "lightgray",
  backgroundColor = "white",
  textColor,
  style,
  ...props
}: Props) {
  return (
    <div
      {...props}
      style={{
        pointerEvents: "all",
        border: `2px solid ${borderColor}`,
        borderRadius: 5,
        display: "flex",
        backgroundColor,
        color: textColor,
        ...(style || {}),
      }}
    />
  );
}

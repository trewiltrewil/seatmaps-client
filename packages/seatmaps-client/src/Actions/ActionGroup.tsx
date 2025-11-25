import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  borderColor?: string;
  backgroundColor?: string;
}

export default function ActionGroup({
  borderColor = "lightgray",
  backgroundColor = "white",
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
        ...(style || {}),
      }}
    />
  );
}

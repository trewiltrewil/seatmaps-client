# Seatmaps Client Theming

The Seatmaps client supports optional theming props so you can tune the map and UI for light or dark backgrounds without changing your data pipeline. All props are optional and default to the light-theme values currently shipped in the library, so existing integrations continue to work.

## Available theming props

| Prop | Default | Purpose |
| --- | --- | --- |
| `mapBackgroundColor` | `#FFFFFF` | Background color applied to the injected SVG and container. Useful for dark mode (e.g. `#000000`). |
| `sectionStrokeColor` | `#FFFFFF` | Stroke color for unselected sections. Helps keep outlines visible on dark backgrounds. |
| `sectionHighlightStrokeColor` | `#4a4a4a` | Stroke color for highlighted sections. |
| `sectionLabelColor` | `#000000` | Color used for section label text rendered inside the SVG. |
| `legendBackgroundColor` | `white` | Background color for the legend container. |
| `legendBorderColor` | `lightgray` | Border color for the legend container. |
| `legendTextColor` | `black` | Text color for legend headings and labels. |
| `controlIconColor` | `black` | Color applied to the zoom/reset/clear icons. |
| `controlBorderColor` | `lightgray` | Divider color between control buttons. |
| `controlBackgroundColor` | `white` | Background color for the control button group. |

### Notes
- Section fill colors remain configurable via `sectionPercentiles` as before.
- Hover/selection opacity behavior is unchanged; only stroke and label colors are themeable through these props.
- The props above are available on both the `TicketMap` React component and the `SeatmapFactory` options object.

## Usage

### With `TicketMap`
```tsx
import { TicketMap } from "@ticketevolution/seatmaps-client";

export function DarkModeSeatmap() {
  return (
    <TicketMap
      venueId="896"
      configurationId="14341"
      mapBackgroundColor="#000000"
      sectionStrokeColor="#444444"
      sectionHighlightStrokeColor="#9e9e9e"
      sectionLabelColor="#e6e6e6"
      legendBackgroundColor="#1c1c1c"
      legendBorderColor="#3a3a3a"
      legendTextColor="#f5f5f5"
      controlIconColor="#f5f5f5"
      controlBorderColor="#3a3a3a"
      controlBackgroundColor="#1c1c1c"
    />
  );
}
```

### With `SeatmapFactory`
```js
import { SeatmapFactory } from "@ticketevolution/seatmaps-client";

const factory = new SeatmapFactory({
  venueId: "896",
  configurationId: "14341",
  mapBackgroundColor: "#0b0b0b",
  sectionStrokeColor: "#4d4d4d",
  sectionLabelColor: "#f0f0f0",
  legendBackgroundColor: "#1f1f1f",
  legendTextColor: "#ededed",
  legendBorderColor: "#3d3d3d",
  controlIconColor: "#ededed",
  controlBorderColor: "#3d3d3d",
  controlBackgroundColor: "#1f1f1f",
});

factory.build("my-map-root");
```

Use these props to quickly prototype dark-mode colors in the Vite example (`examples/vite-build-standalone`) by changing the inputs above the map and rebuilding the seatmap.

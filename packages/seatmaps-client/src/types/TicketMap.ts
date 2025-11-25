import { TicketGroup, NormalizedTicketGroup } from "./TicketGroups";

export interface NormalizedTicketGroupsBySection {
  [section: string]: NormalizedTicketGroup[];
}

export interface CostRange {
  color: string;
  min: number;
  max: number;
  percentile: number;
  ticketGroups: TicketGroup[];
}

export interface Percentiles {
  [key: string]: string;
}

export interface SectionMapping {
  [section: string]: {
    sectionName: string;
  };
}

export interface Manifest {
  sections: {
    [key: string]: object;
  };
}

export interface DefaultProps {
  showLegend: boolean;
  mapFontFamily: string;
  mapBackgroundColor: string;
  selectedSections: string[];
  ticketGroups: TicketGroup[];
  sectionPercentiles: Percentiles;
  sectionStrokeColor: string;
  sectionHighlightStrokeColor: string;
  sectionLabelColor: string;
  mapsDomain: string;
  onSelection(sections: string[]): void;
  showControls: boolean;
  showLegendOpenAlwaysForDesktop: boolean;
  openLegendInitially: boolean;
  mouseControlEnabled: boolean;
  showZoomHelper: boolean;
  legendBackgroundColor: string;
  legendTextColor: string;
  legendBorderColor: string;
  controlIconColor: string;
  controlBorderColor: string;
  controlBackgroundColor: string;
  missingSeatMapLogo?: React.ReactNode;
}

export interface RequiredProps {
  venueId: string;
  configurationId: string;
}

export type Props = Partial<DefaultProps> & RequiredProps;

export interface State {
  mapSvg?: SVGSVGElement;
  sectionMapping: SectionMapping;
  ticketGroups: TicketGroup[];
  selectedSections: Set<string>;
  currentHoveredSection?: string;
  tooltipActive: boolean;
  tooltipSectionName: string;
  tooltipX: number;
  tooltipY: number;
  mapNotFound: boolean;
  touchStarts: {
    [touchID: number]: {
      x: number;
      y: number;
    };
  };
  dragging: boolean;
  isTouchDevice: boolean;
  // NOTE: unused internaly, should be removed in next version
  previousTouches?: unknown;
}

import * as React from "react";
import { Styler } from "./styler";
import { ChartProps } from "./Charts";
import { CurveInterpolation } from "./types";
import { LineChartChannelStyle, LineChartStyle } from "./style";
import "@types/d3-shape";
export declare type LineChartProps = ChartProps & {
    series: any;
    axis: string;
    columns?: string[];
    style?: LineChartStyle | ((column: string) => LineChartChannelStyle) | Styler;
    interpolation?: CurveInterpolation;
    breakLine?: boolean;
    selection?: string;
    onSelectionChange?: (...args: any[]) => any;
    highlight?: string;
    onHighlightChange?: (...args: any[]) => any;
};
export declare type Point = {
    x: Date;
    y: number;
};
export declare type PointData = Point[];
export declare class LineChart extends React.Component<LineChartProps, {}> {
    static defaultProps: Partial<LineChartProps>;
    shouldComponentUpdate(nextProps: LineChartProps): boolean;
    handleHover(e: React.MouseEvent<SVGPathElement>, column: string): void;
    handleHoverLeave(): void;
    handleClick(e: React.MouseEvent<SVGPathElement>, column: string): void;
    providedPathStyleMap(column: string): LineChartChannelStyle;
    pathStyle(column: string): {
        stroke: string;
        fill: string;
        strokeWidth: number;
    } & React.CSSProperties;
    renderPath(data: PointData, column: string, key: number): JSX.Element;
    renderLines(): JSX.Element[];
    renderLine(column: string): JSX.Element;
    render(): JSX.Element;
}
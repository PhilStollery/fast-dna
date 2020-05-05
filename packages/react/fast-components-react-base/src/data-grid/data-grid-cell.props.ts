import React from "react";
import {
    DataGridCellClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import { DataGridColumnDefinition } from "./data-grid.props";

export const CellIdKey: string = "data-cellid";

export type DataGridCellManagedClasses = ManagedClasses<DataGridCellClassNameContract>;
export type DataGridCellUnhandledProps = React.AllHTMLAttributes<HTMLElement>;

export interface DataGridCellHandledProps extends DataGridCellManagedClasses {
    /**
     *  Data for this row
     */
    rowData: object;

    /**
     * Column definition for this row
     */
    columnDefinition: DataGridColumnDefinition;

    /**
     * The column index
     */
    columnIndex: number;
}

export type DataGridCellProps = DataGridCellHandledProps & DataGridCellUnhandledProps;

import { TablePagination } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import React from "react";

export interface TableFooterPaginationProps {
  totalRecordCount: number;
  rowsPerPage: number;
  page: number;
  handleChangeRowsPerPage: (
    // eslint-disable-next-line no-unused-vars
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // eslint-disable-next-line no-unused-vars
  handleChangePage: (event: unknown, newPage: number) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,no-unused-vars
export function TableFooterPagination<T>({
  totalRecordCount,
  rowsPerPage,
  handleChangeRowsPerPage,
  page,
  handleChangePage,
}: TableFooterPaginationProps) {
  return (
    <TableContainer>
      <div className="card-table-action" style={{ paddingRight: "1rem" }}>
        <TablePagination
          component="div"
          count={totalRecordCount}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[3, 10, 20, 50, 100]}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </TableContainer>
  );
}

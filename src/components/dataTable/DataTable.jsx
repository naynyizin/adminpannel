import React from "react";
import "./dataTable.scss";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { NoteAltOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  const handleDelete = (id: number) => {
    //delete the item
    console.log(id + " has been deleted!");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <div className="action">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <NoteAltOutlined className="icn icnedit" />
            </Link>
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Link>
              <DeleteOutlineOutlined className="icn icndelete" />
            </Link>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      {" "}
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;

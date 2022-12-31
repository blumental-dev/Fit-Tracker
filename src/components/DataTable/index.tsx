import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import CustomRating from "../Rating";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "exerciseName", headerName: "Exercise Name", width: 130 },
  { field: "bodyPart", headerName: "Related Muscle Group", width: 200 },
  {
    field: "difficultyLevel",
    headerName: "Difficulty Level",
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <CustomRating
        value={params.value}
        readOnly
        onChangeValue={(value: number) => {
          return value;
        }}
      />
    ),
  },
  {
    field: "edit",
    headerName: "",
    sortable: false,
    width: 200,
    align: "center",
    disableColumnMenu: true,
    valueGetter: (params: GridValueGetterParams) => `${params.row.id || ""}`,
    renderCell: () => (
      <Box
        sx={{
          width: "-webkit-fill-available",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  },
];

const excludedColumns: GridColumnVisibilityModel = {
  id: false,
};

const rows = [
  { id: 1, bodyPart: "Snow", exerciseName: "Jon", difficultyLevel: 4.5 },
  { id: 2, bodyPart: "Lannister", exerciseName: "Cersei", difficultyLevel: 3 },
  { id: 3, bodyPart: "Lannister", exerciseName: "Jaime", difficultyLevel: 3.5 },
  { id: 4, bodyPart: "Stark", exerciseName: "Arya", difficultyLevel: 5 },
  {
    id: 5,
    bodyPart: "Targaryen",
    exerciseName: "Daenerys",
    difficultyLevel: null,
  },
  { id: 6, bodyPart: "Melisandre", exerciseName: null, difficultyLevel: 4 },
  { id: 7, bodyPart: "Clifford", exerciseName: "Ferrara", difficultyLevel: 1 },
  { id: 8, bodyPart: "Frances", exerciseName: "Rossini", difficultyLevel: 2.5 },
  { id: 9, bodyPart: "Roxie", exerciseName: "Harvey", difficultyLevel: 5 },
];

export default function DataTable() {
  return (
    <Box
      sx={{
        height: "65vh",
      }}
    >
      <DataGrid
        sx={[
          {
            ".MuiDataGrid-row > .MuiDataGrid-cell:first-child": {
              zIndex: "20",
              position: "sticky",
              left: 0,
              backgroundColor: "tableBackground.firstCell",
              borderRight: "1px solid",
              borderRightColor: "tableBackground.firstCellRightBorder",
            },
            ".MuiDataGrid-cell": {
              borderBottomColor: "tableBackground.firstCellRightBorder",
            },
            ".css-1cwmy2c-MuiDataGrid-columnHeaders": {
              borderBottomColor: "tableBackground.firstCellRightBorder",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
          },
          { border: "unset", backgroundColor: "tableBackground.main" },
        ]}
        rows={rows}
        columns={columns}
        columnVisibilityModel={excludedColumns}
        hideFooter
        hideFooterSelectedRowCount
        disableColumnSelector
        disableColumnFilter
      />
    </Box>
  );
}

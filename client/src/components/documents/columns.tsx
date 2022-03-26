import {
  Delete,
  DriveFileRenameOutline,
  Link,
  OpenInNew,
} from '@mui/icons-material';
import {
  GridActionsCellItem,
  GridActionsColDef,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
} from '@mui/x-data-grid-pro';
import {
  getDateString,
  getSizeString,
  getTimeString,
} from '../../utils/Document';

const actions: GridActionsColDef = {
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => {
    if (params.id <= 2) {
      return [];
    }

    return [
      <GridActionsCellItem
        icon={<Delete />}
        label="Supprimer"
        onClick={() => console.log('Delete')}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<DriveFileRenameOutline />}
        onClick={() => console.log('TextFields')}
        label="Renommer"
        showInMenu
      />,
      <GridActionsCellItem
        icon={<Link />}
        onClick={() => console.log('Partager')}
        label="Partager"
        showInMenu
      />,
      <GridActionsCellItem
        icon={<OpenInNew />}
        onClick={() => console.log('Partager')}
        label="Ouvrir dans un nouvel onglet"
        showInMenu
      />,
    ];
  },
};

export const columns: GridColDef[] = [
  {
    field: 'documentName',
    headerName: 'Document Name',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    type: 'string',
  },
  {
    field: 'documentCreatorId',
    headerName: 'Document Creator',
    sortable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    type: 'string',
  },
  {
    field: 'creationDate',
    headerName: 'Creation Date',
    type: 'date',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => {
      const lastModificationTime = params.row.lastModificationTime;
      return getDateString(lastModificationTime);
    },
  },
  {
    field: 'lastModificationTime',
    headerName: 'Last modification Time',
    type: 'date',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => {
      const lastModificationTime = params.row.lastModificationTime;
      return getTimeString(lastModificationTime);
    },
  },
  {
    field: 'documentSize',
    headerName: 'Size',
    type: 'number',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => {
      return getSizeString(params.row.documentSize);
    },
  },
  actions,
];

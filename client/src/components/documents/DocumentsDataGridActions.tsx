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
import { t, getFixedT } from 'i18next'
import { useTranslation } from 'react-i18next';
import {
  getDateString,
  getSizeString,
  getTimeString,
} from '../../utils/Document';

export const DocumentsDataGridActions: GridActionsColDef = {
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => {
    if (params.id <= 2) {
      return [];
    }

    const { t, i18n } = useTranslation('documents');

    return [
      <GridActionsCellItem
        icon={<Delete />}
        label={t('delete')}
        onClick={() => console.log('Delete')}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<DriveFileRenameOutline />}
        onClick={() => console.log('TextFields')}
        label={t('rename')}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<Link />}
        onClick={() => console.log('Partager')}
        label={t('share')}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<OpenInNew />}
        onClick={() => console.log('Open in new tab')}
        label={t('openInNewTab')}
        showInMenu
      />,
    ];
  },
};

import { Box } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid-pro';
import { DocumentsSearchBar } from './DocumentsSearchBar';


export const DocumentsToolBar = () => {
  return (
    <GridToolbarContainer
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: 'max(2%, 1em)',
        padding: '2% 3%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'bottom',
          justifyContent: 'space-between',
        }}
      >
        <DocumentsSearchBar />
      </Box>

      <GridToolbarDensitySelector
        // onChange?: FormEventHandler<T> | undefined;
        // onChangeCapture?: FormEventHandler<T> | undefined;
        onChangeCapture={() => console.log('onClick')}
      />
    </GridToolbarContainer>
  );
};

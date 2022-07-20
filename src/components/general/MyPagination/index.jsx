import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MyPagination = ({count, page, onChange}) => {
    return (
        <Stack spacing={2}>
          <Pagination 
            count={count}
            page={page} 
            onChange={onChange}
            variant="outlined" 
            shape="rounded"
            color="primary"
          />
      </Stack>
    )
}

export default MyPagination
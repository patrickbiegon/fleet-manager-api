import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({style, totalPages, currentPage, onPageChange}) => {
    return (
        <div style={style}>
            <Stack spacing={2}>
                <Pagination count={totalPages} page={currentPage} onChange={(e, page) => onPageChange(page)} size="large" />
            </Stack>
        </div>
    )
}

export default PaginationComponent;
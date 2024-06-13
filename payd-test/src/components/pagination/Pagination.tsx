import React, { useState } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    // Handling pagination
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }
  return (
    <HStack spacing={4} m={4} justifyContent="center">
        <Button fontWeight={"normal"} onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button fontWeight={"normal"} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
    </HStack>
  )
}

export default Pagination
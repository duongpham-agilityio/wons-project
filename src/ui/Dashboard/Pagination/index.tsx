// Third party
import clsx from 'clsx';
import { useCallback } from 'react';

// Models
import { PaginationProps } from '@/types';

// Components
import { ButtonCustom } from '@/components';
import { ArrowLeft, ArrowRight } from '@/icons';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const navigateToPreviousPage = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const navigateToNextPage = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange]);

  return (
    <div className="flex justify-between items-center mt-4">
      <ButtonCustom
        color="default"
        radius="md"
        startContent={<ArrowLeft width="19px" height="14px" />}
        className={clsx(
          'p-3 gap-4 font-semibold text-base border-1 border-translucent-100',
          { 'cursor-not-allowed opacity-50': currentPage === 1 },
        )}
        disabled={currentPage === 1}
        onClick={navigateToPreviousPage}
      >
        Previous
      </ButtonCustom>
      {totalPages > 0 && (
        <span className="text-ratio-200 dark:text-grayBlue-400 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
      )}
      <ButtonCustom
        color="default"
        radius="md"
        disabled={currentPage === totalPages}
        onClick={navigateToNextPage}
        endContent={<ArrowRight width="19px" height="14px" />}
        className={clsx(
          'p-3 gap-4 font-semibold text-base border-1 border-translucent-100',
          { 'cursor-not-allowed opacity-50': currentPage === totalPages },
        )}
      >
        Next
      </ButtonCustom>
    </div>
  );
};

export default Pagination;

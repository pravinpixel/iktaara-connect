// import Link from 'next/link';
import { useRouter } from "next/router";
// import { loadMore } from 'src/redux/category-slice';
import { Typography } from "@mui/material";
import Image from "next/image";
// import { Pagination } from '@mui/material';
interface PaginationProps {
  from: number;
  to: number;
  total_count: number;
}

const Pagination = ({ from, to, total_count }: PaginationProps) => {
  const router = useRouter();

  const handleLoadMore = () => {
    router.push(
      {
        query: {
          ...router.query,
          page: Number(router?.query?.page ?? 1) + 1,
        },
      },
      undefined,
      {
        scroll: true,
      }
    );
  };

  const handleLoadLess = () => {
    router.push(
      {
        query: {
          ...router.query,
          page: Number(router?.query?.page ?? 1) - 1,
        },
      },
      undefined,
      {
        scroll: true,
      }
    );
  };

  const handleGoToFirstPage = () => {
    router.push(
      {
        query: {
          ...router.query,
          page: 1,
        },
      },
      undefined,
      {
        scroll: true,
      }
    );
  };

  const handleGoToLastPage = () => {
    const itemsPerPage = to - from + 1;
    const totalPages = Math.ceil(total_count / itemsPerPage);
    let lastPage;
    if (total_count % itemsPerPage === 0) {
      lastPage = totalPages - 1;
    } else {
      lastPage = totalPages;
    }

    router.push(
      {
        query: {
          ...router.query,
          page: lastPage,
        },
      },
      undefined,
      {
        scroll: true,
      }
    );
  };
  // const isLastPage = to === total_count;
  return (
    <div className="col-12 text-center mt-2">
      <div className="flex justify-center items-center">
        {/* {total_count > 24 && ( */}
        <>
          <Image
            src="/images/collections/static/Group 1171277073 (1).png"
            alt="loader_1"
            width="14"
            height="14"
            className="cursor-pointer object-contain mr-2"
            onClick={handleGoToFirstPage}
          />
          <Image
            onClick={handleLoadLess}
            src="/images/collections/static/Vector 95.png"
            alt="loader_2"
            width="12"
            height="13"
            className="mr-1 ml-2 cursor-pointer object-contain h-[13px]"
          />
          <Typography
            sx={{ pr: 1 }}
            onClick={handleLoadLess}
            className="text-[14px] font-normal leading-[20.16px] text-[#3b4357] cursor-pointer"
          >
            Prev
          </Typography>
        </>
        {/* )} */}

        <span className="border border-[#818694] rounded-[2px] p-[2px] text-[14px] my-2 font-normal leading-[20.16px] px-2 text-[#3b4357] py-2 rounded">
          {1} to {2}
        </span>
        <span className="text-[14px] font-normal leading-[20.16px] px-2 text-[#3b4357]">
          of
        </span>
        <span className="text-[14px] font-normal leading-[20.16px] mr-3 px-[3px] text-[#3b4357]">
          1
        </span>

        {/* {!isLastPage ? ( */}
        <>
          <Typography
            className="text-[14px] font-normal leading-[20.16px] text-[#3b4357] cursor-pointer"
            onClick={handleLoadMore}
          >
            Next
          </Typography>
          <Image
            onClick={handleLoadMore}
            src="/images/collections/static/Vector 93.png"
            alt="loader_3"
            width="12"
            height="13"
            className="ml-1 mr-3 cursor-pointer object-contain h-[13px]"
          />
          <Image
            src="/images/collections/static/Group 1171277072.png"
            alt="loader_4"
            width="14"
            height="14"
            className="cursor-pointer object-contain"
            onClick={handleGoToLastPage}
          />
        </>
        {/* ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Pagination;

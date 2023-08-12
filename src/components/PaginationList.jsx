import React from "react";

//components
import { Pagination } from "./index";

const PaginationList = ({ data, events, classNames, ...props }) => {
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(data?.length);

  React.useEffect(() => {
    if (data?.length) {
      setTotal(data?.length);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [data]);

  const lastPage = React.useMemo(() => {
    return Math.floor((data?.length - 1) / props?.size) + 1;
  }, [data]);

  const pages = React.useMemo(() => {
    return lastPage > 1 ? [...Array(lastPage)].map((e, i) => i + 1) : [];
  }, [data]);

  return (
    <div className={`${classNames} flex flex-col items-center w-full`}>
      <ul className="flex flex-col w-full">
        {data
          ?.slice((page - 1) * props?.size, page * props?.size)
          ?.map((item, index) => (
            <li key={index} className="px-4 py-8 border-b w-full">
              {item + index}
            </li>
          ))}
      </ul>
      <Pagination
        pages={pages}
        activePage={page}
        events={{ onSetPage: setPage }}
      />
    </div>
  );
};

export default PaginationList;

PaginationList.defaultProps = {
  data: [
    "",
    "",
    "",
    "",
    "",
    "",
    "8",
    "",
    "",
    "6",
    "",
    "",
    "",
    "1",
    "2",
    "3",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "d",
    "d",
    "s",
    "",
    "s",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  size: 10,
};

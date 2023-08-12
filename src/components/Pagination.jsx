import React from "react";

export default function Pagination({ events, data, classNames, ...props }) {
  const ref = React.useRef();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const scroll = (e, dir) => {
    e.stopPropagation();
    if (dir === "right") {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + ref.current.clientWidth / 2,
        behavior: "smooth",
      });
    } else {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - ref.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav aria-label="Page navigation" className={`${classNames} max-w-[300px]`}>
      <ul className="inline-flex items-center -space-x-px w-full h-full">
        <li onClick={(e) => scroll(e, "right")}>
          <div className="cursor-pointer block px-3 py-2 ml-0 leading-tight border border-backgroundText bg-backgroundText text-background rounded-r-lg">
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>

        <div
          ref={ref}
          className="flex overflow-x-scroll no-scrollbar h-full rtl"
        >
          {props?.pages?.map((page, index) => (
            <li
              onClick={() => events["onSetPage"](page)}
              className={`h-full py-1.5 border-[0.5px] border-backgroundText`}
              key={index}
            >
              <a
                key={index}
                href="#"
                className={`px-3 py-1.5 leading-tight ${
                  props?.activePage === page
                    ? "bg-backgroundText text-background"
                    : "bg-background text-backgroundText"
                }`}
              >
                {page}
              </a>
            </li>
          ))}
        </div>
        <li onClick={(e) => scroll(e, "left")}>
          <div className="block cursor-pointer px-3 py-2 ml-0 leading-tight border border-backgroundText bg-backgroundText text-background rounded-l-lg">
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
}

Pagination.defaultProps = {
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

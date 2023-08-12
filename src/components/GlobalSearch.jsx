import { Link } from "react-router-dom";

//components
import { Input } from "./index";

export const GlobalSearch = ({ events, classNames, data, ...props }) => {
  return (
    <div
      className={`${classNames} flex flex-col gap-4 lg:w-[50%]`}
      onClick={(e) => e.stopPropagation(e)}
    >
      <Input
        classNames="lg:px-4 lg:py-7 gap-2 lg:text-xl font-bold text-black"
        name="searchValue"
        value={props?.searchValue || ""}
        events={{
          onChange: (name, value) => events["onChange"](name, value),
          onFocus: (e) => e.stopPropagation(),
          onBlur: () => {},
        }}
        // icon="/assets/icons/search-primary.svg"
      />
      {props?.searchValue ? (
        <SearchResult
          data={props?.data}
          onSelect={() => events["onChange"](name, value)}
        />
      ) : null}
    </div>
  );
};

const SearchResult = ({ data, onSelect, ...props }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full px-6 pt-5 bg-white transition-all dark:bg-darkBackground pb-5 shadow-lg rounded-md flex flex-col overflow-y-scroll z-50 ltr"
      style={{ maxHeight: "calc(100vh / 1.5)" }}
    >
      <header className="w-full flex flex-row-reverse items-center gap-4">
        <strong className="text-surfaceText font-normal text-sm">
          {"محصولات"}
        </strong>
        <span className="flex-1 bg-borderColor h-[1px] bg-opacity-30"></span>
      </header>
      {data?.relatedOptions?.length ? (
        <ul className="list-none p-0 m-0 mt-4 flex flex-col gap-3 divide-solid divide-y divide-gray-200 dark:divide-opacity-30">
          {/* {relatedOptions.map((book, index) => (
            <Link
              to={"/products/" + book.id}
              className="flex flex-row-reverse w-full gap-4 items-center pt-2.5"
              ley={index}
              onClick={() => setText(null)}
            >
              <img
                style={{
                  height: "calc(100vh / 17)",
                  width: "calc(100vh / 17 * 2 / 3)",
                }}
                className="rounded-sm"
                src={`https://dnvn.ir/api/v1/file/${book.fileIds}`}
                alt=""
              ></img>
              <strong className="text-sm pt-2 text-primary font-5">
                {book.product[1].name}
              </strong>
            </Link>
          ))} */}
        </ul>
      ) : (
        <span className="text-primary text-sm text-right py-4 font-5">
          {"هیچ محصولی یافت نشد."}
        </span>
      )}
      <header className="w-full flex flex-row-reverse items-center gap-4 mt-5">
        <strong className="text-surfaceText font-normal text-sm">
          {"صفحات"}
        </strong>
        <span className="flex-1 h-[1px] bg-borderColor bg-opacity-30"></span>
      </header>
      {data?.relatedPages?.length ? (
        <ul className="list-none p-0 m-0 mt-4 flex flex-col gap-3 divide-solid divide-y divide-gray-200 dark:divide-opacity-30">
          {data?.relatedPages?.map((page, index) => (
            <Link
              to={page.link}
              className="flex flex-row-reverse w-full gap-4 items-center text-green-800 dark:text-primary text-tiny font-5 underline pt-2.5"
              ley={index}
              onClick={() => onSelect()}
            >
              {page.name}
            </Link>
          ))}
        </ul>
      ) : (
        <span className="rtl text-primary text-sm text-right py-4 font-5">
          {"هیچ صفحه ای موجود نیست"}
        </span>
      )}
    </div>
  );
};

export default GlobalSearch;

GlobalSearch.defaultProps = {};

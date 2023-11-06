import { Image, Button } from "~/components";
import { baseUrl } from "~/config";
import {
  IoHeart,
  IoHeartCircle,
  IoHeartOutline,
  IoShareOutline,
} from "react-icons/io5";

export default function Sofa({ data, events, classNames, ...props }) {
  return (
    <div
      className={`${classNames} relative rtl min-h-[100vw] rounded-xl shadow-food-1 bg-white shadow-product overflow-hidden gap-4`}
      onClick={() => events["onClick"]()}
    >
      <div className="bg-white w-full rounded-full z-20 absolute left-0 bottom-0 flex items-center justify-between pb-2.5 px-4">
        <strong className="text-sm font-medium w-full text-gray-700">
          {data?.title}
        </strong>
        <div className="flex items-center gap-2">
          <Button
            icon={<IoShareOutline size={"2rem"} />}
            events={{
              onSubmit: () =>
                navigator.canShare() &&
                navigator.share(window.location.href + "/" + data?._id),
            }}
            classNames="text-[#028779]"
          />
          <Button
            icon={<IoHeartOutline size={"2rem"} />}
            events={{ onSubmit: () => {} }}
            classNames="text-red-600"
          />
        </div>
      </div>

      <Image
        events={{ onClick: () => {} }}
        src={baseUrl + "/files/" + data?.fileIds[0]?._id}
        classNames={`min-w-full px-4 absolute left-0 top-1/2 -translate-y-1/2 object-contain`}
      />
    </div>
  );
}

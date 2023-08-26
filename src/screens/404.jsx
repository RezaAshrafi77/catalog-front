import React from "react";

import { useNavigate } from "react-router-dom";
import { Failed, Button } from "~/components";
import { TbError404 } from "react-icons/tb";

export default function NotFound({}) {
  const navigation = useNavigate();

  return (
    <div className="flex flex-1 flex-col flex-center-center max-w-full max-h-full h-full overflow-hidden px-[8vw]">
      <Failed
        classNames=""
        icon={<TbError404 size="20vw" color="orange" className="mb-10" />}
        title=""
        subtitle="متاسفانه صفحه مورد نظر شما پیدا نشد."
        button={
          <Button
            title="بازگشت به صفحه قبل"
            type="outlined"
            classNames="text-primary !border !border-white !border-solid !px-4 w-fit"
            events={{
              onSubmit: (e) => {
                navigation(-1);
              },
            }}
          />
        }
      />
    </div>
  );
}

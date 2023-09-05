import React from "react";

import { Failed } from "~/components";
import { TbInfoCircle } from "react-icons/tb";

export default function DimentionGuide({}) {
  return (
    <div className="flex flex-1 flex-col flex-center-center max-w-full max-h-full h-full overflow-hidden px-[8vw]">
      <Failed
        classNames="gap-10"
        icon={<TbInfoCircle size="12vw" color="#cccccc" />}
        subtitle="برای استفاده از این برنامه لطفا از موبایل یا تبلت خود استفاده کنید."
      />
    </div>
  );
}

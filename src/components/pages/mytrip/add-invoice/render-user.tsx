import clsx from 'clsx';
import { useContext, useEffect } from 'react';

import { Avatar } from '@/components/base';
import type { SelectOptionsRenderDropDown } from '@/constants/select-options';
import { MyTripContext } from '@/context/mytrip-context';

export const RenderUserAddInvoice = ({
  data,
}: {
  data: SelectOptionsRenderDropDown[];
}) => {
  const { useruidclick, setUserUidClick, onSaveUserInfoToData } =
    useContext(MyTripContext);
  useEffect(() => {
    if (data.length !== 0) {
      setUserUidClick(data[0]?.value || '');
    }
  }, [data]);

  const onSubmit = (value: string) => {
    setUserUidClick(value);
    onSaveUserInfoToData();
  };

  return (
    <div>
      <div className="dropdown w-full overflow-x-auto py-3 pt-9">
        <div className="flex items-center justify-start gap-2 px-3">
          {data &&
            data.map((item) => (
              <div
                key={item.value}
                className="relative z-20 inline-block cursor-pointer drop-shadow-md"
              >
                <div
                  className={clsx(
                    'group relative inline-block rounded-xl',
                    item.value === useruidclick ? ' bg-slate-200 p-1' : null,
                  )}
                >
                  <span className="absolute -top-7 z-30 ml-0 hidden rounded-2xl border bg-white px-2 py-0.5 text-xs font-medium group-hover:block">
                    {item.title}
                  </span>
                  <Avatar
                    cursorPointer
                    img={{
                      url: item.image?.url,
                      color: item.image?.url ? '' : item.image?.color,
                      text: item.image?.url ? '' : item.title[0]?.toUpperCase(),
                    }}
                    onClick={() => onSubmit(item.value)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { VerticalMenu } from '@/components/base';
import { Header, WrapperHeader } from '@/components/layout';
import { CreateTheTrip, SliderPage } from '@/components/pages';
import { VERTICAL_MENU } from '@/constants/select-options';
import { MainContext } from '@/context/main-context';
import { selector } from '@/redux';

import { Welcome } from './welcome';

const HomePage = () => {
  const { currentUserInformation } = useSelector(selector.user);
  return currentUserInformation?.name ? <ContainerHome /> : <Welcome />;
};

const ContainerHome = () => {
  const { currentUserInformation } = useSelector(selector.user);
  const { showverticalmenu, showcreatethetrip } = useContext(MainContext);

  return (
    <WrapperHeader
      header={
        <Header
          id={currentUserInformation?.id}
          image={currentUserInformation?.image}
          name={currentUserInformation?.name}
          email={currentUserInformation?.gmail}
        />
      }
    >
      <div className="h-full">
        {showverticalmenu ? (
          <VerticalMenu>
            <RenderItemVerticalMenuHome />
          </VerticalMenu>
        ) : null}
        {showcreatethetrip ? <CreateTheTrip /> : null}
        <SliderPage />
      </div>
    </WrapperHeader>
  );
};

const RenderItemVerticalMenuHome = () => {
  return (
    <div className="flex flex-col">
      {VERTICAL_MENU.map((item) => (
        <div
          key={item.value}
          className="mb-2 flex cursor-pointer items-center justify-start rounded-xl bg-slate-300 py-2"
        >
          {item.icon ? (
            <item.icon className="mx-2 text-xl text-gray-900" />
          ) : null}
          <h2 className="select-none">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

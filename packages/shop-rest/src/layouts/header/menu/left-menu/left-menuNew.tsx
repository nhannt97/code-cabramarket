import React from 'react';
import Router, { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import Logo from 'layouts/logo/logo';
import { MenuDown } from 'assets/icons/MenuDown';
import { CATEGORY_MENU_ITEMS } from 'site-settings/site-navigation';
import * as categoryMenuIcons from 'assets/icons/category-menu-icons';
import {
  MainMenu,
  MenuItem,
  IconWrapper,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from './left-menu.style';

const CategoryIcon = ({ name }) => {
  const TagName = categoryMenuIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

const CategoryMenu = (props: any) => {
  const handleOnClick = () => {
    Router.push('/tracking-order');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MenuItem  onClick={() => handleOnClick()}>
          <IconWrapper>
          <Icon>
            <CategoryIcon name={props.icon} />
          </Icon>
            <p>Tracking Order</p>
          </IconWrapper>
        </MenuItem>
    </div>
  );
};

type Props = {
  logo: string;
};

export const LeftMenuNew: React.FC<Props> = ({ logo }) => {
  const router = useRouter();
  const initialMenu = CATEGORY_MENU_ITEMS.find(
    (item) => item.href === router.asPath
  );
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? CATEGORY_MENU_ITEMS[0]
  );

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => setActiveMenu(CATEGORY_MENU_ITEMS[0])}
      />

      <CategoryMenu icon={CATEGORY_MENU_ITEMS[3].icon} onClick={setActiveMenu} />
    </LeftMenuBox>
  );
};

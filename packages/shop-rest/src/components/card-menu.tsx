import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from './box';
import { Text } from './text';
import * as icons from 'assets/icons/category-icons';

const CardBox = styled.div<any>((props) =>
  css({
    backgroundColor: ['gray.200', 'gray.200', '#fff'],
    textAlign: 'center',
    padding: '1rem 10px',
    borderRadius: [10, 10, 6],
    cursor: 'pointer',
    border: props.active ? '2px solid' : '2px solid',
    borderColor: props.active ? '#212121' : ['gray.200', 'gray.200', '#fff'],
  })
);
interface Props {
  data: any;
  active: any;
  style?: any;
  onClick: (slug: string) => void;
}
const Icon = ({ name, style }) => {
  const TagName = icons[name];
  return !!TagName ? <TagName style={style} /> : <p>Invalid icon {name}</p>;
};
export const CardMenu = ({ data, onClick, active, style }: Props) => {
  return (
    <>
      {data.map(({ id, name, icon, slug }) => (
        <CardBox
          key={id}
          onClick={() => onClick(slug)}
          active={slug === active}
          role='button'
          style={style}
        >
          <Box
            padding='1rem'
            height={80}
            alignItems='center'
            justifyContent='center'
            display='flex'
          >
            {/* Data not icon, todo : if => render */}
            {slug === "asian-groceries-thuc-pham-a-chau" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/japanese_ramen_icon.png"></img>}
            {slug === "asian-snacks-do-an-choi" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/images.png"></img>}
            {slug === "butcher" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/butcher-meat-shop-icons-set-circle-eps-65362856-scaled.jpg"></img>}
            {slug === "seafood-hai-san" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/seafood-icons-set_1284-10822-scaled.jpg"></img>}
            {slug === "frozen-do-dong-da" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/frozen.png"></img>}
            {slug === "drinks" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/download-1.png"></img>}
            {slug === "fresh-fruits-veg-trai-cay-va-rau" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/fresh-vegetables-flat-style-icon-free-vector-scaled.jpg"></img>}
            {slug === "sauce-cac-loai-dau-hao-nuoc-tuong-nuoc-mam" && <img style={{ height: 60, width: 'auto' }} src="https://frontend.cabramarket.com/wp-content/uploads/2021/01/images-1-1-scaled.jpg"></img>}
          </Box>
          <Text as='span' color='#212121' fontSize={14} fontWeight={600}>
            {name}
          </Text>
        </CardBox>
      ))}
    </>
  );
};

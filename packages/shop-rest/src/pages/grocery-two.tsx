import React from 'react';
import dynamic from 'next/dynamic';
import { Modal } from '@redq/reuse-modal';
// Static Data Import Here
import { useRefScroll } from 'utils/use-ref-scroll';
import { ModalProvider } from 'contexts/modal/modal.provider';
import styled from 'styled-components';
import css from '@styled-system/css';
import { SidebarWithCardMenu } from 'layouts/sidebar/sidebar-with-card-menu';
import GroceryImgOne from 'assets/images/banner/grocery-banner-img-one.jpg';
import GroceryImgTwo from 'assets/images/banner/grocery-banner-img-two.jpg';

// import { ProductGrid } from 'components/product-grid/product-grid-three';

const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);

const Banner = dynamic(() => import('components/banner/banner-two'), {
  ssr: false,
});

const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

const bannerSlides = [
  {
    img: GroceryImgOne,
    alt: 'Slide One',
  },
  {
    img: GroceryImgTwo,
    alt: 'Slide Two',
  },
];

const ContentArea = styled.div<any>(
  css({
    overflow: 'hidden',
    padding: ['68px 0 100px', '68px 0 50px', '110px 2rem 50px'],
    display: 'grid',
    minHeight: '100vh',
    gridColumnGap: '30px',
    gridRowGap: ['15px', '20px', '0'],
    gridTemplateColumns: [
      'minmax(0, 1fr)',
      'minmax(0, 1fr)',
      '300px minmax(0, 1fr)',
    ],
    backgroundColor: '#f9f9f9',
  })
);

const GroceryTwoPage: React.FC<any> = ({ deviceType }) => {
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });

  const PAGE_TYPE = 'grocery';

  return (
    <>
      <ModalProvider>
        <Modal>
        <ContentArea>
          <SidebarWithCardMenu type={PAGE_TYPE} />
          <main>
            <Banner data={bannerSlides} />
            {/* <ProductGrid type={PAGE_TYPE} /> */}
            <div ref={targetRef}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={20}
              />
            </div>
          </main>
        </ContentArea>
        <CartPopUp deviceType={deviceType} />
      </Modal>
      </ModalProvider>
    </>
  );
};

export default GroceryTwoPage;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardMenu } from 'components/card-menu';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import CategoryWalker from 'components/category-walker/category-walker';
import NoResultFound from 'components/no-result/no-result';
import { Loading, ButtonWrapper } from './sidebar.style';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
import { categoriesSelector } from 'state/categories/reducer';
const Aside = styled.aside({
  width: '300px',
  position: 'fixed',
  top: 110,
  left: 30,
  height: 'calc(100% - 110px)',
});

const CardMenuWrapper = styled.div({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'max-content',
  paddingBottom: 30,

  '@media (min-width: 550px) and (max-width: 990px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const MobileOnly = styled.div({
  display: 'none',
  zIndex: 10,

  '@media (max-width: 990px)': {
    display: 'block',
  },
});

const DesktopOnly = styled.div({
  display: 'none',
  '@media (min-width: 991px)': {
    display: 'block',
  },
});

interface Props {
  type: string;
}

const per_page = 10;

export const SidebarWithCardMenu = ({ type }: Props) => {
  const router = useRouter();
  const { categories, loading, error } = useSelector(categoriesSelector);
  const [data, setData] = useState(null);
  const { pathname, query } = router;
  const selectedQueries = query.category;

  useEffect(() => {
    setData(categories)
  }, [categories])

  const onCategoryClick = (slug: string) => {
    router.push({
      pathname,
      query: { ...query, category: slug },
    });
  };

  return (
    <React.Fragment>
      <MobileOnly>
        {data && <Sticky top={67}>
          <CategoryWalker
            style={{
              backgroundColor: '#ffffff',
              paddingTop: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
          >
            <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>
          </CategoryWalker>
        </Sticky>}
      </MobileOnly>

      <DesktopOnly>
        <Aside>
          <Scrollbar
            style={{ maxHeight: 'calc(100% - 70px)' }}
            options={{
              scrollbars: {
                visibility: 'hidden',
              },
            }}
          >
            {error && <ErrorMessage message="Loading categories failure" />}
            {data?.length === 0 && !loading && <NoResultFound />}
            {loading && <Loading />}
            {data && data.length > 0 && <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>}
          </Scrollbar>
        </Aside>
      </DesktopOnly>
    </React.Fragment>
  );
};

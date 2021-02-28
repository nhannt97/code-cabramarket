import React from 'react';
import { CategoryTitle, CategoryChip, CategoryDiv } from './SubTitleCategory.style';

interface Props {
  // onClick: (slug: string) => void,
  categories: any,
  slugCategory: string,
}

const SubTitleCategory: React.FC<Props> = ({
  categories,
  // onClick,
  slugCategory,
}) => {
  let renderValue;
  // TODO: Refactor it later
  if (categories.some(item => item.slug === slugCategory)) {
    renderValue = categories.find(item => item.slug === slugCategory)
  } else {
    renderValue = categories.find(c => c.children.some(item => item.slug === slugCategory))
  }
 
  if(renderValue) {
    return (
      <>
        <CategoryTitle>{renderValue.title}</CategoryTitle>
        <CategoryDiv>
        {renderValue.children.length 
          ? renderValue.children.map((child, index) => (
            <>
              <CategoryChip 
                key={index}
                // onClick={() => onClick(child.slug)}
                className={`button ${slugCategory === child.slug ? 'active': ''}`}
              >
                {child.title}
              </CategoryChip>
            </>
          )) 
          : 
          null
        }
        </CategoryDiv>
      </>
    );
  }
  return null
};

export default SubTitleCategory;

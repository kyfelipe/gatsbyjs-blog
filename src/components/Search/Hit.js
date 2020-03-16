import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    timeToRead={hit.timeToRead}
    category={hit.category}
    title={hit.title}
    description={hit.description}
    date={hit.date}
    background={hit.background}
  />
);

export default Hit;

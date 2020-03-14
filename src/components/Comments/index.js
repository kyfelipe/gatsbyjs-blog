import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComment from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://blog-dev.com.br${url}`;

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Commentários</S.CommentsTitle>
      <ReactDisqusComment
        shortname="lfeleoterio"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments;

import siteMemo from "./supportSiteMemo";
import React from 'react';
import { Link } from '@material-ui/core';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import media from 'styled-media-query';

// const StyledCard = styled(Card)`
//   width:33%;
//   margin: auto;
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   background-color: #D3D3D3 !important;
// `
const StyledCard = styled(Card)`
  background-color: #D3D3D3 !important;
  margin: auto;
  margin-block-start: 1em;
  margin-block-end: 1em;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:100%;
  `}

  ${media.greaterThan("large")`
      width:50%;
  `}
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
`

const SiteList = () => {
  return(
    <StyledCard>
      <h2 className="supportTitle">対応サイト</h2>
      {siteMemo.map(site => <Site key={site.id} {...site} />)}
    </StyledCard>
  )
}
const Site = ({url,siteName}) => (<StyledLink color="primary" href={url} target="_blank" rel="noopener noreferrer">{siteName}</StyledLink>);

export default SiteList;

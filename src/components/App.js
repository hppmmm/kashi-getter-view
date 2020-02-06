import './App.css';
import React from 'react';
import FormElement from './formElement/FormElement';
import SiteList from "./supportSiteElement/SupportSiteList";
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import media from 'styled-media-query';
import Header from './headerElement/Header';

const StyledCard = styled(Card)`
  background-color: #D3D3D3 !important;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
    margin: auto;
    margin-block-start: 1em;
    margin-block-end: 1em;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:100%;
    margin: auto;
    margin-block-start: 1em;
    margin-block-end: 1em;
  `}

  ${media.greaterThan("large")`
      width:50%;
      margin: auto;
      margin-block-start: 1em;
      margin-block-end: 1em;
  `}
`;


function App() {
  return (
    <div className="App">
      <Header />
      <h1>歌詞げったー</h1>
      <span className="note">※対応サイト以外のURLを入力しても歌詞を抽出できませんのでご注意ください。タイトルは出たり出なかったりします。</span>
      <SiteList/>
      <StyledCard className="example">
        <p>使用例　〜歌ネットからパプリカの歌詞を抽出〜</p>
        <div className="example-text">
        URLに「https://www.uta-net.com/song/254123/」を入力する<br />
        「歌詞抽出」ボタンをクリック<br />
        </div>
      </StyledCard>
      <FormElement />
    </div>
  );
}

export default App;

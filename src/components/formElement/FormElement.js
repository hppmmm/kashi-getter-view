import './formElement.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KashiContent from "./KashiContent";
import { connect } from 'react-redux';
import { changeTextAction } from "../../actions/formElementAction";
import { dlNowAction,dlFinishAction,dlFailedAction } from "../../actions/kashiElementAction";
import styled from 'styled-components';
import media from 'styled-media-query';

const StyledTextField= styled(TextField)`
  margin:auto !important;
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


class FormElement extends React.Component{

  handleChange = (event) => {
    this.props.textChange(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dlNow();
    fetch("https://www.kashi-getter.site/api", {
      method: "POST",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        kashiUrl: this.props.text
      }),
    }).then((res)=> res.json()).then(data => {
      if(data.mainLyric === undefined){
        this.props.dlFailed();
      } else {
        if(data.title === ""){
          data.title = "タイトル抽出不可";
        }
        this.props.dlFinish(data.title,data.mainLyric);
      }
    }).catch(console.error);
  }

  render(){
    return (
      <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <StyledTextField id="filled-basic" label="ここにURLを入力" variant="filled" size="small" onChange={this.handleChange}/>
            <Button id="submitButton" variant="contained" color="primary" type="submit">
              歌詞抽出
            </Button>
          </form>
          <KashiContent { ...this.props.kashiElement }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text:state.formElementReducer.text,
  kashiElement:state.kashiElementReducer,
  state:state
})
const mapDispatchToProps = (dispatch) => ({
  textChange:text => dispatch(changeTextAction(text)),
  dlNow:() => dispatch(dlNowAction()),
  dlFailed:()=> dispatch(dlFailedAction()),
  dlFinish:(title,kashi) => dispatch(dlFinishAction(title,kashi)),
})

export default connect(mapStateToProps,mapDispatchToProps)(FormElement);

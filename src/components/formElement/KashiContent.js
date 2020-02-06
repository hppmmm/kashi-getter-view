import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

export default function KashiContent({ status,title,kashi }){
  const handleCopy = () => {
    let copyTarget = document.getElementById("lyric");
    copyTarget.select();
    document.execCommand("copy");
  }

  switch(status){
    case "FINISH": return(
      <Paper elevation={3} className="lyricPaper">
        <h3 className="kashiTitle">{title}</h3>
        <Button onClick={handleCopy} id="copyButton" variant="contained" color="secondary" type="submit">
          歌詞をコピー
        </Button>
        <TextField id="lyric" multiline={true} color="primary" value={kashi}>
        </TextField>
      </Paper>)
    case "LOADING": return(<Paper elevation={3} className="lyricPaper"><CircularProgress /></Paper>)
    case "FAILED": return(<Paper elevation={3} className="lyricPaper">歌詞の取得に失敗しました。</Paper>)
    default: return (<Paper elevation={3} className="lyricPaper"></Paper>)
  }
}

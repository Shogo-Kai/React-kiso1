import './createThread.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CreateThread() {

  const [threadTitle, setThreadTitle] = useState('');
  const threadTitleChange = (event) => {
    setThreadTitle(event.target.value);
  };

   /*fetch()メソッドの引数*/
  const url = "https://railway.bulletinboard.techtrain.dev/threads";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({title :threadTitle})
  };

  /*ボタンクリック時にfetch()メソッドを呼び出す*/
  const threadTitleSubmit = () => {
    try {
      fetch(url, options);
    } catch(error) {
      alert("データを送信できませんでした。");
    }
  };

  return (
    <>
    <header>
      <div className='left_a_right'>
        <div className='left'>掲示板</div>
        <div className='right'><Link to="/createThread">スレッドをたてる</Link></div>
      </div>
    </header>
    <main>
      <div className="center">
        <p className="head">スレッド新規作成</p>
      </div>
      <div className="form">
        <input type="text" value={threadTitle} onChange={threadTitleChange} placeholder="スレッドタイトル"/>
      </div>
      <div className="parent">
        <div className="child"><Link to="/">Topに戻る</Link></div>
        <div className="child"><button onClick={threadTitleSubmit}>作成</button></div>
      </div>
    </main>
    </>
  );
}

export default CreateThread;

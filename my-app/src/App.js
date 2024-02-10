import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thread, setThread] = useState([])

    useEffect(() => {
      try {
        fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThread(data)})
      }catch(error) {
        alert("APIからデータを取得できませんでした。");
      }
    }, [])

  return (
    <>
    <header>
      <div className='left_a_right'>
        <div className='left'>掲示板</div>
        <div className='right'><a href=''>スレッドをたてる</a></div>
      </div>
    </header>
    <main>
      <div className="center">
        <ul>
          <li className="head">新着スレッド</li>
          {thread.map((thread) => <li key={thread.id}><div className="box">{thread.title}</div></li>)}
        </ul>
      </div>
    </main>
    </>
  );
}

export default App;

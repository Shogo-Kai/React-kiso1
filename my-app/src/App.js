import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thread, setThread] = useState([])

    //useEffectについてよく分からない　調べる
    useEffect(() => {
        fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThread(data)})
    }, [])

  return (
    <>
    <header>
      <div className='parent'>
        <div className='left'>掲示板</div>
        <div className='right'><a href=''>スレッドをたてる</a></div>
      </div>
    </header>
    <main>
      <div>
        <h2>新着スレッド</h2>
        <ul>
          {thread.map((thread) => <li key={thread.id}>{thread.title}</li>)}
        </ul>
      </div>
    </main>
    </>
  );
}

export default App;

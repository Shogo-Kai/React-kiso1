import './App.css';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';


function App() {
  const [thread, setThread] = useState([])
  const [loading, setLoading] =useState(false)

    useEffect(() => {

      try {

        setTimeout(() => {
          fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThread(data)})
        .then(() => setLoading(true))}, 5000);

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
          {loading? thread.map((thread) => <li key={thread.id}><div className="box">{thread.title}</div></li>) : <DNA height="800" width="800"/>}
        </ul>
      </div>
    </main>
    </>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';


function App() {
  const [threads, setThreads] = useState([])
  const [isLoading, setIsLoading] =useState(true)

    useEffect(() => {

      try {

        setTimeout(() => {
          fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThreads(data)})
        .then(() => setIsLoading(false))}, 2500);

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
          {isLoading? <DNA height="800" width="800"/> : threads.map((threads) => <li key={threads.id}><div className="box">{threads.title}</div></li>)}
        </ul>
      </div>
    </main>
    </>
  );
}

export default App;

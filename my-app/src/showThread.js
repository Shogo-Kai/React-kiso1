import './showThread.css';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Header from './header';

function ShowThread() {
  const [threads, setThreads] = useState([])
  const [isLoading, setIsLoading] =useState(true)

    useEffect(() => {

      try {

        fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThreads(data)})
        .then(() => setIsLoading(false));

      }catch(error) {

        alert("APIからデータを取得できませんでした。");

      }

    }, [])

  return (
    <>
    <Header />
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

export default ShowThread;

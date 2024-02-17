import './showThread.css';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Header from './header';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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

        toast.error("APIからデータを取得できませんでした。");

      }

    }, [])

  return (
    <>
    <Header />
    <main>
      <div className="center">
        <ul>
          <li className="head">新着スレッド</li>
          {isLoading? <DNA height="800" width="800"/> : threads.map((thread) => <li><Link to='/showPost' state={{id: thread.id , title: thread.title}}><div className="box">{thread.title}</div></Link></li>)}
        </ul>
      </div>
    </main>
    </>
  );
}

export default ShowThread;

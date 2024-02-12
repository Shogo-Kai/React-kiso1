import './createThread.css';
import { Link } from 'react-router-dom';

function CreateThread() {

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
    </main>
    </>
  );
}

export default CreateThread;

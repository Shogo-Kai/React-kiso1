import Header from './header';
import  './showPost.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DNA } from 'react-loader-spinner';
import { Link } from 'react-router-dom';



function ShowPost() {
    const [isLoading, setIsLoading] =useState(true)
    const { state } = useLocation();
    const [id, setId] = useState(state.id);
    const [contents, setContents] = useState([]);
    const [postContent, setPostContent] = useState("");

    const getUrl = `https://railway.bulletinboard.techtrain.dev/threads/${id}/posts?offset=0`;
    const postUrl = `https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`;
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({post :postContent})
    }

    const postContentChange = (event) => {
        setPostContent(event.target.value);
    }

    const postContentSubmit = () => {
        try {
            if(postContent.length <= 0) {
                toast.error("文字が入力されていません!")
            } else if(postContent.length > 40) {
                toast.error("40文字以内で書いてください!")
            } else {
                fetch(postUrl, postOptions)
                .then(toast.success("投稿完了!"));
            }
        } catch (error) {
            toast.error("データを送信できませんでした。")
        }
    };

    useEffect(() => {
        try{
            fetch(getUrl)
            .then(res => res.json())
            .then(data => {setContents(data.posts)})
            .then(() => setIsLoading(false));
        }catch(error) {
            toast.error("APIからデータを取得できませんでした。")
        }
    })

    return(
        <>
        <Header />
        <main>
            <div className='parent'>
                <div className="child">
                    <ul>
                        <li className="head">{state.title}</li>
                        {isLoading ? <DNA height="800" width="800" /> : contents.map((content) => <li><div className="box">{content.post}</div></li>)}
                    </ul>
                </div>
                <div className='child'>
                    <textarea value={postContent} onChange={postContentChange} placeholder="投稿しよう!"></textarea>
                    <button onClick={postContentSubmit} className='btn'>投稿</button>
                </div>
            </div>
            <div className='top'><Link to="/">Topに戻る</Link></div>
        </main>
        </>
    );
}

export default ShowPost;
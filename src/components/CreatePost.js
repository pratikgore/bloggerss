import { useState } from "react";
import { firestore} from '../firebase';

function CreatePost() {
    
    const [title, setTitle] = useState(); 
    const [subtitle, setSubtitle] = useState(); 
    const [content, setContent] = useState(); 

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(title); 
        console.log(subtitle); 
        console.log(content);

        firestore.collection('posts').add({
            title, subtitle, content, createdAt: new Date() 
        });
    }

    return (
        <div className="create-post">
            <h1>Create post</h1>
            <form onSubmit ={handleSubmit}>
                
                <div className="form-field">
                    <label>Title</label>
                    <input value={title} onChange={((e) => setTitle(e.target.value))} />

                    <label>Subtitle</label>
                    <input value={subtitle} onChange={((e) => setSubtitle(e.target.value))} />

                    <label>Content</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>

                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
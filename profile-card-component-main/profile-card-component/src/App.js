import React from 'react';
import './stylesheet/style.css';
import profilePic from './images/image-victor.jpg'



function App() {
    return (
        <section>
            <div className='container'>
                <div className='texture'></div>
                <div className='profile'>
                    <img src={profilePic} alt='victor profile pic' />
                </div>
                <div className='mainName'>
                    <h1>Victor Crest <span>26</span></h1>
                    <p>London</p>
                </div>
                <section className='status'>
                    <div className='followers'>
                        <h1>80K</h1>
                        <p>Followers</p>
                    </div>
                    <div className='likes'>
                        <h1>803K</h1>
                        <p>Likes</p>
                    </div>
                    <div className='Photos'>
                        <h1>1.4K</h1>
                        <p>Photos</p>
                    </div>

                </section>
                
            </div>
        </section>
    );
}

export default App;
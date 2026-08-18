import profilePic from './assets/adityaPfp.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" ></img>
            <h2 className="card-title">Aditya Saraswat</h2>
            <p className="card-text">Backend x ML Developer</p>
        </div>
    );
}

export default Card
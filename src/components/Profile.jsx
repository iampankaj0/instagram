import React from 'react';
import './profile.css';
import profile from '../images/profile-pic.jpg';

const Profile = () => {
    return (
        <>
            <section className="profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={profile} alt="profile-picture" />
                        </div>
                        <div className="col-8">
                            <div className="user-name">
                                <h1>_iampankaj</h1>
                                <button className="btn follow-btn">Follow</button>
                            </div>
                            <div className="social">
                                <div className="post"><span>149</span> posts</div>
                                <div className="follower"><span>15.7k</span> followers</div>
                                <div className="following"><span>26</span> following</div>
                            </div>
                            <div className="name-bio bio-desk">
                                <h2>Pankaj Yadav</h2>
                                <p>
                                    React.js Developer / Website Designer & Developer
                                    <br />
                                    ===========<br />
                                    भाई चारा बड़ा भारी<br />
                                    होम टाउन है रेवाड़ी<br />
                                    ===========<br />
                                    26 November<br />
                                    𝕥𝕙𝕒𝕟𝕜 𝕪𝕠𝕦, 𝕔𝕠𝕞𝕖 𝕒𝕘𝕒𝕚𝕟.
                                </p>
                            </div>
                        </div>

                        

                    </div>
                    <div className="name-bio d-md-none">
                        <h2>Pankaj Yadav</h2>
                        <p>
                            React.js Developer / Website Designer & Developer
                            <br />
                            ===========<br />
                            भाई चारा बड़ा भारी<br />
                            होम टाउन है रेवाड़ी<br />
                            ===========<br />
                            26 November<br />
                            𝕥𝕙𝕒𝕟𝕜 𝕪𝕠𝕦, 𝕔𝕠𝕞𝕖 𝕒𝕘𝕒𝕚𝕟.
                        </p>
                    </div>

                    

                </div>
            </section>
            <section className="about-details-bio d-md-none">
                <div className="container">
                    <div className="mobile-social">
                        <div className="post"><span>149</span> posts</div>
                        <div className="follower"><span>15.7k</span> followers</div>
                        <div className="folllowing"><span>26</span> followng</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
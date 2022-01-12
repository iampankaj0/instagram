import React from 'react';
import ImgColumns from './ImgColumns';
import './images.css';
import ImageData from '../ImageData';

const Images = () => {
    return (
        <>

            <nav>
                <div className="container">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                            <span><i class="material-icons">grid_on</i></span> POSTS 
                        </a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <span><i class="material-icons">person_pin</i></span> TAGGED 
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container">

                <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <section className="image-section">
                    <div className="row">

                        {
                            ImageData.map((val, id) =>{
                                return < ImgColumns key={id} imgsrc={val.imgsrc} />
                            })
                        }

                    </div>
                </section>
                    </div>

                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>

                </div>

            </div>
            
        </>
    );
}

export default Images;
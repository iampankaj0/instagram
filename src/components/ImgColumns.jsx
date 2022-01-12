import React from 'react';
import Image from '../images/img-1.jpg';

const ImgColumns = (props) => {
    return (
        <>
            <div className="col-4 column-image">
                <img src={props.imgsrc} alt="img-1" />
            </div>
        </>
    );
}

export default ImgColumns;
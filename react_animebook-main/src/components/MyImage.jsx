import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ src }) => (
    <LazyLoadImage
        alt=""
        effect="blur"
        threshold={100}
        className={`w-full h-full rounded-lg`}
        src={src} />
);

export default MyImage;
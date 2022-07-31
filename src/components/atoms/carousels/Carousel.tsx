import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Box} from '@mui/material';

interface Props{
    imageItems: string[];
}

const CustomCarousel =(props:Props) =>{
    const {imageItems} = props;
    return (
        <Box>
            <Carousel>
                {imageItems.map((item, index) => {
                    return (
                        <div>
                            <img src={item} alt='image' height='auto'/>
                        </div>
                    );
                })}
            </Carousel>
        </Box>
    );
};

export default CustomCarousel;
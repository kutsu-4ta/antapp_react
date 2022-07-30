import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import javaScriptIcon from "../../../assets/images/LanguageLogo/javascript.svg";
import typeScriptIcon from "../../../assets/images/LanguageLogo/typescript-icon.svg";
import phpIcon from "../../../assets/images/LanguageLogo/php.svg";

const CustomCarousel =() =>{
    return(
        <Carousel>
            <div>
                <img src={typeScriptIcon} />
                <p className="legend">TypeScript</p>
            </div>
            <div>
                <img src={javaScriptIcon} />
                <p className="legend">javaScript</p>
            </div>
            <div>
                <img src={phpIcon} />
                <p className="legend">PHP</p>
            </div>
        </Carousel>
    );
}

export default CustomCarousel;
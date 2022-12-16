import Carousel from 'react-multi-carousel';
import img1 from '../images/car11.png';
import img2 from '../images/car30.jpg';
import img3 from '../images/car80.jpg';
import img4 from '../images/car10.jpg';
import img6 from '../images/car6.png';
import '../../App.css';
import 'react-multi-carousel/lib/styles.css';

const Latest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {

                  <h5>Car 1</h5>
                </div>
                <div className="item">
                  <img src={img2} alt="car" />
                  <h5>Car2</h5>
                </div>
                <div className="item">
                  <img src={img3} alt="car" />
                  <h5>Car3</h5>
                </div>
                <div className="item">
                  <img src={img4} alt="car" />
                  <h5>car</h5>
                </div>
                <div className="item">
                  <img src={img1} alt="car" />
                  <h5>car</h5>
                </div>
                <div className="item">
                  <img src={img6} alt="car" />
                  <h5>car</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;

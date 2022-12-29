import React, {useEffect} from 'react'
import './Carousel.scss'

function Carousel() {
  const carousel = document.querySelector('.carousel');
  const cellCount = 6;
  const cellSize = 450;
  const radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  let selectedIndex = 0;

  useEffect(() => {
    const theta = 360 / cellCount;
    const carousel = document.querySelector('.carousel');
    const cells = carousel.querySelectorAll('.carousel__cell');
    for ( var i=0; i < cells.length; i++ ) {
      var cell = cells[i];
      var cellAngle = theta * i;
      cell.style.transform ='rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    }
    return () => {

    }
  }, [])

  function rotateCarousel() {
    const carousel = document.querySelector('.carousel');
    const angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  }

  function prev() {
    selectedIndex--;
    rotateCarousel();
  }

  function next() {
    selectedIndex++;
    rotateCarousel();
  }

  return (
    <div>
      <div className="scene">
        <div className="carousel">
          <div className="carousel__cell p-3">
            <h6><i className="bx bx-help-circle"></i> ฉันจะมั่นใจได้อย่างไรว่าเงินของฉันปลอดภัย</h6>
          </div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
        </div>
      </div>
      <p className="text-center">
        <button className="previous-button" onClick={prev}>Previous</button>
        <button className="next-button" onClick={next}>Next</button>
      </p>
    </div>
  )
}

export default Carousel
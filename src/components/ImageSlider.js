import { useState, useRef, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    width: "100%",
    height: '100%',
    position: 'relative',
    backgroundSize: "cover",
    alignItems: 'center',
    backgroundPosition: "center",
  };

  const Slide = ({ url }) => {
    const videoRef = useRef();

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.playbackRate = 0.75;
        video.onended = () => {
          setCurrentIndex((currentIndex + 1) % slides.length);
        };
      }
    }, [url]);

    if (url.endsWith('.mp4')) {
      return (
        <video ref={videoRef} width="100%" height="100%" autoPlay>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            transition: '0.5s',
          }}
        />
      );
    }
  };

  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
  };

  const next = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const dotContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
  };

  const dotStyle = {
    margin: '0 5px',
    cursor: 'pointer',
    fontSize: '10px',
  };

  const currentDotStyle = {
    ...dotStyle,
    fontSize: '15px',
    borderRadius: '50%',
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div style={sliderStyles}>
        <div style={leftArrow} onClick={prev}>⟨</div>
        <div style={rightArrow} onClick={next}>⟩</div>
        <Slide url={slides[currentIndex].url} />
        <div style={dotContainerStyle}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} style={slideIndex === currentIndex ? currentDotStyle : dotStyle} onClick={() => goToSlide(slideIndex)}>
              ⚪
            </div>
            
          ))}
        </div>
        
      </div>
    </>
  );
};

export default ImageSlider;
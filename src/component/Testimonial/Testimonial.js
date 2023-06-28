import React, { useRef, useState } from "react";
import "./Testimonial.css";
import LogoIcon from "../UI/icons/LogoIcon";

const Testimonial = () => {
  const Testimonial_data = [
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      comment:
        "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
      style: {
        "min-width": "353px",
      },
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      comment:
        "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
      style: {
        "min-width": "353px",
      },
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      comment:
        "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
      style: {
        "min-width": "531px",
      },
    },
  ];

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    // containerRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();
    if (!isDragging) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed here
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  React.useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      containerElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="testimonial-wrap">
      <div className="testimonial-heading">
        <p>Testimonial</p>
        <hr />
      </div>
      <div className="testimonial-body">
        <div className="testimonial-logo ">
          <LogoIcon />
        </div>
        <div
          className="testimonial-details scroll-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={() => {
            return;
          }}
        >
          {Testimonial_data.map((data) => {
            return (
              <div
                className="testimonial-details-card"
                key={data.name}
                style={data.style}
              >
                <div className="testimonial-details-card-head">
                  <div className="testimonial-details-card-head-name">
                    {data.name}
                  </div>
                  <div className="testimonial-details-card-head-designation">
                    {data.designation}
                  </div>
                </div>
                <div className="testimonial-details-card-body">
                  "{data.comment}"
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

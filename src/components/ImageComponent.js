import React from "react";

const ImageComponent = ({
  image,
  isHorizontal,
  horizontalWidth,
  title,
  description,
  className,
}) => {
  const imgClassName = isHorizontal ? "horizontal" : "vertical";

  return (
    <div className={`ImgContainer ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`Section img ${imgClassName}`}
        style={{
          width: isHorizontal ? "100%" : `${horizontalWidth}px`,
          height: isHorizontal ? "auto" : `${(horizontalWidth / 15) * 9}px`,
        }}
      />
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default ImageComponent;

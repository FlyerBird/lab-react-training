import React, {useState} from 'react'

export default function ClickablePicture({img, imgClicked}) {
  const [image, setImage] = useState(img);

  const handlePhoto = () => {
    const changeImage = image === img ? imgClicked : img;
    setImage(changeImage);
  }

  return (
    <div>
      <img onClick={handlePhoto} src={image} alt="" />
    </div>
  )
}

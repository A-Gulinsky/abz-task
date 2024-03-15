import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

// emotion
import { Img, InfoContainer, Link, Name, Position } from "./UserItem.styled"

// preload img / fix text
import preloadImg from '../../../../../Assets/preloader/preloader-img.png'
import { fixText } from "../../../../../utils/fixText";

export const UserItem = ({ userData }) => {
  
  const { name,position,email,phone,photo } = userData

  const [image, setImage] = useState(preloadImg);

  // shows the preload image until the main image loads
  useEffect(() => {
    const img = new Image();
    img.src = photo;
    img.onload = () => {
      setImage(photo);
    };
  }, [photo]);

  return (
    <>
      <Img src={image} alt={name} />

      <Name>{fixText(name)}</Name>

      <InfoContainer>
        <Position>{fixText(position)}</Position>
        <Link href={`mailto:${email}`}>{fixText(email)}</Link>
        <Link href={`tel:${phone}`}>{phone}</Link>
      </InfoContainer>
    </>
  )
}

UserItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
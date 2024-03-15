
// prop-types
import PropTypes from 'prop-types';

// emotion
import { ErrorSpan, ImgText, LabelUpload, TextContainer, UploadContainer } from "./UploadImg.styled";

export const UploadImg = ({register,watch, errors}) => {

  // validate form
  const validateFileSize = (value) => {
    
    const allowedFormats = ['image/jpg', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024;

    const file = value[0];

    if (!file) return 'Choose picture'

    if (file.size > maxSize) {
      return 'File size too large'
    }

    if (!allowedFormats.includes(file.type)) {
      return 'Invalid file format'
    }

  };

  return (
    <>
      <UploadContainer>
        <LabelUpload error={errors.photo} htmlFor="photo">Upload</LabelUpload>
        <TextContainer error={errors.photo}>
          {watch().photo ? <ImgText>{watch().photo[0].name}</ImgText> : <ImgText>Upload your photo</ImgText>}
        </TextContainer>
        {errors.photo && <ErrorSpan>{errors.photo.message}</ErrorSpan>}
      </UploadContainer>
      
      <input
        aria-label="upload your photo. Only jpeg/jpg format and maximum 5mb"
        type="file"
        id="photo"
        {...register('photo', {
          required: 'picture is required',
          validate: validateFileSize
        })}
        style={{display: 'none'}}
      />
      </>
  )
}

UploadImg.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
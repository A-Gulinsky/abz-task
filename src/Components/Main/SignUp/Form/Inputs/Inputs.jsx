
// prop types
import PropTypes from 'prop-types';

// components
import { EmailOptions, PhoneOptions, TextOptions } from "./InputOptions"

// emotion
import { AdditionalInputSpan, InputContainer, InputSpan, InputText, Label, TextError } from "./Inputs.styled"

export const Inputs = ({register,errors}) => {

  return (
    <InputContainer>
      
      <Label>
        {/* name */}
        <InputText
          aria-label='Write your name'
          autoComplete='off'
          {...register('name', TextOptions)}
          type='name'
          placeholder='Your name'
          errors={errors.name}
        />
        {errors.name && <TextError>{errors.name.message}</TextError>}
        <InputSpan error={errors.name}>Name</InputSpan>
      </Label>
      
      <Label>
        {/* email */}
        <InputText
          aria-label="write your email"
          autoComplete="off"
          {...register("email", EmailOptions)}
          placeholder="Email"
          type="email"
          errors={errors.email}
        />
        {errors.email && <TextError>{errors.email.message}</TextError>}
        <InputSpan error={errors.email}>Email</InputSpan>
      </Label>

      <Label>
        {/* phone */}
        <InputText
          aria-label="write your phone. Phone number must to start with +380 (Urkaine)"
          autoComplete="off"
          {...register("phone", PhoneOptions)}
          placeholder="Phone"
          type="number"
          errors={errors.phone}
        />
        {errors.phone && <TextError>{errors.phone.message}</TextError>}
        <InputSpan error={errors.phone}>Phone</InputSpan>
        {!errors.phone && <AdditionalInputSpan>+38 (XXX) XXX - XX - XX</AdditionalInputSpan>}
      </Label>

    </InputContainer>
  )
}

Inputs.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
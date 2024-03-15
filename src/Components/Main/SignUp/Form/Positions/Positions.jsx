
// prop-types
import PropTypes from 'prop-types';

// svg
import { ReactComponent as NotCurrent } from '../../../../../Assets/radio-btn/not-current.svg'
import { ReactComponent as Current } from '../../../../../Assets/radio-btn/current.svg'

// emotion
import { Label, PositionName, SelectText, Ul } from "./Positions.styled";

export const PositionList = ({ positions, register, watch }) => {
  
  const position_id = Number(watch('position_id'))

  return (

    <>
      <SelectText>Select your position</SelectText>

      <Ul>
        {positions.map(({ id, name }) => (
          <li key={id}>
            <Label>
              {position_id === id ? <Current /> : <NotCurrent />}
              <PositionName>{name}</PositionName>
              <input {...register("position_id", { required: true })} type="radio" value={id} style={{ display: 'none' }} aria-label={name} />  
            </Label>
          </li>
        ))}
      </Ul>
    </>
  );
}

PositionList.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired
};

import { useEffect, useState } from 'react'

// components
import { PositionList } from './Positions/Positions'
import { UploadImg } from './UploadImg/UploadImg'
import { Inputs } from './Inputs/Inputs'

// redux tk 
import { useDispatch, useSelector } from 'react-redux'
import { toggleBoolean } from '../../../../redux/reducers/successSignUp'
import { fetchPositions } from '../../../../redux/operations'
import { getToken } from '../../../../redux/operations'
import { createUser } from '../../../../redux/operations'
import { getUsers } from '../../../../redux/operations'

// react hook form
import { useForm } from 'react-hook-form'

// emotion
import { BtnContainer, ButtonAdd, Form} from './SignUpForm.styled'

// Widget / Notification
import { Loading } from '../../../Widgets/Loading/Loading'
import { toast } from 'react-toastify'

const SignUpForm = () => {
  
  // while the post request is in progress, show the loader
  const [loadNewUser, setLoadNewUser] = useState(false)

  // get all necessary elements for react hook form + default setting
  const { register, watch, handleSubmit, formState: { errors, dirtyFields } ,reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      position_id: '1',
      photo: null
    }
  })

  // redux tk
  const dispatch = useDispatch();
  const positions = useSelector(state => state.positions.positionsData);
  const status = useSelector(state => state.positions.status);

  // fetch positions
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPositions());
    }
  }, [status, dispatch]);

  // checking whether all fields are filled in to undisabled btn
  dirtyFields['position_id'] = true
  const isFormDirty = Object.keys(dirtyFields).length

  // submit form
  const onSubmit = async(data) => {

    setLoadNewUser(true)
    
    // onSubmit | create new form data
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id);
    formData.append('photo', data.photo[0]);

    try {
      
      // onSubmit | get Token 
      const actionResult = await dispatch(getToken());
      const token = actionResult.payload
      
      // onSubmit | get POST when token is available
      const postNewUser = await dispatch(createUser({formData, token}))
      const newUser = postNewUser

      if (!newUser.payload) {
        // error
        throw new Error(newUser.error.message)
      } else {
        
        // success
        toast.success('A new user has been registered')
        dispatch(toggleBoolean())
        dispatch(getUsers(1))
      }

    } catch (error) {
      toast.error(`${error}`)
    } finally {
      setLoadNewUser(false)
      reset() 
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
      
      {/* Name/Email/Phone */}
      <Inputs register={register} errors={errors} />
      
      {/* Positions */}
      <PositionList register={register} positions={positions} watch={watch}/>

      {/* Upload Picture */}
      <UploadImg register={register} watch={watch} errors={errors} />
      
      <BtnContainer>
        {loadNewUser ?
          <Loading />
          :
          <ButtonAdd disabled={isFormDirty === 5 ? false : true} type='submit' value='Sign up' aria-label='sign up button'/>
        }
      </BtnContainer>

    </Form>
  )
}

export default SignUpForm
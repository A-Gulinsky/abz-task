
import { useEffect } from 'react';

// component
import { UserItem } from './UserItem.jsx/UserItem';
// emotion
import { BtnContainer, Li, ShowMoreBtn, Ul } from './UserList.styled';

// redux tk
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../../../redux/reducers/Users';
import { getUsers, loadMoreBtnGetUsers } from '../../../../redux/operations'

// utils
import { Skeleton, skeletonData } from '../../../../utils/UsersSkeleton';

// Widget
import { Loading } from '../../../Widgets/Loading/Loading';

export const UsersList = () => {

  // redux toolkit
  const dispatch = useDispatch()
  const { status,users } = useSelector(state => state.users)

  // when you click on the button, change its number to +1 and then fetch the new data
  const handleNextPage = async() => {
    await dispatch(nextPage())
    dispatch(loadMoreBtnGetUsers())
  };

  // get users
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUsers());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Ul>
        
        {!users.length ? 
        
          <>
            {skeletonData.map((_,idx) => 
              <Li key={idx} style={{filter: 'blur(2px)'}}>
                <UserItem userData={Skeleton} />
              </Li>
            )}
          </>
          
          :
          
          <>
            {users.map(userData => (
              <Li key={userData.id}>
                <UserItem userData={userData} />
              </Li>
            ))}
          </>
        }
        
      </Ul>
      
      {/* button show more users */}
      <BtnContainer>
        {status === 'loading' ?
          <Loading />
          :
          <ShowMoreBtn type="button" onClick={handleNextPage} aria-label='button to show more users'><p>Show more</p></ShowMoreBtn>
        }
      </BtnContainer>
    </div>
  );
};
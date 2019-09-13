import React, { useContext } from 'react';
import { Dropdown, Image } from '../common/helpers';
import GlobalContext from '../../contexts/GlobalContext';

const UserDropdown = () => {
  const { state } = useContext(GlobalContext);
  const profile = state.user || {};
  const name = profile.name.split(' ')[0];

  const onLogout = () => {};

  const userProfileImage = (
    <span>
      <Image circular src={profile.profileImage} alt="user avatar" />
    </span>
  );

  return (
    <Dropdown trigger={userProfileImage} item floating pointing="top right">
      <Dropdown.Menu direction='left'>
        <Dropdown.Item text={`Welcome ${name}!`} onClick={() => {}} />
        <Dropdown.Item text="Playlists" onClick={() => {console.log('Show playlists')}} />
        <Dropdown.Item text="Sign Out" onClick={onLogout} />
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default UserDropdown;

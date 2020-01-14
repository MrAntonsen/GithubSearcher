import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='UserIcon'
        className='round-img'
        style={{ width: '3.5rem' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.prototype = {
  user: PropTypes.object.isRequired
};
export default Useritem;

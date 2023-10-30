// import { HiMail} from 'react-icons/hi';
// import  styled  from 'styled-components';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

// const PageTitle = styled.h1`
// background-color: ${props => {
// switch (props.$variant) {
//   case 'primary':
//     return 'orange';
//     case 'secondary':
//       return 'green';
//       default:
//         return 'blue';
// }
// }};
// `;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        {/* <PageTitle $variant="primary"> <HiMail size="40"/>СЛАВА УКРАЇНІ </PageTitle> */}
        {/* <PageTitle $variant="secondary"> <HiMail size="40"/>ГЕРОЯМ СЛАВА </PageTitle> */}
        {/* <PageTitle $variant="default"> <HiMail size="40"/>СМЕРТЬ ВОРОГАМ</PageTitle> */}
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        {/* <HiMail/> */}
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

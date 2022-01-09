import Logo from './Logo';
import ProfilePictures from './ProfilePictures';
import './Header.css';
import ShareButton from './ShareButton';
import Languages from './Languages';

const Header = () => {
  return (
    <div className="page-header">
      <div className="left-header">
        <Logo />
        <h1 className="document-title">OpenDocs</h1>
      </div>
      <div className="right-header">
        <Languages />
        {/* <ProfilePictures />
        <ShareButton /> */}
      </div>
    </div>
  );
};

export default Header;

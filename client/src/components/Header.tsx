import Logo from './Logo';
import ProfilePictures from './ProfilePictures';

const Header = () => {
  return (
    <div className="editor-header">
      <div className="left-header">
        <Logo />
        <h1 className="document-title">{document.title}</h1>
      </div>
      <ProfilePictures />
    </div>
  );
};

export default Header;

import Logo from './Logo';
import ProfilePictures from './ProfilePictures';
import './Header.css';

const Header = () => {
  return (
    <div className="editor-header">
      <div className="left-header">
        <Logo />
        <h1 className="document-title">{document.title}</h1>
      </div>
      <div className="right-header">
        <ProfilePictures />
        <button>Partager</button>
      </div>
    </div>
  );
};

export default Header;

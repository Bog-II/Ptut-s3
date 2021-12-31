import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <div className="editor-header">
      <div className="left-header">
        <Logo />
        <h1 className="document-title">{document.title}</h1>
      </div>
      <ProfilePicture />
    </div>
  );
};

export default Header;
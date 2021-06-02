function Avatar({ url, className }) {
  return (
    <img loading="lazy" src={url} className={ `cursor-pointer transition duration-150 transform hover:scale-110 rounded-full ${className}` } alt="profile pic" />
  );
}

export default Avatar;

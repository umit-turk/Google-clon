function Avatar({ url }) {
  return (
    <img loading="lazy" src={url} className=" cursor-pointer transition duration-150 transform hover:scale-110 rounded-full" alt="profile pic" />
  );
}

export default Avatar;

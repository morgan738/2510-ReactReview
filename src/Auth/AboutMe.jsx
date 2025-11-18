const AboutMe = ({ user }) => {
  return (
    <div>
      <h2>About me</h2>
      <hr />
      <h3>Username:</h3>
      <p>{user.username}</p>
      <hr />
      <h3>User id:</h3>
      <p>{user.id}</p>
    </div>
  );
};

export default AboutMe;

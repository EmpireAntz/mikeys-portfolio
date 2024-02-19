function AboutMe() {
  return (
    <div className="text-center my-5">
      <h2>About Me</h2>
     
      <img src="/pic-of-me.jpg" alt="Avatar" className="img-fluid rounded-circle my-3" style={{ maxWidth: '200px' }} />
      <p className="text-muted">
        Your bio here...
      </p>
    </div>
  );
}
  export default AboutMe;
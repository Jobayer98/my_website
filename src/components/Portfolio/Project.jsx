const Project = ({ img, label }) => {
  return (
    <div>
      <figure>
        <img src={img} alt={label} />
      </figure>
    </div>
  );
};

export default Project;

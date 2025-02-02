import "./Title.css";
// eslint-disable-next-line react/prop-types
function Title({ title, subtitle }) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p> {subtitle}</p>
    </div>
  );
}

export default Title;
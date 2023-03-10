import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card  col-12 col-md-3 col-sm-6 rounded-xl drop-shadow-2xl relative mx-2 cursor-pointer "
      onClick={() => {
        navigate(`/roadmap/${props.id}`);
        window.scroll(0, 0)
      }}
    >
      <img alt="card-img" className="h-64 " src={props.src} />
      <h4 className="bottom-4 left-4 absolute font-bold text-xl text-cyan-600">
        {props.heading}
      </h4>
    </div>
  );
}

export default Card;

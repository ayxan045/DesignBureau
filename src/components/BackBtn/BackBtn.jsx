import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button className="back-btn" onClick={handleBack}>
      <span>Back</span>
    </button>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function FurnitureIntro() {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/furniture/652430fe3663591a4aee4f04");
  }, []);

  return (
    <div className="flex-1 flex-center-center text-white">Furniture intro</div>
  );
}

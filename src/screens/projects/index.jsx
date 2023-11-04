import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProjectsIntro() {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/furniture/652430fe3663591a4aee4f04");
  },[]);
  return (
    <>
      <div className="text-white flex-center-center flex-1"></div>
    </>
  );
}

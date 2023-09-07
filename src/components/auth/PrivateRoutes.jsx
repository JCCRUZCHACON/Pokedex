import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HeaderPokeball from "../layout/HeaderPokeball";

//PROTECCION DE RUTA
const PrivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);

  // Outlet permite identificar
  if (name)
    return (
      <HeaderPokeball>
        <Outlet />
      </HeaderPokeball>
    );
  //Navigate redirecciona hacia la ruta base Home
  return <Navigate to="/" />;
};
export default PrivateRoutes;

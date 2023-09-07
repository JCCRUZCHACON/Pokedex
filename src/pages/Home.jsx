import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //! SIRVE PARA HACER UN CONSOLE.LOG Y VER POR LA CONSOLA EL SIGUIENTE CODIGO
    // const trainer = useSelector(store => store.trainer)
    // console.log(trainer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] bg-[url(/images/pokedex.webp)] bg-cover bg-center">
      <section>
        <article>
          <div className="flex justify-center items-center">
            <img  src="/images/banner.png" alt="" />
          </div>
          <h2 className="flex justify-center items-center text-2xl text-white border-2 bg-slate-600 font-semibold p-3 w-[300px] rounded-full m-auto">Hello trainer!</h2>
          <p className="flex justify-center items-center text-2xl text-white ">To start give your name</p>
          <form className="flex justify-center items-center" onSubmit={handleSubmit}>
            <input className="rounded-full p-2 m-3 w-[300px]"
              autoComplete="off"
              placeholder="   your name..."
              id="nameTrainer"
              type="text required"
            />
            <button className="text-white font-bold text-2xl bg-black rounded-full  px-4 py-2">Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

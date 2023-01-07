import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import { useAtomValue} from "jotai";
import {modalAtom} from "../global-states/atoms";



const Home: NextPage = () => {
  const modal = useAtomValue(modalAtom);
  return (
    <div className="h-screen w-screen justify-center items-center overflow-x-hidden" >
      <Navbar/>
      {
        modal &&
      <Modal/>
      }
    </div>
  );
};

export default Home;

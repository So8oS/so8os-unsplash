import { type NextPage } from "next";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import { useAtomValue} from "jotai";
import {modalAtom} from "../global-states/atoms";
import dynamic from 'next/dynamic'

const PhotosList = dynamic(() => import('../components/photoslist'), {
  ssr: false
})

const Home: NextPage = () => {
  const modal = useAtomValue(modalAtom);
  return (
    <div className="h-screen w-screen p-6" >
      <Navbar/>
      {
        modal &&
      <Modal/>
      }
      <PhotosList/>
    </div>
  );
};

export default Home;

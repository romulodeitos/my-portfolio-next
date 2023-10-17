import Image from "next/image";
import foguete from "./imagens/wepik-export-20231017114657U5w5.png";

export default function Contact() {
  return (
    <div id="contact">
      <div className="bg-zinc-800 flex">
        <div className="text-white p-8">
          <h2 className="text-3xl">Contact Me</h2>
          <h3 className="text-xl pt-4">Email: romulodeitos@gmail</h3>
          <h3 className="text-xl pt-4">Discord: romulodupdm#2249</h3>
        </div>
        <div className="flex items-center ml-auto mr-24">
          <a href="#home">
            <Image
              src={foguete}
              alt="Foguete"
              className=" rounded-full w-24 h-24"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

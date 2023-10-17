import Image from "next/image";
import minhaImagem from "./imagens/1696252449484.jpeg";
import favIconGitHub from "./imagens/icons8-github-30.png";
import favIconLinkedin from "./imagens/icons8-linkedin-30.png";
import favIconGitLab from "./imagens/icons8-gitlab-32.png";
import favIconInstagram from "./imagens/icons8-instagram-30.png";

export default function Inicio() {
  return (
    <div id="home">
      <div className="pt-16">
        <Image
          src={minhaImagem}
          alt="Minha Imagem"
          className="mx-auto rounded-full w-32 h-32 mt-16"
        />
        <h1 className="text-white text-center text-6xl mt-8">Rômulo Deitos</h1>
        <h2 className="text-white text-center text-2xl mt-8">
          Student & Web Developer Full Stack
        </h2>
        <div>
          <ul className="flex justify-center mt-8">
            <li className="mx-4">
              <a href="https://github.com/romulodeitos" target="_blank">
                <Image src={favIconGitHub} alt="GitHub" className="w-30 h-30" />
              </a>
            </li>
            <li className="mx-4">
              <a
                href="https://www.linkedin.com/in/romulodeitos/"
                target="_blank"
              >
                <Image
                  src={favIconLinkedin}
                  alt="Linkedin"
                  className="w-30 h-30"
                />
              </a>
            </li>
            <li className="mx-4">
              <a href="https://gitlab.com/romulodeitos" target="_blank">
                <Image src={favIconGitLab} alt="GitLab" className="w-30 h-30" />
              </a>
            </li>
            <li className="mx-4">
              <a
                href="https://www.instagram.com/romulo_deitos/"
                target="_blank"
              >
                <Image
                  src={favIconInstagram}
                  alt="Instagram"
                  className="w-30 h-30"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

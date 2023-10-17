import Image from "next/image";
import postgreSQL from "./imagens/icons8-postgresql-100.png";
import nodeJS from "./imagens/icons8-node-js-90.png";
import reactJS from "./imagens/icons8-reagir-88.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="font-mono... bg-zinc-800 text-white text-center text-4xl pt-16 pb-16">
        <h2>My Projects</h2>
      </div>
      <div className="flex justify-center">
        <div className="font-mono... bg-black text-white w-1/3 p-4 mt-8 mr-4 ml-8 mb-8 h-64">
          <div className="flex items-center mt-1">
            <div className="mx-2">
              <Image src={postgreSQL} alt="postgreSQL" className="ml-5" />
            </div>
            <div className="mx-2">
              <Image src={nodeJS} alt="nodeJS" className="" />
            </div>
            <div className="mx-2">
              <Image src={reactJS} alt="reactJS" className="" />
            </div>
          </div>
          <h3 className="text-3xl text-center mt-2 mb-6 underline">
            <a
              href="https://github.com/romulodeitos/fullstack-project"
              target="_blank"
            >
              Full Stack Project
            </a>
          </h3>
          <h4 className="text-white text-center text-lg">
            CRUD full stack project created for training.
          </h4>
        </div>
        <div className="font-mono... bg-white text-black w-1/3 p-4 mt-8 mr-4 ml-4 mb-8">
          <h3 className="text-3xl text-center">Project coming soon</h3>
          <h4></h4>
        </div>
        <div className="font-mono... bg-blue-800 text-white w-1/3 p-4 mt-8 mr-8 ml-4 mb-8">
          <h3 className="text-3xl text-center">Project coming soon</h3>
          <h4></h4>
        </div>
      </div>
    </div>
  );
}

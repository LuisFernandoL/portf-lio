import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projetcs-container">
      <h2>Projetos</h2>
      <p>Aqui estão alguns dos meus projetos!</p>
      <div className="div-projects">
        <p>
          <h3>Kenzie Hub</h3>
          <h4>
            Interface criada para cadastro de usuário e manipulação dos dados,
            com o CRUD;
          </h4>
          <h4>Tecnologias: CSS, JS6, REACT, HTML.</h4>
          <span>
            <a
              href="https://react-entrega-kenzie-hub-luis-fernando-l.vercel.app/"
              className="btn"
              target="blank"
            >
              Ver projeto
            </a>
            <a
              href="https://github.com/LuisFernandoL/Kenzie_Hub"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Hamburgueria</h3>
          <h4>Projeto criado para simular uma hamburgueria!</h4>
          <h4>Tecnologias: CSS, JS6, REACT, HTML.</h4>
          <span>
            <a
              href="https://react-entrega-s3-template-hamburgueria-luis-fernando-l.vercel.app/"
              className="btn"
              target="blank"
            >
              Ver projeto
            </a>
            <a
              href="https://github.com/LuisFernandoL/Hamburgueria"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Kenzie Feed</h3>
          <h4>
            Interface criada para ser igual a um site de notícias, onde o
            usuário se cadastra, faz login, utiliza do crud para criar notícias,
            editá-las, bem como podendo excluí-las;
          </h4>
          <h4>Tecnologias: CSS, JS6, REACT, HTML, TYPESCRIPT.</h4>
          <span>
            <a
              href="https://github.com/Kenzie-feed-grupo-7/kenzie-feed-grupo7"
              className="btn"
              target="blank"
            >
              Ver projeto
            </a>
            <a
              href="https://github.com/Kenzie-feed-grupo-7/kenzie-feed-grupo7"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Movies</h3>
          <h4>
            Interface criada servir como locadora de filmes, onde elaborei uma
            API;
          </h4>
          <h4>
            Tecnologias: ZOD, POSTGRES, TYPEORM,PG, PG-FORMAT, TYPESCRIPT.
          </h4>
          <span>
            <a
              href="https://github.com/LuisFernandoL/m4-movies-typeorm"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Crud admin</h3>
          <h4>
            Interface criada servir como um crud de verificação de usuário,
            criação de cursos, verificação de admin, utilizando query, onde
            elaborei uma API de acordo com o que precisava;
          </h4>
          <h4>Tecnologias: ZOD, POSTGRES, PG, PG-FORMAT, TYPESCRIPT.</h4>
          <span>
            <a
              href="https://github.com/LuisFernandoL/crud-admin-m4"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Pet Kare</h3>
          <h4>
            Interface criada servir como um site de animais, podendo adicionar
            um animal, com suas características, onde elaborei uma API de acordo
            com o que precisava;
          </h4>
          <h4>Tecnologias: Django, Python.</h4>
          <span>
            <a
              href="https://github.com/LuisFernandoL/m5-pet-kare"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Projeto kanvas</h3>
          <h4>
            Interface criada servir como um site de cadastro de
            estudantes(crude) para cursos criados apenas pelos administradores
            do site, onde elaborei uma API de acordo com o que precisava;
          </h4>
          <h4>Tecnologias: Django, Python.</h4>
          <span>
            <a
              href="https://github.com/LuisFernandoL/m5-projeto-final-kanvas"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>

        <p>
          <h3>Desafio Full Stack</h3>
          <h4>
            Projeto de formato full stack criei sobre clientes que cadastram-se,
            podendo fazer login com suas credenciais, onde elaborei uma API de
            acordo com o que Precisava para que os clientes pudessem adicionar
            contatos a eles, como se fosse uma agenda;
          </h4>
          <h4>
            Tecnologias: ZOD, POSTGRES, TYPEORM,PG, PG-FORMAT, TYPESCRIPT, CSS,
            JS6, REACT, HTML.
          </h4>
          <span>
            <a
              href="https://front-tawny-eight.vercel.app/"
              target="blank"
              className="btn"
            >
              Ver Projeto
            </a>
            <a
              href="https://github.com/LuisFernandoL/desafio-fullstack_1"
              className="btn"
              target="blank"
            >
              Ver código
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProjectsContainer;

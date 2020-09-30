import React, { useState,useEffect, FormEvent} from 'react';
import { Header, Form, Repositories} from './styles';
import api from '../../services/api';
import { FiChevronRight } from 'react-icons/fi';


const RepositoryVue: React.FC = () => {

  interface Repository {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };

    title: string;
    html_url: string;
    user: {
      id: number;
      avatar_url: string;
    };
  };

  const [novoRepositorio, setNovoRepositorio] = useState('');
  const [repositorios, setRepositorios] = useState<Repository[]>(()=>{
  const repositoriosLocais = localStorage.getItem('@GithubExplorer:repositoriesVue');

    if(repositoriosLocais) {
      return JSON.parse(repositoriosLocais);
    } else {
      return [];
    }
  });


  useEffect(() => {localStorage.setItem('@GithubExplorer:repositoriesVue', JSON.stringify(repositorios))},
   [repositorios]);

  async function adicionarRepositorio(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${novoRepositorio}`);
    const repository = response.data;

    setRepositorios([... repositorios, repository]);
    setNovoRepositorio('');
  }


  return (
    <>
      <Header>
        <h1>Vagas VueJS</h1>
      </Header>

      <Form onSubmit={adicionarRepositorio}>
        <input
          value={novoRepositorio}
          onChange={e => setNovoRepositorio(e.target.value)}
          placeholder="Digite aqui o repositório da sua vaga " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
          {repositorios.map((repository) =>(

            <a key={repository.full_name} href={repository.html_url}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
               />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
      </Repositories>
    </>
  );
};

export default RepositoryVue;

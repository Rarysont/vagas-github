import React, { useState,useEffect, FormEvent} from 'react';
import { Header, Form, Repositories} from './styles';
import api from '../../services/api';
import { FiChevronRight } from 'react-icons/fi';


const Repository: React.FC = () => {

  interface Repository {
    full_name: string;
    description: string;
    html_url: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(()=>{
  const storagedRepositories = localStorage.getItem('@GithubExplorer:repositoriesReact');

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });


  useEffect(() => {localStorage.setItem('@GithubExplorer:repositoriesReact', JSON.stringify(repositories))},
   [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([... repositories, repository]);
    setNewRepo('');
  }


  return (
    <>
      <Header>
        <h1>Vagas React</h1>
      </Header>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite aqui o repositório da sua vaga " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
          {repositories.map((repository) =>(
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

export default Repository;

import React from 'react';
import { Header, ContainerReact, ContainerVue } from './styles';
import fb from '../../assets/fb.png';
import vue from '../../assets/vue.png';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header>
        <h1>GitHub Vagas</h1>
      </Header>

      <ContainerReact>
        <img src={fb} alt="VagaReact" />
        <div>
          <a href={`/repositoriesReact`}>
            <h1>React</h1>
            <strong>Vagas de programação React</strong>
          </a>
        </div>
        <FiChevronRight size={20} />
      </ContainerReact>

      <ContainerVue>
        <img src={vue} alt="VagaReact" />
        <div>
          <a href={`/repositoriesVue`}>
            <h1>VueJS</h1>
            <strong>Vagas de programação VueJS</strong>
          </a>
        </div>
        <FiChevronRight size={20} />
      </ContainerVue>
  </>
  );

};


export default Dashboard;

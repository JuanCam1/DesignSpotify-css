import React from 'react';
import Account from '../../shared/account/Account';
import Arrows from '../../shared/arrow/Arrows';
import Cards from './Cards';

import { dataMusic, dataMusicaNueva } from '../../data/dataMusic';
import { dataOtrasCosas } from '../../data/dataOtrasCo';
import { dataNostalgia } from '../../data/dataNosta';
import { dataPrograms } from '../../data/dataPrograms';
import { dataMasAdele } from '../../data/dataMasAdele';
import './Home.css';
import { dataSelect } from '../../data/dataSelec';
import { dataPetando } from '../../data/dataPetando';
import { dataCanta } from '../../data/dataCanta';
import { dataRelax } from '../../data/dataRelax';
import { dataArtistas } from '../../data/dataArtistas';
import { dataEjercicio } from '../../data/dataEjercicio';
import { dataInstrumental } from '../../data/dataInstrumental';
import { dataAnimo } from '../../data/dataAnimo';
import { dataFiesta } from '../../data/dataFiesta';
import Footer from '../../shared/footer/Footer';

const Home = () => {
  console.log(dataMusic);
  return (
    <div className='home'>
      <header className='home-header'>
        <Arrows />
        <div className='home-account'>
          <div className='home-mejorar'>
            <p>Mejorar tu cuenta</p>
          </div>
          <Account />
        </div>
      </header>
      <main className='home-main'>
        <Cards title={'Para arrancar'} data={dataMusic} />
        <Cards title={'Probar otras cosas'} data={dataOtrasCosas} />
        <Cards title={'Throwback'} data={dataNostalgia} />
        <Cards title={'Programas para probar'} data={dataPrograms} />
        <Cards title={'Más como Adele'} data={dataMasAdele} />
        <Cards title={'Listas seleccionadas'} data={dataSelect} />
        <Cards title={'Música nueva'} data={dataMusicaNueva} />
        <Cards title={'Hoy lo está petando'} data={dataPetando} />
        <Cards title={'¡Canta tú también!'} data={dataCanta} />
        <Cards title={'Relax'} data={dataRelax} />
        <Cards title={'Artistas emergentes del mundo'} data={dataArtistas} />
        <Cards title={'Ejercicio'} data={dataEjercicio} />
        <Cards title={'Instrumental'} data={dataInstrumental} />
        <Cards title={'Estado de ánimo'} data={dataAnimo} />
        <Cards title={'Fiesta'} data={dataFiesta} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

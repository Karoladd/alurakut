
import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper}from '../src/components/ProfileRelations'
//import styled from 'styled-components';

function ProfileSidebar(propriedades){
  console.log(propriedades);
  return (
    <Box as="aside">
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}} />
    <hr/>
    <p>
    <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
      @{propriedades.githubUser}
    </a>
    </p>
    <hr/>
    <AlurakutProfileSidebarMenuDefault/>
 </Box>
 
  )

}
export default function Home() {
  //return   <Title>Karoline Yamamoto</Title>
    //const comunidades =['Alurakut'];
  const [comunidades, setComunidades] = React.useState([{
    id: '24736427683764269364723',
    title: 'Amo acordar cedo',
    image: 'https://i.ibb.co/Cpy8hWZ/79b49f1e6cc646ad942a8378477bf7bd.gif'
  }]);
  //const comunidades = comunidades[0];
  //const alteradorDeComunidades = comunidades[];
  const $usuario = 'karoladd';

  const favoritos = [
    'karoline',
    'david',
    'fernanda',
    'anna',
    'pedro',
    'luiza'
  ]
  return (
    <>
      <AlurakutMenu/>
  <MainGrid>
    {/*<Box style="grid-area: profileArea;">*/}
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser={$usuario}/>
    </div>
    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">
        Bem Vindo(a)
        </h1>
        <OrkutNostalgicIconSet/>
      </Box>
      <Box>
        <h2 className="subTitle">O que deseja fazer?</h2>
        <form onSubmit={function handleCriaComunidade(e){
          e.preventDefault();
          const dadosDoForm = new FormData(e.target);
          //comunidades.push('Alura Stars');
          console.log('Campo: ', dadosDoForm.get('title'))
          console.log('Campo: ', dadosDoForm.get('image'))

          const comunidade = {
            id: new Date().toISOString(),
            title: dadosDoForm.get('title'),
            image: dadosDoForm.get('image'),
          }
          const comunidadesAtualizadas = [...comunidades, comunidade];
          setComunidades(comunidadesAtualizadas)
        }
        } >
          <div>
            <input
              placeholder="Qual vai ser o nome da sua comunidade?"
              name="title"
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Coloque uma URL para usarmos de capa"
              name="image"
              aria-label="Coloque uma URL para usarmos de capa"
            />
          </div>
          <button>
              Criar comunidade
          </button>
        </form>

      </Box>

    </div>
    <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
    <ProfileRelationsBoxWrapper>
        <ul>
        {comunidades.map((itemAtual) =>{
            return(
              <li key={itemAtual.id}>
              <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                <img src={itemAtual.image}/>
                <span>{itemAtual.title}</span>
              </a>
              </li>
            )
            }
          )}
        </ul>
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
        Pessoas da Comunidade ({favoritos.length})
        </h2>

        <ul>
        {favoritos.map((itemAtual) =>{
            return(
              <li key={itemAtual}>
              <a href={`/users/${itemAtual}`} >
                <img src={`https://github.com/${itemAtual}.png`}/>
                <span>{itemAtual}</span>
              </a>
              </li>
            )
            }
          )}
        </ul>
      </ProfileRelationsBoxWrapper>
    </div>
  </MainGrid>
  </>
  )
}

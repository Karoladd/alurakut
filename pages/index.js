
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper}from '../src/components/ProfileRelations'
//import styled from 'styled-components';

function ProfileSidebar(propriedades){
  console.log(propriedades);
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}} />
  </Box>
  )

}
export default function Home() {
  //return   <Title>Karoline Yamamoto</Title>
  const $usuario = 'karoladd';
  const favoritos = [
    'karol',
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
    </div>
    <div className="profileRelationArea" style={{gridArea: 'profileRelationArea'}}>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
        Pessoas da Comunidade ({favoritos.length})
        </h2>

        <ul>
        {favoritos.map((itemAtual) =>{
            return(
              <li>
              <a href={`/users/$itemAtual}`} key={itemAtual}>
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

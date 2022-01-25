import avatar from './img/profile.jpg';
import crawler from './img/crawler.JPG';
import mae from './img/mae.JPG';
import mb3 from './img/mb3.png';
import logo from './img/logo.svg';
import linkedin from './img/linkedin.png';
import github from './img/GitHub-Mark-120px-plus.png';
import { Layout, Sidebar, Content, Foot, Spacer } from "./components/layout.js";
import { Card } from "./components/card.js";
import { Title, Subtitle, Body } from "./components/content.js";
import { ButtonLink, Link } from "./components/link.js";
import { Avatar, Image } from "./components/image.js";

const bio = require('./data/bio.json');
const projects = require("./data/projects.json");

function App() {
  return (
      <Layout>
        <Sidebar>
          <Title>Lucas Hillier</Title>
          <Avatar src={avatar} alt="Lucas Hillier"/>
          <Body>{bio.professional}</Body>
          <Body>{bio.personal}</Body>
          <Spacer />
          <Foot>
            <Link href="https://www.linkedin.com/in/lucas-hillier-37703b17b/" target="_blank">
              <Image src={linkedin} alt="My LinkedIn Profile" width="25px"/>
            </Link>
            <Link href="https://github.com/lucashillier" target="_blank">
              <Image src={github} alt="My GitHub Profile" width="25px"/>
            </Link>
          </Foot>
        </Sidebar>
        <Content>
          <Subtitle>My Projects</Subtitle>
          <Card href={projects.project1.url}>
            <Image src={mae} alt="See The Code" width="75%"/>
            <Body>{projects.project1.description}</Body>
          </Card>
          <Card href={projects.project2.url}>
            <Image src={crawler} alt="See The Code" width="75%"/>
            <Body>{projects.project2.description}</Body>
          </Card>
          <Card href={projects.portfolio.url}>
            <Image src={logo} alt="See The Code"/>
            <Body>{projects.portfolio.description}</Body>
          </Card>
          <Card href={projects.mb3.url}>
            <Image src={mb3} alt="See The Code" width="75%"/>
            <Body>{projects.mb3.description}</Body>
          </Card>
        </Content>
      </Layout>
  );
}

export default App;

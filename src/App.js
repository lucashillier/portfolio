import avatar from './img/profile.jpg';
import crawler from './img/crawler.JPG';
import mae from './img/mae.JPG';
import logo from './logo.svg';
import './App.css';
import { Layout, Sidebar, Content } from "./components/layout.js";
import { Card } from "./components/card.js";
import { Title, Subtitle, Body } from "./components/content.js";
import { ButtonLink, Link } from "./components/link.js";
import { Avatar, Image } from "./components/image.js";

const bio = require('./bio.json');
const projects = require("./projects.json");

function App() {
  return (
      <Layout>
        <Sidebar>
          <Title>Lucas Hillier</Title>
          <Avatar src={avatar} alt="Lucas Hillier"/>
          <Body>{bio.professional}</Body>
          <Body>{bio.personal}</Body>
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
        </Content>
      </Layout>
  );
}

export default App;

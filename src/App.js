import profilePic from './img/profile.jpg';
import './App.css';
import { Layout, Sidebar, Content } from "./components/layout.js";
import { Title, Subtitle, Body } from "./components/content.js";
import { ButtonLink, Link } from "./components/link.js";
import { Avatar } from "./components/image.js";

function App() {
  return (
      <Layout>
        <Sidebar>
          <Title>Lucas Hillier</Title>
          <Avatar src={profilePic} alt="Lucas Hillier"/>
          <Body>A brief description</Body>
        </Sidebar>
        <Content>
          <Subtitle>Content Here</Subtitle>
          <ButtonLink href="http://google.ca" target="_blank">
            Test
          </ButtonLink>
          <Link href="http://google.ca">Test</Link>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </Content>
      </Layout>
  );
}

export default App;

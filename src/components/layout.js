import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
  display: flex;
`;

const Sidebar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 99vh;
  background-color: #e1e6f0;
  padding: 5px;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.45);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  gap: 10px 0;
  padding: 0 0 10px 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  background-color: #e1e6f0;
  border-radius: 10px;
  width: 80%;
  height: min-content;
  padding: 5%;
  text-align: center;

  &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.45);
  }
`;

export { Layout, Sidebar, Content, Container };

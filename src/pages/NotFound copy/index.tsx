import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <>
      <Container>
        <MainTemplate>
          <h1>Página não encontrada</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum hic error rerum aperiam illo possimus nesciunt voluptate obcaecati consectetur laboriosam quae repellendus natus, maiores, sequi, labore asperiores quis nihil quos?</p>
        </MainTemplate>
      </Container>
    </>
  )
}
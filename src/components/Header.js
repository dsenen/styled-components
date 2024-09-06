import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="" />
                    <Button><a href="https://youtu.be/02zO0hZmwnw?feature=shared" target="_blank" rel="noreferrer">Try It Free</a></Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Styled Components in React</h1>

                        <p>I followed <a href="https://youtu.be/02zO0hZmwnw?feature=shared" alt="">this <strong>styled components</strong> Traversy Media's video tutorial</a> to create this mini project. This excellent tutorial covers all the concepts needed to master styled components in React.</p>

                        <a href="https://youtu.be/02zO0hZmwnw?feature=shared" target="_blank" rel="noreferrer"><Button bg="#ff0099" color="#fff">Styled Components Tutorial video</Button></a>

                    </div>
                    <Image src="./images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

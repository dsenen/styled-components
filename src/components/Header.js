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
                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Comunnity Your Fans Will Love</h1>

                        <p>Subject to availability. Excludes footwear, socks, hosiery, coats, backpacks & lunchboxes. Applies to full priced items only.</p>

                        <Button bg="#ff0099" color="#fff">Get Started For Free</Button>

                    </div>
                    <Image src="./images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

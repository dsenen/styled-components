import { SocialIcons } from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</li>
                        <li>Phone number</li>
                        <li>email@whatever.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>What we do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                    <SocialIcons />

                </Flex>
                <p>&copy; 2024 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
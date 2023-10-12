import { styled } from "styled-components";
import { infoScripts } from "../scripts/projects/preview";

const InfoWrapper = styled.div`
  min-width: 19rem;
  height: calc(100vh - 80.3px * 2);
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 80.3px;
  background-color: #3a4466;
  color: white;
  @media screen and (max-width: 1250px) {
    width: 100vw;
    height: 100%;
    position: relative;
    bottom: 0;
    top: 0;
    border-radius: 0;
  }
`;

const InfoCard = styled.div`
  border-radius: 1.5rem;
  padding: 3rem 1.6rem;
  background-color: #485276;
  @media screen and (max-width: 1250px) {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
  }
`;

const InfoSection = styled.section`
  @media screen and (max-width: 1250px) {
    /* display: flex; */
    /* justify-content: space-between; */
  }
`;

const Contactlist = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 1.5rem;
  font-family: "Open Sans", sans-serif;
  @media screen and (max-width: 1250px) {
    align-items: center;
    gap: 1rem;
  }
`;

const Contact = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Open Sans", sans-serif;
  @media screen and (max-width: 1250px) {
    flex-direction: row;
  }
`;

const Title = styled.span`
  padding-left: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (max-width: 1250px) {
    display: none;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: black;
    border-radius: 0.5rem;
    color: white;
    padding: 0.2rem 0.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.05;
  }
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    transition: none;
    align-items: center;
    &:hover {
      ${Title} {
        display: flex;
        width: max-content;
        position: absolute;
        bottom: -60%;
        z-index: 10;
      }
    }
    ${Title}::before {
      content: "";
      position: absolute;
      top: -0.55rem;
      left: 50%;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
      transform: translateX(-50%);
    }
  }
`;

interface IconProps {
  bgcolor?: string;
}

const Icon = styled.div<IconProps>`
  display: flex;
  object-fit: cover;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor || "white"};
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
`;

const Info: React.FC = () => {
  return (
    <InfoWrapper>
      <InfoCard>
        {infoScripts.map((info) => (
          <InfoSection>
            <div className="flex gap-4">
              <Avatar>
                <img
                  src={info.avatar}
                  alt={info.name}
                  width="100"
                  height="100"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Avatar>
              <div>
                <h1 className="mb-1">{info.name}</h1>
                <p>{info.dev}</p>
              </div>
            </div>
            <Contactlist>
              <p className="text-xl font-semibold">Contact</p>
              <Contact>
                {info.contact.map((contact) => (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <ContactItem>
                      <Icon bgcolor={contact.bgcolor}>
                        <img
                          src={contact.img}
                          alt={contact.name}
                          width={contact.width || "25"}
                          className=" rounded-[50%]"
                        />
                      </Icon>
                      <Title>{contact.title}</Title>
                    </ContactItem>
                  </a>
                ))}
              </Contact>
            </Contactlist>
          </InfoSection>
        ))}
      </InfoCard>
    </InfoWrapper>
  );
};

export default Info;

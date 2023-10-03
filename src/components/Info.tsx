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
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100%;
    position: relative;
    bottom: 0;
    top: 0;
    border-radius: 0;
  }
  a {
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      scale: 1.05;
    }
  }
`;

const InfoCard = styled.div`
  border-radius: 1.5rem;
  padding: 3rem 1.6rem;
  background-color: #485276;
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

const InfoSection = styled.section`
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Contactlist = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 1.5rem;
  font-family: "Open Sans", sans-serif;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const Contact = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Open Sans", sans-serif;
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

const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
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
              {info.contact.map((contact) => (
                <Contact>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <Icon bgcolor={contact.bgcolor}>
                      <img
                        src={contact.img}
                        alt={contact.name}
                        width={contact.width || "25"}
                        className=" rounded-[50%]"
                      />
                    </Icon>
                    <Title>{contact.title}</Title>
                  </a>
                </Contact>
              ))}
            </Contactlist>
          </InfoSection>
        ))}
      </InfoCard>
    </InfoWrapper>
  );
};

export default Info;

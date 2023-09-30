import { styled } from "styled-components";
import { infoScripts } from "../scripts/projects/preview";

const InfoWrapper = styled.div`
  min-width: 19rem;
  min-height: 36rem;
  height: calc(100vh - 80.3px * 2);
  padding: 3rem 1.6rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 80.3px;
  background-color: #485276;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  a {
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      scale: 1.05;
    }
  }
`;

const Contactlist = styled.li`
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

const Info: React.FC = () => {
  return (
    <InfoWrapper>
      {infoScripts.map((info) => (
        <section>
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
          <ul className="mt-10 flex flex-col gap-y-6">
            <p className="text-xl font-semibold">Contact</p>
            {info.contact.map((contact) => (
              <Contactlist>
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
                  {contact.title}
                </a>
              </Contactlist>
            ))}
          </ul>
        </section>
      ))}
    </InfoWrapper>
  );
};

export default Info;

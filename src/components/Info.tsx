import * as React from "react";
import { styled } from "styled-components";
import { infoScripts } from "../scripts/projects/preview";
import images from "../assets/images/images";

interface InfoWrapperProps {
  open: boolean; // open 프로퍼티를 정의
}

const InfoWrapper = styled.div<InfoWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 19rem;
  height: calc(100vh - 80.3px * 2);
  min-height: 530px;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 80.3px;
  background-color: #3a4466;
  color: white;
  @media screen and (max-width: 1250px) {
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 100;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: all 0.5s ease-out;
    transform: ${(props) =>
      props.open ? "translate3d(0, -50%, 0)" : "translate3d(-100%, -50%, 0)"};
  }
`;

const InfoCard = styled.div`
  border-radius: 1.5rem;
  padding: 3rem 1.6rem;
  background-color: #485276;
  @media screen and (max-width: 1250px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Contactlist = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 1.5rem;
  /* @media screen and (max-width: 1250px) {
    align-items: center;
    gap: 1rem;
  } */
`;

const Contact = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* @media screen and (max-width: 1250px) {
    flex-direction: row;
  } */
`;

const Title = styled.span`
  padding-left: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  /* @media screen and (max-width: 1250px) {
    display: none;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: black;
    border-radius: 0.5rem;
    color: white;
    padding: 0.2rem 0.5rem;
  } */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  a {
    transition: all 0.3s ease;
    &:hover {
      scale: 1.05;
    }
  }
  /* @media screen and (max-width: 1250px) {
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
  } */
`;

const SideButton = styled.div`
  display: none;
  @media screen and (max-width: 1250px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: -1;
    cursor: pointer;
    position: absolute;
    top: 10%;
    right: -2.8rem;
    transform: translateY(-50%);
    width: 4rem;
    height: 3.2rem;
    background-color: white;
    border-radius: 1.2rem;
    border: 6px solid #3a4466;
    transition: 0.3s all ease;
    &:hover {
      scale: 1.02;
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
  background-color: ${(props) => props.color || "white"};
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
`;

const Copyright = styled.div`
  position: relative;
  bottom: 0;
  font-size: 0.8rem;
  padding: 0 0 1rem 1.6rem;
`;

const Info: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const infoWrapperRef = React.useRef<HTMLDivElement | null>(null);

  // Infowrapper 외부 클릭 시 닫기
  const handleClickOutside = (event: MouseEvent) => {
    if (infoWrapperRef.current && !infoWrapperRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // Infowrapper 외부 클릭 이벤트를 추가
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log(`현재 상태는 ${isOpen}`);
  };

  return (
    <InfoWrapper ref={infoWrapperRef} open={isOpen}>
      <InfoCard>
        {infoScripts.map((info) => (
          <section key={info.name}>
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
                <p className="mb-1 text-2xl font-medium">{info.name}</p>
                <p>{info.dev}</p>
              </div>
            </div>
            <Contactlist>
              <p className="text-xl font-medium">Contact</p>
              <Contact>
                {info.contact.map((contact) => (
                  <ContactItem key={contact.name}>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <Icon>
                        <img
                          src={contact.img}
                          alt={contact.name}
                          width={contact.width || "25"}
                          className=" rounded-[50%]"
                        />
                      </Icon>
                      <Title>{contact.title}</Title>
                    </a>
                  </ContactItem>
                ))}
              </Contact>
            </Contactlist>
          </section>
        ))}
      </InfoCard>
      <SideButton onClick={toggleMenu}>
        <img src={images.contacts} width="40" alt="Contacts" className="relative -left-0.5" />
      </SideButton>
      <Copyright>
        <p>© {new Date().getFullYear()} Developed by nuyhv</p>
      </Copyright>
    </InfoWrapper>
  );
};

export default Info;

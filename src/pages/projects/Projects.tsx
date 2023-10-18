import * as React from "react";
import { ContentWrapper, Tag } from "../../assets/styles/CommonStyles.tsx";
import styled from "styled-components";
import { projectScripts } from "../../scripts/projects/preview.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/images/images.ts";
import { DetailButton } from "../../components/DetailButton.tsx";
import { Detail } from "./Detail.tsx";

const ImgContainer = styled.div`
  width: 100%;
  /* min-height: fit-content; */
  max-height: 350px;
  overflow: hidden;
  border-radius: 1rem;
  img {
    object-fit: cover;
    transition: 0.3s ease;
    &:hover {
      scale: 1.03;
    }
  }
`;

const CustomSlider = styled(Slider)`
  .slick-prev {
    left: 20px;
    z-index: 1;
  }
  .slick-next {
    right: 20px;
  }
  .slick-prev::before,
  .slick-next::before {
    color: #485276;
  }
  .slick-dots {
    bottom: -15px;
    li {
      button::before {
        color: #485276;
      }
    }
  }
`;

const NoImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #d6d8df;
  border-radius: 1rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  min-width: 30px;
  width: 30px;
  transition: 0.3s all ease;
  &:hover {
    scale: 1.1;
  }
`;

const Description = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.7rem;
  gap: 0.375rem;
  li {
    display: flex;
  }
  li::before {
    content: "✓";
    margin-right: 7px;
  }
`;

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <section id="projects" className="flex flex-col gap-8">
      {projectScripts.map((project) => (
        <ContentWrapper key={project.id} data-aos="fade-up">
          <h1>Projects</h1>
          {project.image.length === 0 ? (
            <NoImage />
          ) : (
            <CustomSlider {...settings}>
              {project.image.map((image) => (
                <ImgContainer key={image}>
                  <img src={image} alt={project.title} key={image} />
                </ImgContainer>
              ))}
            </CustomSlider>
          )}
          <div className="flex items-center gap-2 pt-2">
            <h2 className="text-2xl font-medium">{project.title}</h2>
            <Icon>
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <img src={images.link} width="30" />
              </a>
            </Icon>
            <Icon>
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                <img src={images.github} width="30" />
              </a>
            </Icon>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            {project.skills.map((skills) => (
              <Tag key={skills}>{skills}</Tag>
            ))}
          </div>
          <div>
            <p className="font-medium text-lg pb-1.5">{project.subTitle}</p>
            <Description>
              {project.desc.map((desc) => (
                <li className="relative" key={desc}>
                  <p>{desc}</p>
                </li>
              ))}
            </Description>
            <button onClick={openModal}>
              <DetailButton />
            </button>
          </div>
        </ContentWrapper>
      ))}
      {isModalOpen ? <Detail onClose={closeModal} /> : null}
    </section>
  );
};

export default Projects;

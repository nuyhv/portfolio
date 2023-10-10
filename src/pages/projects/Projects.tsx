import { ContentWrapper, Tag } from "../../assets/styles/CommonStyles.tsx";
import styled from "styled-components";
import { projectScripts } from "../../scripts/projects/preview.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/images/images.ts";

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
  width: 30px;
  a {
    align-items: center;
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
                  <img src={image} alt={project.title} />
                </ImgContainer>
              ))}
            </CustomSlider>
          )}
          <div className="flex items-center gap-2 pt-2">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <Icon>
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <img src={images.link} width="30" />
              </a>
            </Icon>
            <Icon>
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                <img src={images.github} width="25" />
              </a>
            </Icon>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            {project.skills.map((skills) => (
              <Tag key={skills}>{skills}</Tag>
            ))}
          </div>
          <p className="font-semibold text-lg">{project.subTitle}</p>
          <ul className="list-disc">
            {project.desc.map((desc) => (
              <li className="relative left-4">{desc}</li>
            ))}
          </ul>
        </ContentWrapper>
      ))}
    </section>
  );
};

export default Projects;

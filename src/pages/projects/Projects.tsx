import { ContentWrapper, Tag } from "../../assets/styles/CommonStyles.tsx";
import styled from "styled-components";
import { projectScripts } from "../../scripts/projects/preview.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgContainer = styled.div`
  width: 100%;
  /* min-height: fit-content; */
  max-height: 60%;
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
  height: 70%;
  background-color: #d6d8df;
  border-radius: 1rem;
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
          <h2 className="text-2xl font-semibold py-2">{project.title}</h2>
          <div>
            {project.skills.map((skills) => (
              <Tag key={skills}>{skills}</Tag>
            ))}
          </div>
          <p>{project.subTitle}</p>
        </ContentWrapper>
      ))}
    </section>
  );
};

export default Projects;

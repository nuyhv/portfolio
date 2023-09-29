interface Project {
  id: number;
  title: string;
  subTitle: string;
  period: string;
  skills: string[];
  image: string;
  routePath: string;
  demoLink: string;
  repoLink: string;
  desc: string[];
}

export const infoScripts = [
  {
    id: 1,
    name: "송상현",
    dev: "Frontend Developer",
    contact: [
      { name: "Phone", title: "010-3513-7552", img: "src/assets/images/phone.svg" },
      { name: "Gmail", title: "volumefd@gmail.com", img: "src/assets/images/gmail.svg" },
      {
        name: "Github",
        title: "Github",
        img: "src/assets/images/github.svg",
        link: "https://github.com/nuyhv",
      },
      {
        name: "Velog",
        title: "Blog",
        img: "src/assets/images/velog.svg",
        bgcolor: "#485276",
        width: "32px",
        link: "https://velog.io/@ss_hyun",
      },
    ],
  },
];

export const projectScripts: Project[] = [
  {
    id: 1,
    title: "빵 오더",
    period: "2023.08.24 ~ 2023.09.22",
    skills: ["React", "Javacript", "Tailwind CSS", "Styled-Components", "Zustand"],
    image: "src/assets/images/bbangorder.png",
    routePath: "/bbangorder",
    demoLink: "http://bbangorder.s3-website.ap-northeast-2.amazonaws.com/",
    repoLink: "https://github.com/codestates-seb/seb45_main_014",
    subTitle:
      "빵 오더는 빵집을 검색하거나, 추천 빵집으로 접속해서 메뉴를 고르고 예약된 시간에 맞춰서 픽업하는 서비스입니다.",
    desc: [],
  },
  {
    id: 2,
    title: "Stack Overflow 클론",
    period: "2023.08.04 ~ 2023.08.23",
    skills: ["React", "Typescript", "Tailwind CSS", "Vite"],
    image: "",
    routePath: "/stackoverflow",
    demoLink: "",
    repoLink: "",
    subTitle: "Stack Overflow의 질문 페이지를 클론 코딩했습니다.",
    desc: [],
  },
  {
    id: 3,
    title: "My Portfolio",
    period: "2023.09.27 ~ ing",
    skills: ["React", "Typescript", "Tailwind CSS", "Styled-Components", "Vite"],
    image: "",
    routePath: "/myportfolio",
    demoLink: "",
    repoLink: "",
    subTitle: "This is my portfolio website. I used React, Typescript, Tailwind CSS, and Vite.",
    desc: [],
  },
];

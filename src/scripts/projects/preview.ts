import images from "../../assets/images/images";

interface Project {
  id: number;
  title: string;
  subTitle: string;
  period: string;
  skills: string[];
  image: string[];
  routePath: string;
  demoLink: string;
  repoLink: string;
  desc: string[];
}

export const infoScripts = [
  {
    id: 1,
    name: "송상현",
    avatar: images.icebear,
    dev: "Frontend Developer",
    contact: [
      {
        name: "LinkedIn",
        title: "LinkedIn",
        img: images.linkedin,
        link: "https://www.linkedin.com/in/nuyhs/",
      },
      {
        name: "Gmail",
        title: "volumefd@gmail.com",
        img: images.gmail,
        link: "mailto:volumefd@gmail.com",
      },
      {
        name: "Github",
        title: "Github",
        img: images.github,
        link: "https://github.com/nuyhv",
      },
      {
        name: "Velog",
        title: "Blog",
        img: images.velog,
        bgcolor: "#485276",
        width: "32px",
        link: "https://velog.io/@ss_hyun",
      },
    ],
  },
];

export const skillsScripts = [
  {
    title: "Frontend",
    skills: [
      {
        id: 1,
        name: "React",
        img: "https://img.icons8.com/color/144/react-native.png",
        bgcolor: "#61dafb",
      },
      {
        id: 2,
        name: "JavaScript",
        img: "https://img.icons8.com/color/144/javascript--v1.png",
        bgcolor: "#f0db4f",
      },
      {
        id: 3,
        name: "Typescript",
        img: "https://img.icons8.com/color/144/typescript.png",
        bgcolor: "#3178c6",
      },
      {
        id: 4,
        name: "HTML",
        img: "https://img.icons8.com/color/144/html-5.png",
        bgcolor: "#e34f26",
      },
      {
        id: 5,
        name: "CSS",
        img: "https://img.icons8.com/color/144/css3.png",
        bgcolor: "#2965f1",
      },
      {
        id: 6,
        name: "Tailwind",
        img: "https://img.icons8.com/color/144/tailwind_css.png",
        bgcolor: "#06b6d4",
      },
      {
        id: 7,
        name: "Styled-Components",
        img: "https://img.icons8.com/color/144/styled-components.png",
        bgcolor: "#db7093",
      },
      {
        id: 8,
        name: "Redux",
        img: "https://img.icons8.com/color/144/redux.png",
        bgcolor: "#764abc",
      },
      {
        id: 10,
        name: "Zustand",
        img: images.zustand,
        bgcolor: "#764abc",
      },
      {
        id: 11,
        name: "Vite",
        img: "https://img.icons8.com/color/144/vite.png",
        bgcolor: "#646c7a",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        id: 1,
        name: "Node.js",
        img: "https://img.icons8.com/color/144/nodejs.png",
        bgcolor: "#339933",
      },
      {
        id: 2,
        name: "Express",
        img: "https://img.icons8.com/color/144/express-js.png",
        bgcolor: "#000000",
      },
      {
        id: 3,
        name: "AWS",
        img: "https://img.icons8.com/color/144/amazon-web-services.png",
        bgcolor: "#232f3e",
      },
    ],
  },
  {
    title: "Etc",
    skills: [
      {
        id: 1,
        name: "Git",
        img: "https://img.icons8.com/color/144/git.png",
        bgcolor: "#f05032",
      },
      {
        id: 2,
        name: "Github",
        img: "https://img.icons8.com/fluency/144/github.png",
        bgcolor: "#181717",
      },
      {
        id: 3,
        name: "Discord",
        img: "https://img.icons8.com/color/144/discord.png",
        bgcolor: "#4a154b",
      },
      {
        id: 4,
        name: "Zoom",
        img: "https://img.icons8.com/color/144/zoom.png",
        bgcolor: "#2d8cff",
      },
      {
        id: 5,
        name: "Notion",
        img: "https://img.icons8.com/color/144/notion.png",
        bgcolor: "#000000",
      },
      {
        id: 6,
        name: "Figma",
        img: "https://img.icons8.com/color/144/figma.png",
        bgcolor: "#f24e1e",
      },
    ],
  },
];

export const aboutScripts = {
  id: 1,
  title: ["안녕하세요. 웹 프론트엔드 개발자 송상현입니다."],
  desc: [
    "코드를 개선하는 것을 주저하지 않고 바로 실행에 옮깁니다.",
    "사용자 경험을 높이기 위해서 의견을 주고받는 것을 좋아합니다.",
    "문제를 해결하기 위해 포기하지 않고 집요하게 파고듭니다.",
  ],
};

export const projectScripts: Project[] = [
  {
    id: 1,
    title: "빵 오더",
    period: "2023.08.24 ~ 2023.09.22",
    skills: ["React", "Javacript", "Tailwind CSS", "Styled-Components", "Zustand"],
    image: [images.bbangorder, images.bbangorder2, images.bbangorder3],
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
    skills: ["React", "JavaScript", "Styled-Components", "Redux-toolkit"],
    image: [images.stackclone, images.stackclone2],
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
    image: [],
    routePath: "/myportfolio",
    demoLink: "",
    repoLink: "",
    subTitle: "This is my portfolio website. I used React, Typescript, Tailwind CSS, and Vite.",
    desc: [],
  },
];

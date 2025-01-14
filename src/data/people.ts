export interface Person {
  name: string;
  title: string;
  image: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export const peopleData: Record<string, Person> = {
  'keeheon-lee': {
    name: "Keeheon Lee",
    title: "Principal Investigator, Associate Professor",
    image: "/images/keeheon.jpg",
    email: "keeheon@yonsei.ac.kr",
    github: "https://github.com/keeheon",
    linkedin: "https://www.linkedin.com/in/keeheon-lee-34441a176/",
    bio: "Dr. Keeheon Lee is an Associate Professor at Yonsei University in South Korea, affiliated with the Creative Technology Management program at Underwood International College, the Department of Innovation at Yonsei Graduate School, and the Graduate School of Information.\n\n He has recently served as a Visiting Professor in the Department of Mechanical and Industrial Engineering at the University of Toronto, Canada, from September 2023 to August 2024. Dr. Lee’s research focuses on data science applications for social good, with interests in the science of science, technology, innovation, design, and the interaction between society and technology. He has held leadership roles such as Director of the Yonsei Digital Experience Center and Associate Director of the Veritas Research Institute. Dr. Lee has been recognized with awards including the QS Reimagine Education Award (Bronze in Social Science) and Yonsei University’s Excellence in Research Award for the 2021 academic year."
  },
  'kunhee-ryu': {
    name: "Kunhee Ryu",
    title: "Associate Manager, Masters Student",
    image: "/images/kunhee.jpg",
    email: "rgh112@yonsei.ac.kr",
    github: "https://github.com/orgs/hair-lab/people/rgh112",
    linkedin: "https://linkedin.com/in/researcher1",
    bio: "Pursuing M.S. in Innovation, Yonsei University \nB.S. in Creative Technology Manangement, Yonsei University"
  },
  'arina-svetasheva': {
    name: "Arina Svetasheva",
    title: "Researcher, Alumni",
    image: "/images/arina.jpg",
    email: "rsvetasheva@yonsei.ac.kr",
    github: "https://github.com/RikhterK",
    linkedin: "https://www.linkedin.com/in/arina-svetasheva-446426225/",
    bio: "M.S. in Innovation, Yonsei University \nB.S. in Management, NEOMA Business School \nB.S. in International Management, The Russian Presidential Academy of National Economy and Public Administration"
  },
  'hyegang-kim': {
    name: "Hyegang Kim",
    title: "Researcher, Masters Student",
    image: "/images/hyegang.jpg",
    email: "mw116208@yonsei.ac.kr",
    github: "https://github.com/BobettiFP",
    linkedin: "https://www.linkedin.com/in/%ED%98%9C%EA%B0%95-%EA%B9%80-0084aa1b8/",
    bio: "Pursuing M.S. in Innovation, Yonsei University\nB.S. in Creative Technology Management, Yonsei University"
  },
  'minjae-kim': {
    name: "Minjae Kim",
    title: "Researcher, Masters Student",
    image: "/images/minjae.jpg",
    email: "mjddol@yonsei.ac.kr",
    github: "https://github.com/researcher4",
    linkedin: "https://linkedin.com/in/researcher4",
    bio: "Pursuing M.S in Innovation, Yonsei University \nB.S. in Creative Technology Management\nB.A. in Economics, Yonsei University"
  },
  'jaewoo-lee': {
    name: "Jaewoo Lee",
    title: "Researcher, Alumni",
    image: "/images/jaewoo.jpg",
    email: "jaewoolee1118@gmail.com",
    github: "https://github.com/researcher5",
    linkedin: "https://www.linkedin.com/in/jaewoo-lee-921a6b241/",
    bio: "M.S. in Innovation, Yonsei University\nB.A. in Science Technology and Policy, Yonsei University\nB.A. in Psychology, Yonsei University"
  },
  'seongmin-chang' : {
    name: "Seongmin Chang",
    title: "Researcher, Undergraduate Student",
    image: "/images/seongmin.jpg",
    email: "seongminc0119@gmail.com",
    github: "https://github.com/takeachangs",
    linkedin: "https://www.linkedin.com/in/seongminc/",
    bio: "HBSc in Mathematics and Its Applications: Probability/Statistics, University of Toronto"

  }
};
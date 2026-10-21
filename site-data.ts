export type Project = {
  title: string;
  description: string;
  technologies: string[];
  number: string;
  category: string;
  github?: string;
};
export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  details: string[];
};
export type SkillGroup = { title: string; skills: string[] };

export const profile = {
  name: "Sabareeswaran Kolanjiyappan",
  shortName: "Sabareeswaran",
  role: "Computer Science Graduate · Aspiring Software Developer",
  location: "Jayankondam, Tamil Nadu, India",
  email: "sabareekk21@gmail.com",
  phone: "+91-6369984973",
  linkedin: "https://www.linkedin.com/in/sabareeswaran-kolanjiappan-2a958934b",
  summary:
    "I’m a Computer Science and Engineering graduate who enjoys turning ideas into practical software. My academic work spans machine learning, computer vision, deep learning, and Arduino-based automation. I’m looking for opportunities to learn, collaborate, and build useful technology.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "SRM Institute of Science and Technology, Ramapuram, Chennai",
    year: "2026",
    score: "7.3 / 10 CGPA"
  },
  certifications: ["Google Professional Certificate", "IBM Professional Certificate", "Coursera Courses"],
  languages: ["Tamil — Native proficiency", "English — Professional working proficiency"]
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Early-Stage COPD Detection",
    category: "Deep Learning · Healthcare",
    description:
      "Explored a deep learning framework for early-stage Chronic Obstructive Pulmonary Disease (COPD) detection using adaptive multiscale feature fusion, with a focus on diagnostic accuracy and generalization across datasets.",
    technologies: ["Python", "Machine Learning", "Deep Learning"]
  },
  {
    number: "02",
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    description:
      "Built an automated attendance workflow using facial detection and recognition techniques to identify faces and record attendance.",
    technologies: ["Python", "OpenCV", "Machine Learning"]
  },
  {
    number: "03",
    title: "Car Price Prediction",
    category: "Applied Machine Learning",
    description:
      "Created a used-car price prediction model, covering data preprocessing, feature engineering, and model evaluation.",
    technologies: ["Python", "Scikit-learn", "Pandas"]
  },
  {
    number: "04",
    title: "Automatic Dustbin with Arduino",
    category: "Embedded Systems · IoT",
    description:
      "Designed a touch-free dustbin lid that responds to distance measured by an ultrasonic sensor, with an Arduino controlling the lid mechanism.",
    technologies: ["Arduino Uno", "Ultrasonic Sensor", "Servo Motor", "Embedded C"]
  }
];

export const skills: SkillGroup[] = [
  { title: "Programming", skills: ["Python", "JavaScript (learning)", "HTML", "CSS"] },
  { title: "Data & AI", skills: ["Machine Learning fundamentals", "Deep Learning fundamentals", "OpenCV", "Pandas", "Scikit-learn"] },
  { title: "Tools & Platforms", skills: ["Git (learning)", "GitHub", "VS Code", "Microsoft Office"] },
  { title: "Foundations", skills: ["SQL basics", "Problem solving", "Analytical thinking", "Team collaboration", "Communication", "Time management"] }
];

export const activities = [
  {
    title: "Volunteer",
    organization: "Akshya Trust",
    description: "Supported food distribution, inventory management, grocery and household bill tracking, and storeroom organization to help use resources efficiently."
  },
  {
    title: "Event Coordinator",
    organization: "TEXUS 2024 · Department Symposium",
    description: "Coordinated a mystery-solving event, managing logistics, participant coordination, timelines, resource allocation, and on-the-day problem solving."
  }
];
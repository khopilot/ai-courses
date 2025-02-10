export interface Phase {
  title: string;
  weeks: {
    number: number;
    title: string;
    content: string[];
  }[];
}

export interface CourseProgram {
  title: string;
  subtitle: string;
  author: string;
  objective: string;
  targetAudience: string;
  duration: {
    total: string;
    hoursPerWeek: number;
  };
  phases: Phase[];
  learningOutcomes: string[];
  assessmentMethods: string[];
  certification: string;
  conclusion: string;
}

export const courseData: CourseProgram = {
  title: "Practical Web Development and AI Integration: Real-World Application Focus",
  subtitle: "Comprehensive Proposal for a Teaching Program",
  author: "by Nicolas Delrieu",
  objective: "To provide students with a hands-on, practical learning experience in web development and AI integration, ensuring quick tangible results through real-use case applications.",
  targetAudience: "Students interested in technology, computer science, IT, or related fields seeking to enhance their technical skills and career readiness. Also, any person that want to learn from scratch.",
  duration: {
    total: "1 Academic Year (Approximately 36 weeks)",
    hoursPerWeek: 4
  },
  phases: [
    {
      title: "Phase 1: Foundations of Web Development",
      weeks: [
        {
          number: 1,
          title: "Introduction to HTML/CSS",
          content: [
            "Basics of web structure and styling",
            "Hands-on exercise: Create a simple webpage"
          ]
        },
        {
          number: 2,
          title: "Introduction to JavaScript",
          content: [
            "Understanding client-side scripting",
            "Exercise: Interactive elements on a webpage"
          ]
        },
        {
          number: 3,
          title: "Introduction to Backend Development",
          content: [
            "Basics of server-side programming (using Node.js or Python)",
            "Exercise: Build a simple backend API"
          ]
        },
        {
          number: 4,
          title: "Database Basics",
          content: [
            "Introduction to SQL and NoSQL databases",
            "Exercise: Design and implement a database for a project"
          ]
        }
      ]
    },
    {
      title: "Phase 2: Intermediate Web Development",
      weeks: [
        {
          number: 5,
          title: "Advanced JavaScript and DOM Manipulation",
          content: [
            "Understanding asynchronous operations and AJAX",
            "Exercise: Implementing real-time data fetching"
          ]
        },
        {
          number: 6,
          title: "Introduction to Frameworks",
          content: [
            "Overview of frontend and backend frameworks (React.js or Django)",
            "Exercise: Building a component-based UI"
          ]
        },
        {
          number: 7,
          title: "APIs and Authentication",
          content: [
            "RESTful APIs, JWT, and user authentication",
            "Exercise: Secure API development"
          ]
        },
        {
          number: 8,
          title: "Deployment Basics",
          content: [
            "Hosting websites on platforms like Heroku or AWS",
            "Exercise: Deploying a complete web application"
          ]
        }
      ]
    },
    {
      title: "Phase 3: Introduction to AI and Machine Learning",
      weeks: [
        {
          number: 9,
          title: "Overview of AI and Machine Learning",
          content: [
            "Applications in various industries",
            "Exercise: Simple classification using Python"
          ]
        },
        {
          number: 10,
          title: "Basics of TensorFlow/Scikit-learn",
          content: [
            "Understanding machine learning algorithms",
            "Exercise: Implementing a basic model"
          ]
        },
        {
          number: 11,
          title: "Data Preprocessing and Feature Engineering",
          content: [
            "Cleaning data and preparing datasets",
            "Exercise: Creating a dataset for AI applications"
          ]
        },
        {
          number: 12,
          title: "Model Evaluation and Optimization",
          content: [
            "Techniques like cross-validation and hyperparameter tuning",
            "Exercise: Optimizing an existing model"
          ]
        }
      ]
    },
    {
      title: "Phase 4: AI Integration in Web Development",
      weeks: [
        {
          number: 13,
          title: "Implementing AI Models in Web Applications",
          content: [
            "Using AI for predictive analytics, recommendation systems, etc.",
            "Exercise: Integrate a machine learning model into a web app"
          ]
        },
        {
          number: 14,
          title: "Advanced JavaScript Libraries for AI Visualization",
          content: [
            "Tools like D3.js or TensorFlow.js for data visualization",
            "Exercise: Visualizing AI model outputs"
          ]
        },
        {
          number: 15,
          title: "Natural Language Processing (NLP) Basics",
          content: [
            "Introduction to NLP and its applications",
            "Exercise: Implementing a simple chatbot"
          ]
        },
        {
          number: 16,
          title: "Computer Vision Basics",
          content: [
            "Overview of computer vision techniques",
            "Exercise: Image processing using OpenCV"
          ]
        }
      ]
    },
    {
      title: "Phase 5: Advanced Topics",
      weeks: [
        {
          number: 17,
          title: "Full Stack Development with AI Integration",
          content: [
            "Combining frontend, backend, and AI in one application",
            "Exercise: Developing a full-stack AI-powered web app"
          ]
        },
        {
          number: 18,
          title: "Performance Optimization and Security",
          content: [
            "Optimizing web applications for speed and security",
            "Exercise: Securing an AI web application"
          ]
        },
        {
          number: 19,
          title: "Cloud Computing Basics",
          content: [
            "Deploying AI models on cloud platforms like AWS or Google Cloud",
            "Exercise: Hosting a scalable AI web app"
          ]
        },
        {
          number: 20,
          title: "Agile Development and Version Control",
          content: [
            "Using Git for version control and agile methodologies",
            "Exercise: Collaborative coding project using Git"
          ]
        }
      ]
    },
    {
      title: "Phase 6: Project-Based Learning",
      weeks: [
        {
          number: 21,
          title: "Project Initiation",
          content: [
            "Students form teams to work on real-world projects",
            "Define project goals, scope, and timeline"
          ]
        },
        {
          number: 22,
          title: "Project Development - Week 1",
          content: [
            "Develop projects incorporating web development and AI integration",
            "Regular mentorship sessions for guidance"
          ]
        },
        {
          number: 23,
          title: "Project Development - Week 2",
          content: [
            "Continue project development",
            "Regular mentorship sessions for guidance"
          ]
        },
        {
          number: 24,
          title: "Project Presentations",
          content: [
            "Presentations of projects to peers and instructors",
            "Feedback session and grading"
          ]
        }
      ]
    },
    {
      title: "Phase 7: Collaborative Projects and Industry Simulations",
      weeks: [
        {
          number: 25,
          title: "Industry Case Studies",
          content: [
            "Analyzing real-world AI and web development challenges",
            "Exercise: Solving case studies in groups"
          ]
        },
        {
          number: 26,
          title: "Industry Projects - Week 1",
          content: [
            "Collaborative projects with industry partners",
            "Students work on live projects or simulated industry scenarios"
          ]
        },
        {
          number: 27,
          title: "Industry Projects - Week 2",
          content: [
            "Continue work on industry projects",
            "Regular feedback and guidance sessions"
          ]
        },
        {
          number: 28,
          title: "Final Deliverables",
          content: [
            "Submitting project reports and demos",
            "Feedback from industry professionals"
          ]
        }
      ]
    },
    {
      title: "Phase 8: Final Project Development and Presentation",
      weeks: [
        {
          number: 29,
          title: "Final Project Refinement - Week 1",
          content: [
            "Students refine their final projects based on feedback",
            "Prepare for the final presentation"
          ]
        },
        {
          number: 30,
          title: "Final Project Refinement - Week 2",
          content: [
            "Continue project refinement",
            "Presentation preparation"
          ]
        },
        {
          number: 31,
          title: "Final Presentations",
          content: [
            "Final project presentations and defenses",
            "Peer evaluation and instructor assessment"
          ]
        },
        {
          number: 32,
          title: "Program Completion",
          content: [
            "Review of learning outcomes and program wrap-up",
            "Issuing Certificates"
          ]
        }
      ]
    }
  ],
  learningOutcomes: [
    "Develop fully functional web applications using modern technologies",
    "Integrate AI and machine learning models into web applications",
    "Understand and implement advanced topics in both web development and AI",
    "Work collaboratively on real-world projects, simulating industry environments",
    "Deploy scalable and secure web applications with AI integration"
  ],
  assessmentMethods: [
    "Quizzes and Exams: Regular assessments to gauge understanding of theoretical concepts",
    "Hands-On Exercises: Evaluation of practical skills through assigned exercises",
    "Project Deliverables: Grading based on the quality, functionality, and presentation of projects",
    "Peer Feedback: Involvement of peer reviews in collaborative tasks"
  ],
  certification: "Upon successful completion of the program, students will receive a certificate recognizing their skills in web development and AI integration.",
  conclusion: "This program is designed to equip students with both technical and practical skills needed to excel in the fields of web development and AI integration. By focusing on real-world applications and collaborative projects, we aim to prepare the next generation of tech professionals ready to tackle industry challenges."
}; 
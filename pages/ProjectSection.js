import { useTheme } from "../ThemeContext";

const ProjectsSection = () => {
  //   const { state } = useTheme();

  const projects = [
    {
      title: "React ToDoList",
      description: "Created a TodoList using React",
      tech: "React",
      link: "https://github.com/mqkhan/todolist.git",
    },
    {
      title: "React ToDoList",
      description: "Created a TodoList using React",
      tech: "React",
      link: "https://github.com/mqkhan/todolist.git",
    },
    {
      title: "React ToDoList",
      description: "Created a TodoList using React",
      tech: "React",
      link: "https://github.com/mqkhan/todolist.git",
    },
    {
      title: "React ToDoList",
      description: "Created a TodoList using React",
      tech: "React",
      link: "https://github.com/mqkhan/todolist.git",
    },
  ];

  return (
    <section className="bg-gray-200 dark:bg-gray-700 p-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Tech Used: {project.tech}
            </p>
            <a
              href={project.link}
              className="text-blue-500 dark:text-blue-400 mt-2 block"
              target="_blank"
              rel=""
            >
              {"View Project"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Project } from '../../types';

interface LiveProjectProps {
  projects: Project[];
}

export default function LiveProject({ projects }: LiveProjectProps) {
  return (
    <div>
      <div className="section-heading mb-8">
        <h2 className="text-3xl font-bold">Live Projects</h2>
        <p className="text-gray-500 mt-2">Work on real-world projects and gain practical experience</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.imgUrl}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs font-semibold text-crimson uppercase tracking-wider">
                {project.domain}
              </span>
              <h3 className="text-xl font-bold text-rhino mt-1 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

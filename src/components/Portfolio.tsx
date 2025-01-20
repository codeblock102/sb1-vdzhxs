interface PortfolioProps {
  projectClickHandler: (url: string) => void;
}

const projects = [
  {
    title: 'Fitness Studio Website',
    category: 'Web Development',
    image: '/assets/images/luxury.jpg',
    link: 'https://stately-quokka-473acc.netlify.app/'
  },
  {
    title: 'PowerfitMTL',
    category: 'Web Development',
    image: '/assets/images/powerfitmtl.jpg',
    link: 'https://aquamarine-queijadas-e81b88.netlify.app/'
  },
  {
    title: 'Sweet Bliss',
    category: 'Web Development',
    image: '/assets/images/sweetbliss.jpg',
    link: 'https://reliable-capybara-74b24c.netlify.app/'
  },
  {
    title: 'Retro Revival',
    category: 'Web Development',
    image: '/assets/images/retroRevival.jpg',
    link: 'https://effervescent-crostata-60abd9.netlify.app/'
  },
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    image: '/assets/images/bbqhaven.jpg',
    link: 'https://gleaming-gecko-13c60c.netlify.app/'
  },
  {
    title: "A Dos D'anne",
    category: 'Web Development',
    image: '/assets/images/adosdanne.jpg',
    link: 'https://adosdanne.art/'
  }
  
];

export default function Portfolio({ projectClickHandler }: PortfolioProps) {
  return (
    <section id="work" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-[#00274D] mb-4">Our Work</h2>
          <p className="text-gray-600">Showcasing our latest projects and success stories</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => projectClickHandler(project.link)}
            >
              <div className="card overflow-hidden">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00274D]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-[#00A9E0]">{project.category}</p>
                      <span className="inline-block mt-2 text-white/80 text-sm">Click to visit site →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
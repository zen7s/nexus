type ProjectCardProps = {
  image: string
  color: string
  category: string
  title: string
}

export const ProjectCard = ({ image, color, category, title }: ProjectCardProps) => {
  return (
    <div className="project-card min-w-[90vw] md:min-w-[600px] group cursor-pointer">
      <div className="relative h-[70vh] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60`} />

        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <span className="text-white mb-2">{category}</span>

          <h3 className="text-5xl font-bold text-white mb-4">{title}</h3>

          <div className="flex items-center gap-2 text-white/80">
            <span>Смотреть проект</span>
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  )
}

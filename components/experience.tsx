export default function Experience() {
  const experience = [
    {
      company: 'Vivansh Infotech',
      position: 'Software Engineer',
      date: 'Jun 2025 – Present',
      description:
        'As a Software Engineer at Vivansh Infotech, I focus on backend development while actively contributing to frontend projects. I thrive in dynamic environments, enjoy exploring new cultures, and am always eager to learn and grow professionally.'
    },
    {
      company: 'Yudiz Solution',
      position: 'Back-End Developer',
      date: 'Jan 2022 – May 2025',
      description:
        'As a Web Developer at Yudiz Solutions Ltd, a leading web and mobile app development company, I specialize in backend development and hands-on involvement in frontend tasks. Eager to explore new cultures and environments, I am consistently energetic and driven to acquire new skills.'
    },
    {
      company: 'Adore India',
      position: 'Back-End Developer',
      date: 'May 2021 – Aug 2021',
      description:
        'Adore India (Infovue) in Kolkata was my workplace for a four-month internship, during which I actively contributed to both the backend and frontend aspects. As the group leader, I led a team, managed client interactions, gathered requirements, and successfully developed four modules. This experience enhanced my skills in handling both technical and leadership responsibilities.'
    }
  ]

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Experience</h2>

        {experience.map((item, index) => (
          <div className='experience-item mb-8' key={index}>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {item.company}
            </h3>
            <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
              {item.position}
            </p>
            <p className='text-md text-gray-600 dark:text-gray-400'>
              {item.date}
            </p>
            <p className='text-base text-gray-800 dark:text-gray-200'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

import Intro from '@/components/intro'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import RecentPosts from '@/components/recent-post'
import RecentProjects from '@/components/recent-projects'

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <Skills />
        <Experience />
        <Education />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}

export default Home

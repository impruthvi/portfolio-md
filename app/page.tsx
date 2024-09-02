import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-post'
import RecentProjects from '@/components/recent-projects'

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}

export default Home

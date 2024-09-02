import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-post'

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
      </div>
    </section>
  )
}

export default Home

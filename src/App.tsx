import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Review from '@/components/Review'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='grow'>
        <Banner />
        <Review />
      </main>
    </div>
  )
}

export default App

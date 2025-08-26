import Header from './components/Header'
import Hero from './components/Hero'
import Goals from './components/Goals'
import Mission from './components/Mission'
import Stats from './components/Stats'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Mission />
          <Goals />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
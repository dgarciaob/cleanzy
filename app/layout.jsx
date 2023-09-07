import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Hero from '@components/Hero';

export const metadata = {
  title: "Cleanzy",
  description: "Brillando en cada rincón."
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <Nav />
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
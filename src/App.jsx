import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import SearchPage from "./pages/SearchPage"
import Navbar from "./components/Navbar"
import PageLoadFallback from "./components/PageLoadFallback"
const BookDetails = lazy(() => import('./pages/BookDetails'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto px-2 md:px-4">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route
              path="/book/:id"
              element={
                <Suspense fallback={<PageLoadFallback />}>
                  <BookDetails />
                </Suspense>
              }
            />
            <Route path="/favorites" element={
              <Suspense fallback={<PageLoadFallback />}>
                <FavoritesPage />
              </Suspense>
            } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

import Header from './components/Header'
import BookCard from './components/BookCard'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <Header />

      <div className="space-y-10 mt-12">
        <BookCard
          title="Nome do livro"
          price="R$ 40,00"
          description="Descrição"
          images={['/book1.jpg', '/book1b.jpg']}
        />

        <BookCard
          title="Nome do livro"
          price="R$ 60,00"
          description="Descrição"
          images={['/book2.jpg', '/book2b.jpg']}
        />
      </div>
    </div>
  )
}

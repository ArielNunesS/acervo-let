import Header from './components/Header'
import BookCard from './components/BookCard'

export default function App() {
  return (
    <div className="bg-background text-text px-4">
      <Header />

      <div className="space-y-10 mt-12">
        <BookCard
          title="Por Lugares Incríveis"
          author="Jennifer Niven"
          price="R$ 40,00"
          description="Violet e Finch se conhecem no alto da torre da escola, ambos pensando em tirar a própria vida. A partir daí, começam a explorar juntos lugares especiais e a criar uma conexão profunda. Enquanto Violet aprende a viver novamente após uma perda, Finch luta silenciosamente com sua saúde mental. Uma história emocionante sobre amor, dor e esperança."
          images={["https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/518791012_17847927903517907_497500307924901625_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HlJnfqfuf1IQ7kNvwE-LsBw&_nc_oc=AdkqwPM3aC_8lutNz8ZzmDnp4pM2c-7U69nItDHCt6uUvyY6vfZnBLHaGyfPIWpPmxUYLeyKECPt_2Sxb0V0KeAI&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQIPr1U6q805id6g1rshmQ4gZjG4pTMQOANne6SgPxlww&oe=68843048", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/519625971_17847927924517907_2758446068177399671_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xPepZOgWxocQ7kNvwGbdPFK&_nc_oc=AdnhFaNanCZiYSHC73yOoYzyjLSemgic4TIqt46WiUAik9LQj39OM6V7icHiRG7hkPhnYCRbYUfcdVHhjJnMvDbW&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQp7QgLOQaeckJ_ZFK-XIQHfc7fvxSCj_Hgx1g-kjjnvw&oe=68841E3C", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/521220932_17847927915517907_2404344970448746662_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4YY9utWTi7sQ7kNvwErO9OZ&_nc_oc=Adknp8nHeecK9DjfM1ABosTpKvqZD9ryXryrLibG-9oSiOzGj2PeMPhCigtzhLNh8rzJsZlN8LNDqGSNSvF03DH9&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfThD6ryseeXexpj5IXMBHp9sKYYt9WZXeVF3jqwtEjflw&oe=688444A0"]}
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

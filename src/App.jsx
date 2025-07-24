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
          price="R$ 20,00"
          description="Violet e Finch se conhecem no alto da torre da escola, ambos pensando em tirar a própria vida. A partir daí, começam a explorar juntos lugares especiais e a criar uma conexão profunda. Enquanto Violet aprende a viver novamente após uma perda, Finch luta silenciosamente com sua saúde mental. Uma história emocionante sobre amor, dor e esperança."
          images={["https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/518791012_17847927903517907_497500307924901625_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HlJnfqfuf1IQ7kNvwE-LsBw&_nc_oc=AdkqwPM3aC_8lutNz8ZzmDnp4pM2c-7U69nItDHCt6uUvyY6vfZnBLHaGyfPIWpPmxUYLeyKECPt_2Sxb0V0KeAI&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQIPr1U6q805id6g1rshmQ4gZjG4pTMQOANne6SgPxlww&oe=68843048", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/519625971_17847927924517907_2758446068177399671_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xPepZOgWxocQ7kNvwGbdPFK&_nc_oc=AdnhFaNanCZiYSHC73yOoYzyjLSemgic4TIqt46WiUAik9LQj39OM6V7icHiRG7hkPhnYCRbYUfcdVHhjJnMvDbW&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQp7QgLOQaeckJ_ZFK-XIQHfc7fvxSCj_Hgx1g-kjjnvw&oe=68841E3C", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/521220932_17847927915517907_2404344970448746662_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4YY9utWTi7sQ7kNvwErO9OZ&_nc_oc=Adknp8nHeecK9DjfM1ABosTpKvqZD9ryXryrLibG-9oSiOzGj2PeMPhCigtzhLNh8rzJsZlN8LNDqGSNSvF03DH9&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfThD6ryseeXexpj5IXMBHp9sKYYt9WZXeVF3jqwtEjflw&oe=688444A0"]}
        />

        <BookCard
          title="A Seca"
          author="Jane Harper"
          price="R$ 15,00"
          description="Em meio a uma seca devastadora na Austrália, o agente federal Aaron Falk retorna à sua cidade natal para o funeral de um amigo de infância, supostamente responsável por um assassinato seguido de suicídio. Ao investigar o caso, Falk acaba desenterrando segredos antigos ligados à sua própria juventude — e percebe que a verdade é mais complexa do que parece."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520065253_17848081737517907_8231745188939013281_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uWFlEd-zSPsQ7kNvwFqL7kS&_nc_oc=Adk4bE61gR1zGXMb8MORpR94qe5IQoJsJAcUbnevZfOyY_pkSDOhMAcrabt6YUHF4EU&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfSSsbNtv2B90g5ZM98YJctf49EUusmKia8EE343wE4WPQ&oe=68886BA0", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520819856_17848081806517907_7772701006650711240_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V017XEblxbsQ7kNvwEi1XsV&_nc_oc=AdmN_0fx8P8SpikzqOzm_j0fhs6TGIq_QMAzRFzk1HlY3kjWhqxVjt0NINPaMZWAKqI&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfQNyNjyq8GiHCHmZa4JaOJGxhHH3TeFqMCHg_jvQIaprw&oe=688852E3"]}
        />

        <BookCard
          title="Sonhos Exóticos"
          author="Stanley Krippner"
          price="R$ 10,00"
          description="Os autores exploram tipos especiais de sonhos, como os lúcidos, criativos, precognitivos, compartilhados, espirituais e fora do corpo. Com abordagem multidisciplinar, apresentam os significados comuns de cada tipo e oferecem métodos para que o leitor descubra o conteúdo e sentido dos próprios sonhos, tornando o livro ideal tanto para leigos quanto para estudantes e profissionais de psicologia ou hipnose"
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520196225_17848081677517907_1578266249473858752_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GmzJ2tEp0nQQ7kNvwGVInPx&_nc_oc=AdnHPFV_2W-hgsv8aplxvmpzCC3XBPrzTbQzOjsyeLalfitOKnAdsPJ7qkiImEyTNmY&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfRH_CIPxsHtR9aQK47B8KvAPMgUNH0rz0eiePaqmBstmg&oe=68884C2C", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520244450_17848081686517907_1931883847304859588_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3pLhpl6YYZoQ7kNvwFY94Da&_nc_oc=AdmDE6xxxNkLWpgniNnso3j5wsLElPAeq978-i286fe_6eAHlt8a3_5Lxpvagz73Jqg&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfQWa4B_dzw0pnmC8j1ZxL2f4w-oJAGfby4jIVEgIDQMSQ&oe=68884B3F"]}
        />

        <BookCard
          title="Todo Esse Tempo"
          author="Mikki Daughtry"
          price="R$ 10,00"
          description="Após um grave acidente de carro, Kyle perde a namorada Marley e precisa lidar com o luto. Em meio à dor, ele conhece Marley (outra garota com o mesmo nome), que também enfrenta perdas. Juntos, eles criam um vínculo profundo — mas há uma reviravolta que muda tudo. Uma história sobre amor, perda e recomeço."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520086356_17847927621517907_5073606621085080668_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0Bzx_xV_Gb0Q7kNvwFGo3hU&_nc_oc=Adn0ea1iynJSpk2RFbacs9mhl33r96yyqOlWhwWpFFyBjOQE9JiJnCvepkCVTbgM6GE&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfQDXmPJpd3Rg2EUAFALCWK3d21T-MJ568PMLhRItBoFxg&oe=6888851F", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/521353315_17847927639517907_1240486759886154744_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rMZtJ4CHZioQ7kNvwGQhSVf&_nc_oc=Adkoy7yr6iR-GFWFvIaQmefiTdxvYeCctUNz03JxyD5vVu_EeQOp0qsmQEv6ngMf5z0&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfRC3m4XIQiND1UAPnLWoI9LzWjY9PUsXU41OxHPScFIUg&oe=68887D75"]}
        />



      </div>
    </div>
  )
}

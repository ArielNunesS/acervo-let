import Header from './components/Header'
import BookCard from './components/BookCard'

export default function App() {
  return (
    <div className="bg-background text-text px-4">
      <Header />

      <div className="space-y-10 mt-12">
        <BookCard
          title="Todo Esse Tempo"
          author="Mikki Daughtry"
          price="R$ 25"
          description="Após um grave acidente de carro, Kyle perde a namorada Marley e precisa lidar com o luto. Em meio à dor, ele conhece Marley (outra garota com o mesmo nome), que também enfrenta perdas. Juntos, eles criam um vínculo profundo — mas há uma reviravolta que muda tudo. Uma história sobre amor, perda e recomeço."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520086356_17847927621517907_5073606621085080668_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0Bzx_xV_Gb0Q7kNvwFGo3hU&_nc_oc=Adn0ea1iynJSpk2RFbacs9mhl33r96yyqOlWhwWpFFyBjOQE9JiJnCvepkCVTbgM6GE&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfQDXmPJpd3Rg2EUAFALCWK3d21T-MJ568PMLhRItBoFxg&oe=6888851F", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/521353315_17847927639517907_1240486759886154744_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rMZtJ4CHZioQ7kNvwGQhSVf&_nc_oc=Adkoy7yr6iR-GFWFvIaQmefiTdxvYeCctUNz03JxyD5vVu_EeQOp0qsmQEv6ngMf5z0&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfRC3m4XIQiND1UAPnLWoI9LzWjY9PUsXU41OxHPScFIUg&oe=68887D75"]}
        />        

        <BookCard
          title="Coleção - Amor & Gelato"
          author="Jenna Evans Welch"
          price="R$ 90"
          description="Após a morte da mãe, Lina viaja para a Itália para conhecer o pai que nunca viu. Lá, ela descobre um diário da mãe que revela segredos do passado e a faz viver uma aventura pelas ruas de Florença. Entre descobertas, gelatos e um possível romance, Lina aprende sobre amor, família e como encontrar seu próprio caminho."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/518664737_17847927330517907_2779200377962236400_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WBuyUy2POLoQ7kNvwGMh52b&_nc_oc=AdkftdbSrpLTih_Hd-Q4rMkz9sZngfAMD73DgFL0tZmQp6zm16zz5lxNYBa1u220Akg&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfR9FshBOIc52k_-CkgwO5th1p-bxEr_5kZcLrSbMrPTPA&oe=68887497", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520536947_17847927312517907_3166645907747318686_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RR_qvOH5LUIQ7kNvwEc-WAK&_nc_oc=AdmvdPMtQ11mbogsf7Oa_amJCoTVNFvQIOv92Iv9zivqr2-GTmaCfcEqqGV9wYPvf1Q&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=Gaq_c9wqPuQSN_lsBnH1JA&oh=00_AfTzg2F2leAfL7VYcFC5ptpfGswl5GlYRfj6e9nHugpgxw&oe=68887825"]}
        />

        <BookCard
          title="Por Lugares Incríveis"
          author="Jennifer Niven"
          price="R$ 20"
          description="Violet e Finch se conhecem no alto da torre da escola, ambos pensando em tirar a própria vida. A partir daí, começam a explorar juntos lugares especiais e a criar uma conexão profunda. Enquanto Violet aprende a viver novamente após uma perda, Finch luta silenciosamente com sua saúde mental. Uma história emocionante sobre amor, dor e esperança."
          images={["https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/518791012_17847927903517907_497500307924901625_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HlJnfqfuf1IQ7kNvwE-LsBw&_nc_oc=AdkqwPM3aC_8lutNz8ZzmDnp4pM2c-7U69nItDHCt6uUvyY6vfZnBLHaGyfPIWpPmxUYLeyKECPt_2Sxb0V0KeAI&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQIPr1U6q805id6g1rshmQ4gZjG4pTMQOANne6SgPxlww&oe=68843048", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/519625971_17847927924517907_2758446068177399671_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xPepZOgWxocQ7kNvwGbdPFK&_nc_oc=AdnhFaNanCZiYSHC73yOoYzyjLSemgic4TIqt46WiUAik9LQj39OM6V7icHiRG7hkPhnYCRbYUfcdVHhjJnMvDbW&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfQp7QgLOQaeckJ_ZFK-XIQHfc7fvxSCj_Hgx1g-kjjnvw&oe=68841E3C", "https://scontent.ffln4-1.fna.fbcdn.net/v/t51.82787-15/521220932_17847927915517907_2404344970448746662_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4YY9utWTi7sQ7kNvwErO9OZ&_nc_oc=Adknp8nHeecK9DjfM1ABosTpKvqZD9ryXryrLibG-9oSiOzGj2PeMPhCigtzhLNh8rzJsZlN8LNDqGSNSvF03DH9&_nc_zt=23&_nc_ht=scontent.ffln4-1.fna&_nc_gid=lcXlSrmNr6oKlAQRSayv4A&oh=00_AfThD6ryseeXexpj5IXMBHp9sKYYt9WZXeVF3jqwtEjflw&oe=688444A0"]}
        />

        <BookCard
          title="Amigos, Amores e Aquela Coisa Terrível"
          author="Matthew Perry"
          price="R$ 20"
          description="Autobiografia do ator de Friends, onde Matthew Perry narra com honestidade sua luta contra o vício, a fama e a solidão. Um relato emocionante sobre vulnerabilidade, amizade, recaídas e a busca por sentido mesmo quando se tem tudo - menos paz."
          images={["https://i.postimg.cc/MKyG79zd/Screenshot-33.png"]}
        />

        <BookCard
          title="As Mil Partes do Meu Coração"
          author="Colleen Hoover"
          price="R$ 20"
          description="Beyah tem uma vida marcada por dor e abandono. Após a morte da mãe, ela é forçada a passar o verão com o pai que mal conhece. Lá, conhece Samson, um garoto com seus próprios segredos. Juntos, vivem um romance intenso e vulnerável. Uma história sobre recomeços, perdão, perda e encontrar amor mesmo quando tudo parece desmoronar."
          images={["https://i.postimg.cc/LXnt5cKy/Screenshot-34.png"]}
        />

        <BookCard
          title="A Seca"
          author="Jane Harper"
          price="R$ 15"
          description="Em meio a uma seca devastadora na Austrália, o agente federal Aaron Falk retorna à sua cidade natal para o funeral de um amigo de infância, supostamente responsável por um assassinato seguido de suicídio. Ao investigar o caso, Falk acaba desenterrando segredos antigos ligados à sua própria juventude — e percebe que a verdade é mais complexa do que parece."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520065253_17848081737517907_8231745188939013281_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uWFlEd-zSPsQ7kNvwFqL7kS&_nc_oc=Adk4bE61gR1zGXMb8MORpR94qe5IQoJsJAcUbnevZfOyY_pkSDOhMAcrabt6YUHF4EU&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfSSsbNtv2B90g5ZM98YJctf49EUusmKia8EE343wE4WPQ&oe=68886BA0", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520819856_17848081806517907_7772701006650711240_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V017XEblxbsQ7kNvwEi1XsV&_nc_oc=AdmN_0fx8P8SpikzqOzm_j0fhs6TGIq_QMAzRFzk1HlY3kjWhqxVjt0NINPaMZWAKqI&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfQNyNjyq8GiHCHmZa4JaOJGxhHH3TeFqMCHg_jvQIaprw&oe=688852E3"]}
        />

        <BookCard
          title="Sonhos Exóticos"
          author="Stanley Krippner"
          price="R$ 10"
          description="Os autores exploram tipos especiais de sonhos, como os lúcidos, criativos, precognitivos, compartilhados, espirituais e fora do corpo. Com abordagem multidisciplinar, apresentam os significados comuns de cada tipo e oferecem métodos para que o leitor descubra o conteúdo e sentido dos próprios sonhos, tornando o livro ideal tanto para leigos quanto para estudantes e profissionais de psicologia ou hipnose"
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520196225_17848081677517907_1578266249473858752_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GmzJ2tEp0nQQ7kNvwGVInPx&_nc_oc=AdnHPFV_2W-hgsv8aplxvmpzCC3XBPrzTbQzOjsyeLalfitOKnAdsPJ7qkiImEyTNmY&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfRH_CIPxsHtR9aQK47B8KvAPMgUNH0rz0eiePaqmBstmg&oe=68884C2C", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520244450_17848081686517907_1931883847304859588_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3pLhpl6YYZoQ7kNvwFY94Da&_nc_oc=AdmDE6xxxNkLWpgniNnso3j5wsLElPAeq978-i286fe_6eAHlt8a3_5Lxpvagz73Jqg&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=PM-MVKYicKa4Yi2cZa_vOg&oh=00_AfQWa4B_dzw0pnmC8j1ZxL2f4w-oJAGfby4jIVEgIDQMSQ&oe=68884B3F"]}
        />

        <BookCard
          title="As Desventuras da Graça"
          author="Geraldo Holanda Cavalcanti"
          price="R$ 15"
          description="Uma narrativa autobiográfica sobre os primeiros 20 anos do autor, marcada por dúvidas religiosas, amadurecimento e reflexões existenciais no pós-guerra."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520203127_17848080435517907_800887218830867984_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FytFk7hTiicQ7kNvwGO9541&_nc_oc=AdnjczKIt-DE4SsQa1D9R4FSXWiGYbOQK2AdFf39a0hLQXsvteA-NDeJx2j8SzianLc&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=IhGAljyOLiAdii3IfPkWPw&oh=00_AfSf48d94gPpiYfKp3IOzitgSNCNVBWZwQR2c8OEedXMCw&oe=688846C6", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/521507913_17848080555517907_1901019845983119048_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WN9GrE8ASnMQ7kNvwFb7-1X&_nc_oc=AdkwusAKOLp79JJI3AoYB60A3ZHEPrtgHhD_wdzsJM8iEgYiZXhXiAhS3k3Erjb4EcM&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=IhGAljyOLiAdii3IfPkWPw&oh=00_AfTxeey8dIIp8ulaYqBhqj2ictj8BMTtYQylSmRzugn8og&oe=68886655"]}
        />

        <BookCard
          title="O Amor é Para os Fortes"
          author="Marcelo Cezar"
          price="R$ 15"
          description="Romance espiritualista que mostra como o verdadeiro amor exige coragem, entrega e superação de dores do passado. Com uma narrativa envolvente e lições de vida, o livro transmite valores como perdão, fé e transformação interior."
          images={["https://i.postimg.cc/vH94PQt7/Screenshot-32.png"]}
        />
        
        <BookCard
          title="A Garota do Lago"
          author="Charlie Donlea"
          price="R$ 10"
          description="Quando a jovem Becca Eckersley é encontrada morta perto de um lago, a repórter Kelsey Castle viaja até a pequena cidade onde o crime aconteceu. Enquanto investiga o caso, ela descobre que o passado da vítima esconde muitos segredos — e que a verdade pode ser mais sombria do que parece."
          images={["https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/520743377_17848081164517907_3075832452249902705_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jTuvOu_h7ZoQ7kNvwEGg80s&_nc_oc=Adnrwur22TGdqBsVP7MF4vskk1RabPUJtL-xtFceU-ErDqox8Mwzl9SjtmTasPdnG5g&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=yUIaMaaYFXTjZOn60G8qIg&oh=00_AfTa9srHsgcvlqoAfjiGM9xfvNjH0PRrhGhV1cW73PTTwg&oe=68886FF3", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/522117344_17848081179517907_6892931904387339662_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t5k89xhGGAgQ7kNvwHRBAX_&_nc_oc=AdmMspUtTWoq-6S8Xa9ABFwihiOpJR9YivEBKVs89WhqV29KcgQW0Hn_Cfd7r2GNDOU&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=yUIaMaaYFXTjZOn60G8qIg&oh=00_AfQrL8qsB2Z7HECqVv7f0s4om8AcFkgoOP3ZVjDJcbkp7w&oe=68886827", "https://scontent.fnvt7-1.fna.fbcdn.net/v/t51.82787-15/521284969_17848081197517907_9062072572322256011_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ehV7vpDxb0IQ7kNvwErHr9g&_nc_oc=AdniUJ-CUcWgSRfMjpqreCJraQ14pqdNWm_598daQhabybjUmhIFgJd7SV5nc7j0Too&_nc_zt=23&_nc_ht=scontent.fnvt7-1.fna&_nc_gid=yUIaMaaYFXTjZOn60G8qIg&oh=00_AfQsvFJ3o-mmRTHRkGshbM8e7YbMiXGCTJKgqlx2dczQ8Q&oe=688878F3"]}
        />

      </div>
    </div>
  )
}

        // <BookCard
        //   title="Todo Esse Tempo"
        //   author="Mikki Daughtry"
        //   price="R$ 25"
        //   description=""
        //   images={[""]}
        // />
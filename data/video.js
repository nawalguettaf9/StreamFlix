const [movies, setMovies] = useState([
    {
      uri: "https://flxt.tmsimg.com/assets/p20410134_b_v13_aa.jpg",
      sources : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title:"Lucifer",
      age:"16+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",


    },
    {
      uri: "https://4.bp.blogspot.com/-EW6QIVVap8A/WgRbdktVvYI/AAAAAAAMh7Y/31qjdB0jThwCuy8W3LhHie_EEYvKj6JQQCLcBGAs/s1600/BrooklynNineNineSeason4.jpg",
      sources : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title:"BrooklynNineNine",
      age:"13+",
      yearOfRelease:"2018",
      description:"Brooklyn Nine-Nine is an American police procedural comedy television series that aired on Fox, and later on NBC, from September 17, 2013 to September 16, 2021, for eight seasons and 153 episodes. Created by Dan Goor and Michael Schur,.",

    },
    {
      uri: "https://media.pathe.nl/nocropthumb/620x955/gfx_content//films/poster/davincicode1.jpg",
      sources:"Da Vinci Code (The Da Vinci Code) est un roman écrit par l'Américain Dan Brown, publié en 2003, composé de 105 chapitres et composant le deuxième volet de la pentalogie du personnage de fiction Robert Langdon. Le titre de la première édition francophone était Le Code de Vinci. Il est adapté au cinéma par Ron Howard, en 2006.",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
      source:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4. ",
      title:"Money Heist",
      age:"18+",
      yearOfRelease:"2020",
      description:"Money Heist (Spanish: La casa de papel, [la kasa ðe papel], lit. The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). .",

    },
    {
      uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F06%2Fstrangerthings_s3-2000.jpg&q=85",
      source:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4. ",
      title:"stranger things",
      age:"18+",
      yearOfRelease:"2022",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://wallpapercave.com/wp/wp4606146.jpg",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://images.justwatch.com/poster/202469372/s718",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://www.asud.org/wp-content/uploads/2014/01/Breaking-bad.jpg",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://1.bp.blogspot.com/-toiPU56Z3HM/WAbrqM_EV8I/AAAAAAAAPxE/eNqOyv8s-h4_0zQtLi16bXY5Jg1a8jOQwCLcB/s1600/first-season-prison-break-poster.jpg",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    {
      uri: "https://image.tmdb.org/t/p/original/f4YhTnCQQlGDohhq9AEQDA4B54C.jpg",
      title:"Lucifer",
      age:"13+",
      yearOfRelease:"2023",
      description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",

    },
    // Add more objects with URIs as needed
  ]);
  const [topSeries, setTopSeries] = useState([
    {
      uri: "https://fr.web.img4.acsta.net/pictures/19/06/05/10/36/1232942.jpg",
    },
    {
      uri: "https://p.ssl.qhimg.com/t01981553695839afda.jpg",
    },
    {
      uri: "https://fr.web.img2.acsta.net/pictures/15/12/11/15/53/594537.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_6758020191118134354.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_6326020210204121527.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_4135020191118150830.jpg",
    },
    {
      uri: "https://img2.bdbphotos.com/images/orig/5/6/561i2dw91yowi1dw.jpg?skj2io4l",
    },
    {
      uri: "https://fr.web.img4.acsta.net/pictures/20/07/08/12/33/5415700.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_3228020191118162425.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_1441020200715150427.jpg",
    },
    // Add more objects with URIs as needed
  ]);
  const [drama, setDrama] = useState([
    {
      uri: "https://www.newdvdreleasedates.com/images/movies/the-blacklist-2013.jpg",
    },
    {
      uri: "https://images-na.ssl-images-amazon.com/images/I/81FIbmh-EXL.RI.jpg",
    },
    {
      uri: "https://imgix.ranker.com/user_node_img/50084/1001678895/original/peaky-blinders-season-2-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
    },
    {
      uri: "https://www.notrecinema.com/images/cache/breaking-bad-poster_401790_1415.jpg#1394663",
    },
    {
      uri: "https://de.web.img3.acsta.net/pictures/19/07/18/17/12/0463568.jpg",
    },
    {
      uri: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUZ9JmKdKGw3AvTpnteL32MWOGWJcSA2pwZxgB/jpg",
    },
    {
      uri: "https://image.tmdb.org/t/p/original/kqJlfQyEHVWhpsJvaaS48r3hAix.jpg",
    },
    {
      uri: "https://4.bp.blogspot.com/-9igCl5YM5MA/U0vagzxz00I/AAAAAAAACRw/ad0cSYdmIP4/s1600/game-of-thrones+Poster.jpg",
    },
    {
      uri: "https://filmdaily.co/wp-content/uploads/2019/05/lucifer-second-season.jpg",
    },
    {
      uri: "https://1.bp.blogspot.com/-8nkfkrJSyFw/X2jQZYzGTeI/AAAAAAAAAO0/zenSvtpJuBMXEEmV5skSJcP_wkvuVPvaQCLcBGAsYHQ/s320/b3364942e4d89cc17c656abd329cc1d3.jpg",
    },
    // Add more objects with URIs as needed
  ]);
  const [nouveau, setNouveau] = useState([
    {
      uri: "https://www.tvqc.com/wp-content/uploads/2018/12/2359.jpg",
    },
    {
      uri: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3052/30529243_so.jpg",
    },
    {
      uri: "https://i.pinimg.com/originals/42/f2/77/42f277b093bae79d8f8242f672ce3462.jpg",
    },
    {
      uri: "https://i.ytimg.com/vi/ytamLlDb2QE/maxresdefault.jpg",
    },
    {
      uri: "https://canvas-bridge.tubitv.com/WOd4kOQYgWuZRUa1qqywnyLAC68=/47x46:872x1225/400x574/smart/img.adrise.tv/af1792b4-c3c2-4a19-9efe-f808f500160a.jpg",
    },
    {
      uri: "https://image.tmdb.org/t/p/original/7EC8dxR1HHz3uuVDbtfxfcoMwyG.jpg",
    },
    {
      uri: "https://image.tmdb.org/t/p/original/kqJlfQyEHVWhpsJvaaS48r3hAix.jpg",
    },
    {
      uri: "https://4.bp.blogspot.com/-9igCl5YM5MA/U0vagzxz00I/AAAAAAAACRw/ad0cSYdmIP4/s1600/game-of-thrones+Poster.jpg",
    },
    {
      uri: "https://filmdaily.co/wp-content/uploads/2019/05/lucifer-second-season.jpg",
    },
    {
      uri: "https://1.bp.blogspot.com/-8nkfkrJSyFw/X2jQZYzGTeI/AAAAAAAAAO0/zenSvtpJuBMXEEmV5skSJcP_wkvuVPvaQCLcBGAsYHQ/s320/b3364942e4d89cc17c656abd329cc1d3.jpg",
    },
    // Add more objects with URIs as needed
  ]);

  // No need for useEffect or fetch since we're not using an API
  const [cartoon, setCartoon] = useState([
    {
      uri: "https://fr.academic.ru/pictures/frwiki/66/Big_buck_bunny_poster_big.jpg",
    },
    {
      uri: "https://www.cinetrafic.fr/images/affiches/original/aff_1944020210120183339.jpg",
    },
    {
      uri: "https://archzine.fr/wp-content/uploads/2016/02/Moi-moche-m%C3%A9chant-dernier-pixar-les-meilleurs-dessins-anim%C3%A9s.jpg",
    },
    {
      uri: "http://www.lesgribouillagesdenico.com/wp-content/uploads/2020/07/u_dessin_anime_bande_annonce_1.jpg",
    },
    {
      uri: "https://www.mer-ocean.com/wp-content/uploads/2021/06/1200x680_luca-jpg.jpeg",
    },
    {
      uri: "https://www.sortiraparis.com/images/80/77381/668520-pil-la-bande-annonce.jpg",
    },
    {
      uri: "https://disney-planet.fr/wp-content/uploads/2010/04/ratatouille-affiche-francaise-03-1024x1536.jpg",
    },
    {
      uri: "https://i.ytimg.com/vi/YVvlVNbi7Hg/maxresdefault.jpg",
    },
    {
      uri: "https://i.ytimg.com/vi/oywz6JWu5fA/maxresdefault.jpg",
    },
    {
      uri: "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/cinema/dossiers/dessin-anime-enfant/53838996-1-fre-FR/15-dessins-animes-cultes-a-re-voir-avec-ses-enfants.jpg",
    },
    // Add more objects with URIs as needed
  ]);
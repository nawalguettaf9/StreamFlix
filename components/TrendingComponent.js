import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const TrendingComponent = () => {
  const navigation = useNavigation();

  const renderNewLabelMovies = (index) => {
    if (index === 0 || index === 2) {
      // On vérifie si c'est le premier élément de la liste
      return <Text style={styles.newAdditionLabel}>Ajout Récent</Text>;
    }
    return null;
  };
  const renderNewLabelTopSeries = (index) => {
    if (index === 1 || index === 8) {
      // Pour les films 2 et 4 dans la liste `topSeries`
      return <Text style={styles.newAdditionLabel}>Ajout Récent</Text>;
    }
    return null;
  };

  const TopTenBadge = ({ index }) => {
    // Affiche le badge pour le premier et le quatrième film
    if (index === 0 || index === 3) {
      return (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Top 10</Text>
        </View>
      );
    }
    return null;
  };
  const TopTen = ({ index }) => {
    // Affiche le badge pour le premier et le quatrième film
    if (index === 2) {
      return (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Top 10</Text>
        </View>
      );
    }
    return null;
  };
  const handlePressMovie = (id) => {
    navigation.navigate("VideoPlayer", { id });
  };
  
  


  // // Replace the API data with a static array of movie image URIs
  // const [movies, setMovies] = useState([
  //   {
  //     uri: "https://flxt.tmsimg.com/assets/p20410134_b_v13_aa.jpg",
  //     description:"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
  //     sources:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //     subtitle:"Lucifer",
  //     title:"Lucifer",
  //     age:"13+"
  //   },
  //   {
  //     uri: "https://4.bp.blogspot.com/-EW6QIVVap8A/WgRbdktVvYI/AAAAAAAMh7Y/31qjdB0jThwCuy8W3LhHie_EEYvKj6JQQCLcBGAs/s1600/BrooklynNineNineSeason4.jpg",
  //   },
  //   {
  //     uri: "https://media.pathe.nl/nocropthumb/620x955/gfx_content//films/poster/davincicode1.jpg",
  //   },
  //   {
  //     uri: "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  //   },
  //   {
  //     uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F06%2Fstrangerthings_s3-2000.jpg&q=85",
  //   },
  //   {
  //     uri: "https://wallpapercave.com/wp/wp4606146.jpg",
  //   },
  //   {
  //     uri: "https://images.justwatch.com/poster/202469372/s718",
  //   },
  //   {
  //     uri: "https://www.asud.org/wp-content/uploads/2014/01/Breaking-bad.jpg",
  //   },
  //   {
  //     uri: "https://1.bp.blogspot.com/-toiPU56Z3HM/WAbrqM_EV8I/AAAAAAAAPxE/eNqOyv8s-h4_0zQtLi16bXY5Jg1a8jOQwCLcB/s1600/first-season-prison-break-poster.jpg",
  //   },
  //   {
  //     uri: "https://image.tmdb.org/t/p/original/f4YhTnCQQlGDohhq9AEQDA4B54C.jpg",
  //   },
  //   // Add more objects with URIs as needed
  // ]);
  // const [topSeries, setTopSeries] = useState([
  //   {
  //     uri: "https://fr.web.img4.acsta.net/pictures/19/06/05/10/36/1232942.jpg",
  //   },
  //   {
  //     uri: "https://p.ssl.qhimg.com/t01981553695839afda.jpg",
  //   },
  //   {
  //     uri: "https://fr.web.img2.acsta.net/pictures/15/12/11/15/53/594537.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_6758020191118134354.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_6326020210204121527.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_4135020191118150830.jpg",
  //   },
  //   {
  //     uri: "https://img2.bdbphotos.com/images/orig/5/6/561i2dw91yowi1dw.jpg?skj2io4l",
  //   },
  //   {
  //     uri: "https://fr.web.img4.acsta.net/pictures/20/07/08/12/33/5415700.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_3228020191118162425.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_1441020200715150427.jpg",
  //   },
  //   // Add more objects with URIs as needed
  // ]);
  // const [drama, setDrama] = useState([
  //   {
  //     uri: "https://www.newdvdreleasedates.com/images/movies/the-blacklist-2013.jpg",
  //   },
  //   {
  //     uri: "https://images-na.ssl-images-amazon.com/images/I/81FIbmh-EXL.RI.jpg",
  //   },
  //   {
  //     uri: "https://imgix.ranker.com/user_node_img/50084/1001678895/original/peaky-blinders-season-2-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650",
  //   },
  //   {
  //     uri: "https://www.notrecinema.com/images/cache/breaking-bad-poster_401790_1415.jpg#1394663",
  //   },
  //   {
  //     uri: "https://de.web.img3.acsta.net/pictures/19/07/18/17/12/0463568.jpg",
  //   },
  //   {
  //     uri: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUZ9JmKdKGw3AvTpnteL32MWOGWJcSA2pwZxgB/jpg",
  //   },
  //   {
  //     uri: "https://image.tmdb.org/t/p/original/kqJlfQyEHVWhpsJvaaS48r3hAix.jpg",
  //   },
  //   {
  //     uri: "https://4.bp.blogspot.com/-9igCl5YM5MA/U0vagzxz00I/AAAAAAAACRw/ad0cSYdmIP4/s1600/game-of-thrones+Poster.jpg",
  //   },
  //   {
  //     uri: "https://filmdaily.co/wp-content/uploads/2019/05/lucifer-second-season.jpg",
  //   },
  //   {
  //     uri: "https://1.bp.blogspot.com/-8nkfkrJSyFw/X2jQZYzGTeI/AAAAAAAAAO0/zenSvtpJuBMXEEmV5skSJcP_wkvuVPvaQCLcBGAsYHQ/s320/b3364942e4d89cc17c656abd329cc1d3.jpg",
  //   },
  //   // Add more objects with URIs as needed
  // ]);
  // const [nouveau, setNouveau] = useState([
  //   {
  //     uri: "https://www.tvqc.com/wp-content/uploads/2018/12/2359.jpg",
  //   },
  //   {
  //     uri: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3052/30529243_so.jpg",
  //   },
  //   {
  //     uri: "https://i.pinimg.com/originals/42/f2/77/42f277b093bae79d8f8242f672ce3462.jpg",
  //   },
  //   {
  //     uri: "https://i.ytimg.com/vi/ytamLlDb2QE/maxresdefault.jpg",
  //   },
  //   {
  //     uri: "https://canvas-bridge.tubitv.com/WOd4kOQYgWuZRUa1qqywnyLAC68=/47x46:872x1225/400x574/smart/img.adrise.tv/af1792b4-c3c2-4a19-9efe-f808f500160a.jpg",
  //   },
  //   {
  //     uri: "https://image.tmdb.org/t/p/original/7EC8dxR1HHz3uuVDbtfxfcoMwyG.jpg",
  //   },
  //   {
  //     uri: "https://image.tmdb.org/t/p/original/kqJlfQyEHVWhpsJvaaS48r3hAix.jpg",
  //   },
  //   {
  //     uri: "https://4.bp.blogspot.com/-9igCl5YM5MA/U0vagzxz00I/AAAAAAAACRw/ad0cSYdmIP4/s1600/game-of-thrones+Poster.jpg",
  //   },
  //   {
  //     uri: "https://filmdaily.co/wp-content/uploads/2019/05/lucifer-second-season.jpg",
  //   },
  //   {
  //     uri: "https://1.bp.blogspot.com/-8nkfkrJSyFw/X2jQZYzGTeI/AAAAAAAAAO0/zenSvtpJuBMXEEmV5skSJcP_wkvuVPvaQCLcBGAsYHQ/s320/b3364942e4d89cc17c656abd329cc1d3.jpg",
  //   },
  //   // Add more objects with URIs as needed
  // ]);

  // // No need for useEffect or fetch since we're not using an API
  // const [cartoon, setCartoon] = useState([
  //   {
  //     uri: "https://fr.academic.ru/pictures/frwiki/66/Big_buck_bunny_poster_big.jpg",
  //   },
  //   {
  //     uri: "https://www.cinetrafic.fr/images/affiches/original/aff_1944020210120183339.jpg",
  //   },
  //   {
  //     uri: "https://archzine.fr/wp-content/uploads/2016/02/Moi-moche-m%C3%A9chant-dernier-pixar-les-meilleurs-dessins-anim%C3%A9s.jpg",
  //   },
  //   {
  //     uri: "http://www.lesgribouillagesdenico.com/wp-content/uploads/2020/07/u_dessin_anime_bande_annonce_1.jpg",
  //   },
  //   {
  //     uri: "https://www.mer-ocean.com/wp-content/uploads/2021/06/1200x680_luca-jpg.jpeg",
  //   },
  //   {
  //     uri: "https://www.sortiraparis.com/images/80/77381/668520-pil-la-bande-annonce.jpg",
  //   },
  //   {
  //     uri: "https://disney-planet.fr/wp-content/uploads/2010/04/ratatouille-affiche-francaise-03-1024x1536.jpg",
  //   },
  //   {
  //     uri: "https://i.ytimg.com/vi/YVvlVNbi7Hg/maxresdefault.jpg",
  //   },
  //   {
  //     uri: "https://i.ytimg.com/vi/oywz6JWu5fA/maxresdefault.jpg",
  //   },
  //   {
  //     uri: "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/cinema/dossiers/dessin-anime-enfant/53838996-1-fre-FR/15-dessins-animes-cultes-a-re-voir-avec-ses-enfants.jpg",
  //   },
  //   // Add more objects with URIs as needed
  // ]);
// Les états pour stocker les films par genre
const [comedyMovies, setComedyMovies] = useState([]);
const [dramaMovies, setDramaMovies] = useState([]);
const [horrorMovies, setHorrorMovies] = useState([]);
const [cartoonMovies, setCartoonMovies] = useState([]);
const [topMovies, setTopMovies] = useState([]);

// Fonction pour récupérer les films par genre
const fetchMoviesByGenre = async (genreId, setStateCallback) => {
  try {
    const response = await fetch(`http://192.168.43.162:8084/api/admin/AllFilmGenre/${genreId}`);
    const json = await response.json();

    // Extrait les données des films et les met dans l'état approprié
    const moviesData = json.map(item => ({
      id: item.id_film.id_film,
      uri: item.id_film.uri,
      age: item.id_film.age,
      source: item.id_film.source,
      title: item.id_film.title,
      year_of_release: item.id_film.year_of_release,
      description: item.id_film.description
    }));

    setStateCallback(moviesData);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  // Appel de l'API pour chaque genre spécifique
  fetchMoviesByGenre(2, setComedyMovies); // Comedy
  fetchMoviesByGenre(3, setDramaMovies);   // Drama
  fetchMoviesByGenre(4, setHorrorMovies);  // Horror
  fetchMoviesByGenre(13, setCartoonMovies); // Cartoon
  fetchMoviesByGenre(14, setTopMovies);    // Top
}, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.trendingTitle}>Comedy series</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {comedyMovies.map((movie, index) => (
    <Pressable
      key={movie.id}
      style={styles.movieContainer}
      onPress={() => handlePressMovie( movie.id)}
    >
      <Text style={styles.movieNumber}>{index + 1}</Text>
      <Image style={styles.movieImage} source={{ uri: movie.uri }} />
      <TopTenBadge index={index} />
      {renderNewLabelMovies(index)}
    </Pressable>
  ))}
</ScrollView>

      <Text style={styles.trendingTitle}>Top 10 series today</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {topMovies.map((movie, id) => (
          <Pressable
            key={id}
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => handlePressMovie( movie.id)} // Ajout de la propriété onPress
          >
            <Text
              style={{
                fontSize: 85,
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                zIndex: 5,
                top: 50,
                right: 90,
                marginTop: 20,
                opacity: 0.79, // Adjust the value as needed for desired transparency
              }}
            >
              {id + 1}
            </Text>

            <Image
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
              }}
              source={{
                uri: movie.uri, // Use the URI from the movie object
              }}
            />
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.trendingTitle}>Drama series </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dramaMovies.map((item, index) => (
          <Pressable
            key={index}
            style={styles.movieContainer}
            onPress={() => handlePressMovie(item.id)}
          >
            <Text style={styles.movieNumber}>{index + 1}</Text>
            <Image style={styles.movieImage} source={{ uri: item.uri }} />
            {renderNewLabelTopSeries(index)}
          </Pressable>
        ))}
      </ScrollView>
      <Text style={styles.trendingTitle}>serie d'horreur </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {horrorMovies.map((item, index) => (
          <Pressable
            key={index}
            style={styles.movieContainer}
            onPress={() => handlePressMovie(item.id)}
          >
            <Text style={styles.movieNumber}>{index + 1}</Text>
            <Image style={styles.movieImage} source={{ uri: item.uri }} />
            <TopTen index={index} />
          </Pressable>
        ))}
      </ScrollView>
      <Text style={styles.trendingTitle}> Cartoon </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cartoonMovies.map((item, index) => (
          <Pressable
            key={index}
            style={styles.movieContainer}
            onPress={() => handlePressMovie( item.id)}
          >
            <Text style={styles.movieNumber}>{index + 1}</Text>
            <Image style={styles.movieImage} source={{ uri: item.uri }} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({
  trendingTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
    marginLeft: 10, // Ajustez en fonction de votre mise en page
  },
  movieContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10, // Espace entre les Pressable
  },
  movieNumber: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 50,
    right: 90,
    opacity: 0.79,
  },
  movieImage: {
    width: 105,
    margin: 10,
    height: 152,
    borderRadius: 6,
    resizeMode: "cover",
  },
  newAdditionLabel: {
    position: "absolute",
    bottom: 0, // Ajustez selon la position désirée
    right: 27, // Ajustez selon la position désirée
    backgroundColor: "red",
    color: "white",
    fontSize: 12, // Ajustez selon la taille désirée
    fontWeight: "bold",
    padding: 5, // Ajustez l'espacement intérieur
  },
  badgeContainer: {
    position: "absolute",
    top: 10, // Ajustez cette valeur pour positionner le badge verticalement
    right: 3, // Ajustez cette valeur pour positionner le badge horizontalement
    backgroundColor: "#E50914", // La couleur rouge de l'arrière-plan du badge
    paddingVertical: 2, // Ajustez l'espacement vertical interne
    paddingHorizontal: 4, // Ajustez l'espacement horizontal interne
    borderRadius: 2, // Bord arrondi subtil
    zIndex: 10, // S'assurer que le badge est au-dessus des autres éléments
    shadowColor: "black", // Couleur de l'ombre
    shadowOffset: { width: 0, height: 1 }, // Décalage de l'ombre
    shadowOpacity: 0.2, // Opacité de l'ombre
    shadowRadius: 1, // Rayon de l'ombre
    elevation: 2, // Elevation pour Android pour créer l'effet d'ombre
  },
  badgeText: {
    color: "white", // Couleur du texte
    fontSize: 14, // Taille du texte
    fontWeight: "bold", // Gras pour le texte
    letterSpacing: 0.5, // Espace entre les caractères
  },
});

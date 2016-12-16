const { callForMovies } = require('../index')
const { baseUrl, endpoint, apiKey, route } = require('../constants/api')

describe('Download movie', () => {
  describe('callForMovies', () => {
    beforeEach(() => {
      const callForMoviesFakeResponse = {'page': 1, 'results': [{'poster_path': '/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg', 'adult': false, 'overview': 'Underworld: Blood Wars follows Vampire death dealer, Selene, as she fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.', 'release_date': '2016-12-01', 'genre_ids': [28, 27], 'id': 346672, 'original_title': 'Underworld: Blood Wars', 'original_language': 'en', 'title': 'Underworld: Blood Wars', 'backdrop_path': '/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg', 'popularity': 46.93884, 'vote_count': 239, 'video': false, 'vote_average': 4.1}, {'poster_path': '/gri0DDxsERr6B2sOR1fGLxLpSLx.jpg', 'adult': false, 'overview': 'In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.', 'release_date': '2016-11-16', 'genre_ids': [10751, 12, 14], 'id': 259316, 'original_title': 'Fantastic Beasts and Where to Find Them', 'original_language': 'en', 'title': 'Fantastic Beasts and Where to Find Them', 'backdrop_path': '/6I2tPx6KIiBB4TWFiWwNUzrbxUn.jpg', 'popularity': 30.585175, 'vote_count': 1145, 'video': false, 'vote_average': 7}, {'poster_path': '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg', 'adult': false, 'overview': 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.', 'release_date': '2016-08-02', 'genre_ids': [28, 80, 14], 'id': 297761, 'original_title': 'Suicide Squad', 'original_language': 'en', 'title': 'Suicide Squad', 'backdrop_path': '/34dxtTxMHGKw1njHpTjDqR8UBHd.jpg', 'popularity': 30.553557, 'vote_count': 3075, 'video': false, 'vote_average': 5.9}, {'poster_path': '/xGgg2UI20qtEh7mura3RRwP8d3I.jpg', 'adult': false, 'overview': 'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.', 'release_date': '2016-11-10', 'genre_ids': [18, 878], 'id': 329865, 'original_title': 'Arrival', 'original_language': 'en', 'title': 'Arrival', 'backdrop_path': '/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg', 'popularity': 24.499831, 'vote_count': 650, 'video': false, 'vote_average': 6.6}, {'poster_path': '/vR9YvUJCead23MOWwVzv9776eb1.jpg', 'adult': false, 'overview': 'A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.', 'release_date': '2016-09-28', 'genre_ids': [14], 'id': 283366, 'original_title': "Miss Peregrine's Home for Peculiar Children", 'original_language': 'en', 'title': "Miss Peregrine's Home for Peculiar Children", 'backdrop_path': '/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg', 'popularity': 22.104055, 'vote_count': 615, 'video': false, 'vote_average': 6.1}, {'poster_path': '/h6O5OE3ueRVdCc7V7cwTiQocI7D.jpg', 'adult': false, 'overview': "On 15 January 2009, the world witnessed the 'Miracle on the Hudson' when Captain 'Sully' Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and career.", 'release_date': '2016-08-16', 'genre_ids': [18, 36], 'id': 363676, 'original_title': 'Sully', 'original_language': 'en', 'title': 'Sully', 'backdrop_path': '/vC9H1ZVdXi1KjH4aPfGB54mvDNh.jpg', 'popularity': 20.350956, 'vote_count': 474, 'video': false, 'vote_average': 6.6}, {'poster_path': '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg', 'adult': false, 'overview': "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.", 'release_date': '2015-05-13', 'genre_ids': [28, 12, 878, 53], 'id': 76341, 'original_title': 'Mad Max: Fury Road', 'original_language': 'en', 'title': 'Mad Max: Fury Road', 'backdrop_path': '/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg', 'popularity': 20.25034, 'vote_count': 6000, 'video': false, 'vote_average': 7.1}, {'poster_path': '/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', 'adult': false, 'overview': 'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.', 'release_date': '2016-12-14', 'genre_ids': [28, 12, 14, 878, 53, 10752], 'id': 330459, 'original_title': 'Rogue One: A Star Wars Story', 'original_language': 'en', 'title': 'Rogue One: A Star Wars Story', 'backdrop_path': '/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', 'popularity': 17.451864, 'vote_count': 101, 'video': false, 'vote_average': 7.4}, {'poster_path': '/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg', 'adult': false, 'overview': 'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.', 'release_date': '2014-11-05', 'genre_ids': [12, 18, 878], 'id': 157336, 'original_title': 'Interstellar', 'original_language': 'en', 'title': 'Interstellar', 'backdrop_path': '/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg', 'popularity': 16.108209, 'vote_count': 6268, 'video': false, 'vote_average': 8}, {'poster_path': '/5N20rQURev5CNDcMjHVUZhpoCNC.jpg', 'adult': false, 'overview': 'Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.', 'release_date': '2016-04-27', 'genre_ids': [28], 'id': 271110, 'original_title': 'Captain America: Civil War', 'original_language': 'en', 'title': 'Captain America: Civil War', 'backdrop_path': '/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg', 'popularity': 15.952938, 'vote_count': 3724, 'video': false, 'vote_average': 6.8}, {'poster_path': '/gj282Pniaa78ZJfbaixyLXnXEDI.jpg', 'adult': false, 'overview': 'Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.', 'release_date': '2014-11-18', 'genre_ids': [878, 12, 53], 'id': 131631, 'original_title': 'The Hunger Games: Mockingjay - Part 1', 'original_language': 'en', 'title': 'The Hunger Games: Mockingjay - Part 1', 'backdrop_path': '/83nHcz2KcnEpPXY50Ky2VldewJJ.jpg', 'popularity': 15.927043, 'vote_count': 3494, 'video': false, 'vote_average': 6.6}, {'poster_path': '/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg', 'adult': false, 'overview': 'The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.', 'release_date': '2016-06-18', 'genre_ids': [12, 16, 35, 10751], 'id': 328111, 'original_title': 'The Secret Life of Pets', 'original_language': 'en', 'title': 'The Secret Life of Pets', 'backdrop_path': '/lubzBMQLLmG88CLQ4F3TxZr2Q7N.jpg', 'popularity': 15.642676, 'vote_count': 1293, 'video': false, 'vote_average': 6}, {'poster_path': '/z09QAf8WbZncbitewNk6lKYMZsh.jpg', 'adult': false, 'overview': 'Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?', 'release_date': '2016-06-16', 'genre_ids': [16, 10751], 'id': 127380, 'original_title': 'Finding Dory', 'original_language': 'en', 'title': 'Finding Dory', 'backdrop_path': '/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg', 'popularity': 15.182496, 'vote_count': 1582, 'video': false, 'vote_average': 6.7}, {'poster_path': '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg', 'adult': false, 'overview': 'The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.', 'release_date': '2016-07-27', 'genre_ids': [28, 53], 'id': 324668, 'original_title': 'Jason Bourne', 'original_language': 'en', 'title': 'Jason Bourne', 'backdrop_path': '/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg', 'popularity': 13.645055, 'vote_count': 1282, 'video': false, 'vote_average': 5.6}, {'poster_path': '/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg', 'adult': false, 'overview': "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.", 'release_date': '2016-11-23', 'genre_ids': [16, 12, 35, 10751, 14, 10402], 'id': 277834, 'original_title': 'Moana', 'original_language': 'en', 'title': 'Moana', 'backdrop_path': '/1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg', 'popularity': 13.39014, 'vote_count': 268, 'video': false, 'vote_average': 6.2}, {'poster_path': '/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', 'adult': false, 'overview': 'After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.', 'release_date': '2016-10-25', 'genre_ids': [28, 12, 14, 878], 'id': 284052, 'original_title': 'Doctor Strange', 'original_language': 'en', 'title': 'Doctor Strange', 'backdrop_path': '/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg', 'popularity': 13.340407, 'vote_count': 1413, 'video': false, 'vote_average': 6.5}, {'poster_path': '/cparcxTFuHdlSOP3MJOpN7Ec9NB.jpg', 'adult': false, 'overview': 'Seven gun men in the old west gradually come together to help a poor village against savage thieves.', 'release_date': '2016-09-14', 'genre_ids': [28, 12, 37], 'id': 333484, 'original_title': 'The Magnificent Seven', 'original_language': 'en', 'title': 'The Magnificent Seven', 'backdrop_path': '/T3LrH6bnV74llVbFpQsCBrGaU9.jpg', 'popularity': 13.338313, 'vote_count': 822, 'video': false, 'vote_average': 4.8}, {'poster_path': '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg', 'adult': false, 'overview': 'Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.', 'release_date': '2015-06-09', 'genre_ids': [28, 12, 878, 53], 'id': 135397, 'original_title': 'Jurassic World', 'original_language': 'en', 'title': 'Jurassic World', 'backdrop_path': '/dkMD5qlogeRMiEixC4YNPUvax2T.jpg', 'popularity': 13.268487, 'vote_count': 5417, 'video': false, 'vote_average': 6.5}, {'poster_path': '/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg', 'adult': false, 'overview': 'The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.', 'release_date': '2016-07-07', 'genre_ids': [28, 12, 878, 53], 'id': 188927, 'original_title': 'Star Trek Beyond', 'original_language': 'en', 'title': 'Star Trek Beyond', 'backdrop_path': '/6uBlEXZCUHM15UNZqNig17VdN4m.jpg', 'popularity': 12.767499, 'vote_count': 1304, 'video': false, 'vote_average': 6.3}, {'poster_path': '/rdkxl5iXdpVU188cL1LLG3sy6z4.jpg', 'adult': false, 'overview': "Vampires and werewolves have waged a nocturnal war against each other for centuries. But all bets are off when a female vampire warrior named Selene, who's famous for her strength and werewolf-hunting prowess, becomes smitten with a peace-loving male werewolf, Michael, who wants to end the war.", 'release_date': '2003-09-19', 'genre_ids': [14, 28, 53], 'id': 277, 'original_title': 'Underworld', 'original_language': 'en', 'title': 'Underworld', 'backdrop_path': '/cPhRPAJWK8BuuJqqf6PztzvOlnZ.jpg', 'popularity': 12.528462, 'vote_count': 1668, 'video': false, 'vote_average': 6.5}], 'total_results': 291012, 'total_pages': 14551}
      nock('http://api.themoviedb.org/3')
        .get('/discover/movie?api_key=9dee05d48efe51f51b15cc63b1fee3f5')
        .reply(200, callForMoviesFakeResponse)
    })

    it('Should return an array of movies', (done) => {
      callForMovies(route, (err, data) => {
        expect(err).to.eql(null)
        expect(Array.isArray(data)).to.eql(true)
        expect(data).to.have.length.above(1)

        done()
      })
    })

    it('Should not be empty', () => {

    })

    it('Should accept only status 200', () => {

    })

    it('Should store values in upper scope variable', () => {

    })
  })
})


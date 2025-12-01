// TODO: have this data accessible via database calls

export const Teams = ['Karasuno', 'Nekoma', 'Aoba Johsai', 'Date Tech', 'Fukurodani', 'Shiratorizawa',
                      'Johzenji', 'Tokonami', 'Wakutani Minami', 'Ohgiminami','Kakugawa', 'Ubugawa',
                      'Shinzen', 'Nohebi', 'Itachiyama', 'Tsubakihara', 'Inarizaki', 'Sarukawa Tech',
                      'Mujinazaka', 'Komomedai'];

//TODO: double check with the Girlies who the side characters are in each team are.
// Also come up with a better word for "Side character".
// For now, most of the characters will have this field as false

export const TeamPlayers = {
    Karasuno: [
        { name: "Daichi Sawamura", isAnimated: true, isSideCharacter: false },
        { name: "Kōshi Sugawara", isAnimated: true, isSideCharacter: false },
        { name: "Asahi Azumane", isAnimated: true, isSideCharacter: false },
        { name: "Yū Nishinoya", isAnimated: true, isSideCharacter: false },
        { name: "Ryūnosuke Tanaka", isAnimated: true, isSideCharacter: false },
        { name: "Chikara Ennoshita", isAnimated: true, isSideCharacter: false },
        { name: "Hisashi Kinoshita", isAnimated: true, isSideCharacter: true },
        { name: "Kazuhito Narita", isAnimated: true, isSideCharacter: true },
        { name: "Tobio Kageyama", isAnimated: true, isSideCharacter: false },
        { name: "Shōyō Hinata", isAnimated: true, isSideCharacter: false },
        { name: "Kei Tsukishima", isAnimated: true, isSideCharacter: false },
        { name: "Tadashi Yamaguchi", isAnimated: true, isSideCharacter: false }
    ],
    Nekoma: [
        { name: "Tetsurō Kuroo", isAnimated: true, isSideCharacter: false },
        { name: "Nobuyuki Kai", isAnimated: true, isSideCharacter: false },
        { name: "Morisuke Yaku", isAnimated: true, isSideCharacter: false },
        { name: "Taketora Yamamoto", isAnimated: true, isSideCharacter: false },
        { name: "Kenma Kozume", isAnimated: true, isSideCharacter: false },
        { name: "Shōhei Fukunaga", isAnimated: true, isSideCharacter: false },
        { name: "Sō Inuoka", isAnimated: true, isSideCharacter: false },
        { name: "Tamahiko Teshiro", isAnimated: true, isSideCharacter: false },
        { name: "Lev Haiba", isAnimated: true, isSideCharacter: false },
        { name: "Yūki Shibayama", isAnimated: true, isSideCharacter: false }
    ],
    "Aoba Johsai": [
        { name: "Tōru Oikawa", isAnimated: true, isSideCharacter: false },
        { name: "Issei Matsukawa", isAnimated: true, isSideCharacter: false },
        { name: "Takahiro Hanamaki", isAnimated: true, isSideCharacter: false },
        { name: "Hajime Iwaizumi", isAnimated: true, isSideCharacter: false },
        { name: "Shigeru Yahaba", isAnimated: true, isSideCharacter: false },
        { name: "Shinji Watari", isAnimated: true, isSideCharacter: false },
        { name: "Yūtarō Kindaichi", isAnimated: true, isSideCharacter: false },
        { name: "Akira Kunimi", isAnimated: true, isSideCharacter: false },
        { name: "Kentarō Kyōtani", isAnimated: true, isSideCharacter: false }
    ],
    "Date Tech": [
        { name: "Yasushi Kamasaki", isAnimated: true, isSideCharacter: false },
        { name: "Kaname Moniwa", isAnimated: true, isSideCharacter: false },
        { name: "Takehito Sasaya", isAnimated: true, isSideCharacter: false },
        { name: "Takanobu Aone", isAnimated: true, isSideCharacter: false },
        { name: "Kenji Futakuchi", isAnimated: true, isSideCharacter: false },
        { name: "Yutaka Obara", isAnimated: true, isSideCharacter: false },
        { name: "Kanji Koganegawa", isAnimated: true, isSideCharacter: false },
        { name: "Tarō Onagawa", isAnimated: true, isSideCharacter: false },
        { name: "Jingo Fukiage", isAnimated: true, isSideCharacter: false },
        { name: "Kōsuke Sakunami", isAnimated: true, isSideCharacter: false }
    ],
    Fukurodani: [
        { name: "Tatsuki Washio", isAnimated: true, isSideCharacter: false },
        { name: "Yamato Sarukui", isAnimated: true, isSideCharacter: false },
        { name: "Kōtarō Bokuto", isAnimated: true, isSideCharacter: false },
        { name: "Keiji Akaashi", isAnimated: true, isSideCharacter: false },
        { name: "Akinori Konoha", isAnimated: true, isSideCharacter: false  },
        { name: "Shūichi Anahori", isAnimated: false, isSideCharacter: true },
        { name: "Haruki Komi", isAnimated: true, isSideCharacter: true },
        { name: "Wataru Onaga", isAnimated: true, isSideCharacter: true },
    ],
    Shiratorizawa: [
        { name: "Wakatoshi Ushijima", isAnimated: true, isSideCharacter: false },
        { name: "Eita Semi", isAnimated: true, isSideCharacter: false },
        { name: "Reon Ōhira", isAnimated: true, isSideCharacter: false },
        { name: "Satori Tendō", isAnimated: true, isSideCharacter: false },
        { name: "Tsutomu Goshiki", isAnimated: true, isSideCharacter: false },
        { name: "Kenjirō Shirabu", isAnimated: true, isSideCharacter: false },
        { name: "Taichi Kawanishi", isAnimated: true, isSideCharacter: false },
        { name: "Kai Akakura", isAnimated: true, isSideCharacter: false },
        { name: "Hayato Yamagata", isAnimated: true, isSideCharacter: false },
        { name: "Yūshō Sagae", isAnimated: true, isSideCharacter: false }
    ],
    Johzenji: [
        { name: "Yūji Terushima", isAnimated: true, isSideCharacter: false },
        { name: "Kazuma Bobata", isAnimated: true, isSideCharacter: false },
        { name: "Takeharu Futamata", isAnimated: true, isSideCharacter: false },
        { name: "Katsumichi Higashiyama", isAnimated: true, isSideCharacter: false },
        { name: "Rintarō Numajiri", isAnimated: true, isSideCharacter: false },
        { name: "Nobuyoshi Īzaka", isAnimated: true, isSideCharacter: false },
        { name: "Arata Tsuchiyu", isAnimated: true, isSideCharacter: false }
    ],
    Tokonami: [
        { name: "Hikaru Komaki", isAnimated: true, isSideCharacter: false },
        { name: "Kazuma Chaya", isAnimated: true, isSideCharacter: false },
        { name: "Hayato Ikejiri", isAnimated: true, isSideCharacter: false },
        { name: "Hiroki Tamagawa", isAnimated: true, isSideCharacter: false },
        { name: "Yoshiharu Haga", isAnimated: true, isSideCharacter: false },
        { name: "Rikuto Shibuya", isAnimated: true, isSideCharacter: false },
        { name: "Taiga Sakurai", isAnimated: true, isSideCharacter: false }
    ],
    "Wakutani Minami": [
        { name: "Takeru Nakashima", isAnimated: true, isSideCharacter: false },
        { name: "Shunki Kawatabi", isAnimated: true, isSideCharacter: false },
        { name: "Kazumasa Hanayama", isAnimated: true, isSideCharacter: false },
        { name: "Yūki Shiroishi", isAnimated: true, isSideCharacter: false },
        { name: "Teppei Naruko", isAnimated: true, isSideCharacter: false },
        { name: "Kazuteru Akiu", isAnimated: true, isSideCharacter: false },
        { name: "Tsuyoshi Matsushima", isAnimated: true, isSideCharacter: false }
    ],
    Ohgiminami: [
        { name: "Yoshiki Towada", isAnimated: true, isSideCharacter: false },
        { name: "Takumi Karamatsu", isAnimated: true, isSideCharacter: false },
        { name: "Yūki Tazawa", isAnimated: true, isSideCharacter: false },
        { name: "Ayumu Moritake", isAnimated: true, isSideCharacter: false },
        { name: "Sōma Oyasu", isAnimated: true, isSideCharacter: false },
        { name: "Ibuki Natsuse", isAnimated: true, isSideCharacter: false },
        { name: "Shun Yokote", isAnimated: true, isSideCharacter: false }
    ],
    Kakugawa: [
        { name: "Yoshiaki Nurukawa", isAnimated: true, isSideCharacter: false },
        { name: "Eiji Makado", isAnimated: true, isSideCharacter: false },
        { name: "Kaito Asamushi", isAnimated: true, isSideCharacter: false },
        { name: "Yuzuru Komaki", isAnimated: true, isSideCharacter: false },
        { name: "Isao Inagaki", isAnimated: true, isSideCharacter: false },
        { name: "Yūdai Hyakuzawa", isAnimated: true, isSideCharacter: false },
        { name: "Taishi Minamida", isAnimated: true, isSideCharacter: false }
    ],
    Ubugawa: [
        { name: "Masaki Gōra", isAnimated: true, isSideCharacter: false },
        { name: "Yōhei Ashiya", isAnimated: true, isSideCharacter: false },
        { name: "Kengo Nanasawa", isAnimated: true, isSideCharacter: false },
        { name: "Shingo Sengoku", isAnimated: true, isSideCharacter: false },
        { name: "Yūji Isehara", isAnimated: true, isSideCharacter: false },
        { name: "Kōji Yukawa", isAnimated: true, isSideCharacter: false },
        { name: "Toshimi Nakagawa", isAnimated: true, isSideCharacter: false }
    ],
    Shinzen: [
        { name: "Daiki Ogano", isAnimated: true, isSideCharacter: false },
        { name: "Shōta Naguri", isAnimated: true, isSideCharacter: false },
        { name: "Noriaki Shimafu", isAnimated: true, isSideCharacter: false },
        { name: "Eikichi Chigaya", isAnimated: true, isSideCharacter: false },
        { name: "Masaru Kodama", isAnimated: true, isSideCharacter: false },
        { name: "Yū Akatani", isAnimated: true, isSideCharacter: false },
        { name: "Kazutaka Yoshikawa", isAnimated: true, isSideCharacter: false }
    ],
    Nohebi: [
        { name: "Suguru Daishō", isAnimated: true, isSideCharacter: false },
        { name: "Yoshiya Takachiho", isAnimated: true, isSideCharacter: false },
        { name: "Kazuma Numai", isAnimated: true, isSideCharacter: false },
        { name: "Kōji Hiroo", isAnimated: true, isSideCharacter: false },
        { name: "Isumi Sakishima", isAnimated: true, isSideCharacter: false },
        { name: "Sō Akama", isAnimated: true, isSideCharacter: false },
        { name: "Akihiko Seguro", isAnimated: true, isSideCharacter: false },
        { name: "Naoyasu Kuguri", isAnimated: true, isSideCharacter: false }
    ],
    Itachiyama: [
        { name: "Tsukasa Iizuna", isAnimated: false, isSideCharacter: false },
        { name: "Kiyoomi Sakusa", isAnimated: true, isSideCharacter: false },
        { name: "Motoya Komori", isAnimated: true, isSideCharacter: false }
    ],
    Tsubakihara: [
        { name: "Kazuki Maruyama", isAnimated: true, isSideCharacter: false },
        { name: "Sakae Echigo", isAnimated: true, isSideCharacter: false },
        { name: "Chiharu Tsukioka", isAnimated: true, isSideCharacter: false },
        { name: "Motoki Teradomari", isAnimated: true, isSideCharacter: false },
        { name: "Dai Mikawa", isAnimated: true, isSideCharacter: false },
        { name: "Tōgo Iwamuro", isAnimated: true, isSideCharacter: false },
        { name: "Yoshitomo Atema", isAnimated: true, isSideCharacter: false },
        { name: "Yūshi Maiko", isAnimated: true, isSideCharacter: false },
        { name: "Akifumi Kaikake", isAnimated: true, isSideCharacter: false },
        { name: "Aoi Himekawa", isAnimated: true, isSideCharacter: false }
    ],
    Inarizaki: [
        { name: "Shinsuke Kita", isAnimated: true, isSideCharacter: false },
        { name: "Ren Ōmimi", isAnimated: true, isSideCharacter: false },
        { name: "Aran Ojiro", isAnimated: true, isSideCharacter: false },
        { name: "Hitoshi Ginjima", isAnimated: true, isSideCharacter: false },
        { name: "Atsumu Miya", isAnimated: true, isSideCharacter: false },
        { name: "Rintarō Suna", isAnimated: true, isSideCharacter: false },
        { name: "Osamu Miya", isAnimated: true, isSideCharacter: false },
        { name: "Yūto Kosaku", isAnimated: true, isSideCharacter: false },
        { name: "Heisuke Riseki", isAnimated: true, isSideCharacter: false },
        { name: "Michinari Akagi", isAnimated: true, isSideCharacter: false }
    ],
    "Sarukawa Tech": [
        { name: "Itaru Shiramine", isAnimated: true, isSideCharacter: false },
        { name: "Hisahiko Wakura", isAnimated: true, isSideCharacter: false },
        { name: "Iori Kanazawa", isAnimated: true, isSideCharacter: false },
        { name: "Tomonari Shiga", isAnimated: true, isSideCharacter: false },
        { name: "Tomokazu Wajima", isAnimated: true, isSideCharacter: false },
        { name: "Kenrō Fukatani", isAnimated: true, isSideCharacter: false },
        { name: "Sōji Yamashiro", isAnimated: true, isSideCharacter: false },],
    Mujinazaka: [
        { name: "Wakatsu Kiryū", isAnimated: true, isSideCharacter: false },
        { name: "Nozomu Mami", isAnimated: false, isSideCharacter: false },
        { name: "Keisuke Unnan", isAnimated: false, isSideCharacter: false },
        { name: "Naoharu Ezota", isAnimated: false, isSideCharacter: false },
        { name: "Michiru Usuri", isAnimated: false, isSideCharacter: false },
        { name: "Subaru Hondo", isAnimated: false, isSideCharacter: false },
        { name: "Haruma Bishin", isAnimated: false, isSideCharacter: false }
    ],
    Komomedai:[
        { name: "Aikichi Suwa", isAnimated: false, isSideCharacter: false },
        { name: "Izuru Nozawa", isAnimated: false, isSideCharacter: false },
        { name: "Kōrai Hoshiumi", isAnimated: true, isSideCharacter: false },
        { name: "Sachirō Hirugami", isAnimated: true, isSideCharacter: false },
        { name: "Isao Norikura", isAnimated: false, isSideCharacter: false },
        { name: "Kazuyoshi Bessho", isAnimated: false, isSideCharacter: false },
        { name: "Gao Hakuba", isAnimated: false, isSideCharacter: false },
        { name: "Liam Tokura", isAnimated: false, isSideCharacter: false },
        { name: "Keiichirō Kanbayashi", isAnimated: false, isSideCharacter: false }
    ]
};















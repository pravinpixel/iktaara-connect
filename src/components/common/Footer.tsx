/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from "@mui/material";
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import router from "next/router";
import { Fragment } from "react";

const CustomContainer = dynamic(() => import("@/views/components/Container"));
const CustomButton = dynamic(
  () => import("@/views/components/form-fields/CustomButton")
);

const Footer = () => {
  const menus = [
    
      {
        id: 20,
        name: "Guitars",
        slug: "guitars",
        child: [
          {
            id: 21,
            name: "Acoustic Guitar",
            slug: "acoustic-guitar-guitars",
            breadcrum_slug: "acoustic-guitar",
            innerchild: [
              {
                id: 58,
                name: "Silent Guitar",
                slug: "silent-guitar-acoustic-guitar",
                breadcrum_slug: "silent-guitar",
              },
            ],
          },
          {
            id: 22,
            name: "Classical Guitar",
            slug: "classical-guitar-guitars",
            breadcrum_slug: "classical-guitar",
            innerchild: [
              {
                id: 54,
                name: "Flamenco",
                slug: "flamenco-classical-guitar",
                breadcrum_slug: "flamenco",
              },
            ],
          },
          {
            id: 25,
            name: "Electric Guitar",
            slug: "electric-guitar-guitars",
            breadcrum_slug: "electric-guitar",
            innerchild: [
              {
                id: 191,
                name: "",
                slug: "electric-guitar",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 26,
            name: "Bass Guitar",
            slug: "bass-guitar-guitars",
            breadcrum_slug: "bass-guitar",
            innerchild: [
              {
                id: 199,
                name: "",
                slug: "bass-guitar",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 55,
            name: "Mandolin",
            slug: "mandolin-guitars",
            breadcrum_slug: "mandolin",
            innerchild: [],
          },
          {
            id: 57,
            name: "Ukulele",
            slug: "ukulele-guitars",
            breadcrum_slug: "ukulele",
            innerchild: [],
          },
          {
            id: 170,
            name: "Processor & Pedals",
            slug: "processor-pedals-guitars",
            breadcrum_slug: "processor-&-pedals",
            innerchild: [],
          },
        ],
      },
      {
        id: 14,
        name: "Drums and Percussions",
        slug: "drums-and-percussions",
        child: [
          {
            id: 11,
            name: "Acoustic Drumkits",
            slug: "acoustic-drumkits-drums-and-percussions",
            breadcrum_slug: "acoustic-drumkits",
            innerchild: [
              {
                id: 197,
                name: "",
                slug: "acoustic-drumkits",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 13,
            name: "Electronic Drumkits",
            slug: "electronic-drumkits-drums-and-percussions",
            breadcrum_slug: "electronic-drumkits",
            innerchild: [],
          },
          {
            id: 15,
            name: "Marching Snare",
            slug: "marching-snare-drums",
            breadcrum_slug: "marching-snare",
            innerchild: [],
          },
          {
            id: 16,
            name: "Marching Bass",
            slug: "marching-bass-drums",
            breadcrum_slug: "marching-bass",
            innerchild: [],
          },
          {
            id: 27,
            name: "Percusssion",
            slug: "percusssion-drums-and-percussions",
            breadcrum_slug: "percusssion",
            innerchild: [
              {
                id: 12,
                name: "Cymbal",
                slug: "cymbal-percusssion",
                breadcrum_slug: "cymbal",
              },
              {
                id: 28,
                name: "Darbuka",
                slug: "darbuka-percusssion",
                breadcrum_slug: "darbuka",
              },
              {
                id: 138,
                name: "Bass Drum",
                slug: "bass-drum-percusssion",
                breadcrum_slug: "bass-drum",
              },
              {
                id: 139,
                name: "Congo",
                slug: "congo-percusssion",
                breadcrum_slug: "congo",
              },
              {
                id: 141,
                name: "Snare Drum",
                slug: "snare-drum-percusssion",
                breadcrum_slug: "snare-drum",
              },
              {
                id: 142,
                name: "Octoban",
                slug: "octoban-percusssion",
                breadcrum_slug: "octoban",
              },
              {
                id: 143,
                name: "Timbales",
                slug: "timbales-percusssion",
                breadcrum_slug: "timbales",
              },
              {
                id: 157,
                name: "Cajons",
                slug: "cajons-percusssion",
                breadcrum_slug: "cajons",
              },
              {
                id: 185,
                name: "Bongo",
                slug: "bongo-percusssion",
                breadcrum_slug: "bongo",
              },
              {
                id: 186,
                name: "Shakers",
                slug: "shakers-percusssion",
                breadcrum_slug: "shakers",
              },
            ],
          },
          {
            id: 165,
            name: "Drum Sticks",
            slug: "drum-sticks-drums-and-percussions",
            breadcrum_slug: "drum-sticks",
            innerchild: [],
          },
          {
            id: 166,
            name: "Drumheads",
            slug: "drumheads-drums-and-percussions",
            breadcrum_slug: "drumheads",
            innerchild: [],
          },
        ],
      },
      {
        id: 194,
        name: "Piano",
        slug: "piano",
        child: [
          {
            id: 41,
            name: "Grand Piano",
            slug: "grand-piano-piano",
            breadcrum_slug: "grand-piano",
            innerchild: [],
          },
          {
            id: 43,
            name: "Digital Piano",
            slug: "digital-piano-piano",
            breadcrum_slug: "digital-piano",
            innerchild: [],
          },
          {
            id: 42,
            name: "Upright Piano",
            slug: "upright-piano-piano",
            breadcrum_slug: "upright-piano",
            innerchild: [],
          },
        ],
      },
      {
        id: 148,
        name: "Keyboards",
        slug: "keyboards",
        child: [
          {
            id: 2,
            name: "Portable Keyboard",
            slug: "portable-keyboard-piano-and-keyboards",
            breadcrum_slug: "portable-keyboard",
            innerchild: [
              {
                id: 196,
                name: "",
                slug: "portable-keyboard",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 3,
            name: "Arranger Keyboard",
            slug: "arranger-keyboard-piano-and-keyboards",
            breadcrum_slug: "arranger-keyboard",
            innerchild: [],
          },
          {
            id: 44,
            name: "Mini Keyboards",
            slug: "mini-keyboards-piano-and-keyboards",
            breadcrum_slug: "mini-keyboards",
            innerchild: [],
          },
          {
            id: 52,
            name: "Synthesizers",
            slug: "synthesizers-piano-and-keyboards",
            breadcrum_slug: "synthesizers",
            innerchild: [],
          },
        ],
      },
      {
        id: 117,
        name: "Bows and Strings",
        slug: "bows-and-strings",
        child: [
          {
            id: 125,
            name: "Violin",
            slug: "violin-bows-and-strings",
            breadcrum_slug: "violin",
            innerchild: [],
          },
          {
            id: 126,
            name: "Viola",
            slug: "viola-bows-and-strings",
            breadcrum_slug: "viola",
            innerchild: [],
          },
          {
            id: 127,
            name: "Cello",
            slug: "cello-bows-and-strings",
            breadcrum_slug: "cello",
            innerchild: [],
          },
        ],
      },
      {
        id: 118,
        name: "Pro Audio",
        slug: "pro-audio",
        child: [
          {
            id: 60,
            name: "Dynamic Microphone",
            slug: "dynamic-microphone-pro-audio",
            breadcrum_slug: "dynamic-microphone",
            innerchild: [],
          },
          {
            id: 63,
            name: "Headphones",
            slug: "headphones-pro-audio",
            breadcrum_slug: "headphones",
            innerchild: [],
          },
          {
            id: 65,
            name: "Studio Monitors",
            slug: "studio-monitors-pro-audio",
            breadcrum_slug: "studio-monitors",
            innerchild: [],
          },
          {
            id: 129,
            name: "Condenser Microphone",
            slug: "condenser-microphone-pro-audio",
            breadcrum_slug: "condenser-microphone",
            innerchild: [],
          },
          {
            id: 130,
            name: "Midi Keyboard & Controllers",
            slug: "midi-keyboard-controllers-pro-audio",
            breadcrum_slug: "midi-keyboard-&-controllers",
            innerchild: [],
          },
          {
            id: 131,
            name: "Audio Interfaces",
            slug: "audio-interfaces-pro-audio",
            breadcrum_slug: "audio-interfaces",
            innerchild: [],
          },
          {
            id: 180,
            name: "Processor",
            slug: "processor-pro-audio",
            breadcrum_slug: "processor",
            innerchild: [],
          },
          {
            id: 181,
            name: "Software & Plugins",
            slug: "software-plugins-pro-audio",
            breadcrum_slug: "software-&-plugins",
            innerchild: [],
          },
          {
            id: 182,
            name: "Accessories",
            slug: "accessories-pro-audio",
            breadcrum_slug: "accessories",
            innerchild: [],
          },
        ],
      },
      {
        id: 119,
        name: "Books",
        slug: "books",
        child: [
          {
            id: 100,
            name: "Tutors Books",
            slug: "tutors-books-books",
            breadcrum_slug: "tutors-books",
            innerchild: [],
          },
          {
            id: 74,
            name: "Exam Books",
            slug: "exam-books-books",
            breadcrum_slug: "exam-books",
            innerchild: [],
          },
          {
            id: 99,
            name: "Music Books",
            slug: "music-books-books",
            breadcrum_slug: "music-books",
            innerchild: [],
          },
        ],
      },
      {
        id: 30,
        name: "Woodwind",
        slug: "woodwind",
        child: [
          {
            id: 31,
            name: "Pianica",
            slug: "pianica-woodwind",
            breadcrum_slug: "pianica",
            innerchild: [],
          },
          {
            id: 32,
            name: "Clarinet",
            slug: "clarinet-woodwind",
            breadcrum_slug: "clarinet",
            innerchild: [],
          },
          {
            id: 33,
            name: "Saxophone",
            slug: "saxophone-woodwind",
            breadcrum_slug: "saxophone",
            innerchild: [],
          },
          {
            id: 35,
            name: "Oboe",
            slug: "oboe-woodwind",
            breadcrum_slug: "oboe",
            innerchild: [],
          },
          {
            id: 36,
            name: "Cornet",
            slug: "cornet-woodwind",
            breadcrum_slug: "cornet",
            innerchild: [],
          },
          {
            id: 38,
            name: "Flute",
            slug: "flute-woodwind",
            breadcrum_slug: "flute",
            innerchild: [],
          },
          {
            id: 39,
            name: "Piccolo",
            slug: "piccolo-woodwind",
            breadcrum_slug: "piccolo",
            innerchild: [],
          },
          {
            id: 71,
            name: "Trombone",
            slug: "trombone-woodwind",
            breadcrum_slug: "trombone",
            innerchild: [],
          },
          {
            id: 72,
            name: "Tuba",
            slug: "tuba-woodwind",
            breadcrum_slug: "tuba",
            innerchild: [],
          },
          {
            id: 105,
            name: "Harmonica/Mouth Organ",
            slug: "harmonicamouth-organ-woodwind",
            breadcrum_slug: "harmonica/mouth-organ",
            innerchild: [
              {
                id: 192,
                name: "",
                slug: "harmonicamouth-organ",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 69,
            name: "Euphonium",
            slug: "euphonium-woodwind",
            breadcrum_slug: "euphonium",
            innerchild: [],
          },
          {
            id: 70,
            name: "Frenchorn",
            slug: "frenchorn-woodwind",
            breadcrum_slug: "frenchorn",
            innerchild: [],
          },
          {
            id: 73,
            name: "Trumpet",
            slug: "trumpet-woodwind",
            breadcrum_slug: "trumpet",
            innerchild: [],
          },
        ],
      },
      {
        id: 161,
        name: "Dj Gears",
        slug: "dj-gears",
        child: [
          {
            id: 163,
            name: "DJ Controllers",
            slug: "dj-controllers-dj-gears",
            breadcrum_slug: "dj-controllers",
            innerchild: [],
          },
          {
            id: 162,
            name: "DJ Accessories",
            slug: "dj-accessories-dj-gears",
            breadcrum_slug: "dj-accessories",
            innerchild: [],
          },
        ],
      },
      {
        id: 171,
        name: "Live Audio",
        slug: "live-audio",
        child: [
          {
            id: 172,
            name: "Active PA Speakers",
            slug: "active-pa-speakers-live-audio",
            breadcrum_slug: "active-pa-speakers",
            innerchild: [],
          },
          {
            id: 173,
            name: "Amplifier",
            slug: "amplifier-live-audio",
            breadcrum_slug: "amplifier",
            innerchild: [],
          },
          {
            id: 174,
            name: "Loud Speaker",
            slug: "loud-speaker-live-audio",
            breadcrum_slug: "loud-speaker",
            innerchild: [],
          },
          {
            id: 175,
            name: "Mixers",
            slug: "mixers-live-audio",
            breadcrum_slug: "mixers",
            innerchild: [],
          },
          {
            id: 176,
            name: "PA Speakers",
            slug: "pa-speakers-live-audio",
            breadcrum_slug: "pa-speakers",
            innerchild: [],
          },
          {
            id: 177,
            name: "PA Systems",
            slug: "pa-systems-live-audio",
            breadcrum_slug: "pa-systems",
            innerchild: [],
          },
          {
            id: 178,
            name: "Wireless System",
            slug: "wireless-system-live-audio",
            breadcrum_slug: "wireless-system",
            innerchild: [],
          },
        ],
      },
      {
        id: 5,
        name: "Accessories",
        slug: "accessories",
        child: [
          {
            id: 7,
            name: "Music Stand",
            slug: "music-stand-accessories",
            breadcrum_slug: "music-stand",
            innerchild: [],
          },
          {
            id: 8,
            name: "Laptop & Ipad Stand",
            slug: "laptop-ipad-stand-accessories",
            breadcrum_slug: "laptop-&-ipad-stand",
            innerchild: [],
          },
          {
            id: 160,
            name: "Cables & Accessories",
            slug: "cables-accessories-accessories",
            breadcrum_slug: "cables-&-accessories",
            innerchild: [],
          },
          {
            id: 136,
            name: "String Accessories",
            slug: "string-accessories-accessories",
            breadcrum_slug: "string-accessories",
            innerchild: [],
          },
          {
            id: 137,
            name: "Other Accessories",
            slug: "other-accessories-accessories",
            breadcrum_slug: "other-accessories",
            innerchild: [],
          },
          {
            id: 169,
            name: "Guitars Accessories",
            slug: "guitars-accessories-accessories",
            breadcrum_slug: "guitars-accessories",
            innerchild: [],
          },
          {
            id: 17,
            name: "Drumkit Accessories",
            slug: "drumkit-accessories-accessories",
            breadcrum_slug: "drumkit-accessories",
            innerchild: [
              {
                id: 167,
                name: "Pedals",
                slug: "pedals-drumkit-accessories",
                breadcrum_slug: "pedals",
              },
              {
                id: 198,
                name: "",
                slug: "drumkit-accessories",
                breadcrum_slug: "",
              },
            ],
          },
          {
            id: 46,
            name: "Keyboard Accessories",
            slug: "keyboard-accessories-accessories",
            breadcrum_slug: "keyboard-accessories",
            innerchild: [],
          },
          {
            id: 183,
            name: "Woodwind Accessories",
            slug: "woodwind-accessories-accessories",
            breadcrum_slug: "woodwind-accessories",
            innerchild: [],
          },
        ],
      },
      {
        id: 121,
        name: "Shop by Brand",
        slug: "shop-by-brand",
        child: [
          {
            id: 92,
            name: "AIAIAI",
            slug: "aiaiai",
          },
          {
            id: 96,
            name: "Austrian Audio",
            slug: "austrian-audio",
          },
          {
            id: 97,
            name: "CranBrone",
            slug: "cranbrone",
          },
          {
            id: 98,
            name: "Digital Audio Labs",
            slug: "digital-audio-labs",
          },
          {
            id: 99,
            name: "Eikon",
            slug: "eikon",
          },
          {
            id: 100,
            name: "AVI",
            slug: "avi",
          },
          {
            id: 101,
            name: "Charter Oak",
            slug: "charter-oak",
          },
          {
            id: 102,
            name: "Flare Audio",
            slug: "flare-audio",
          },
          {
            id: 103,
            name: "Gator Frameworks-Rokit",
            slug: "gator-frameworks-rokit",
          },
          {
            id: 104,
            name: "MikTek",
            slug: "miktek",
          },
          {
            id: 105,
            name: "Native Instruments",
            slug: "native-instruments",
          },
          {
            id: 106,
            name: "Proel",
            slug: "proel",
          },
          {
            id: 107,
            name: "Gator Frameworks",
            slug: "gator-frameworks",
          },
          {
            id: 108,
            name: "Loop Trotter",
            slug: "loop-trotter",
          },
          {
            id: 109,
            name: "Lauten Audio",
            slug: "lauten-audio",
          },
          {
            id: 110,
            name: "Slate",
            slug: "slate",
          },
          {
            id: 111,
            name: "Softube",
            slug: "softube",
          },
          {
            id: 112,
            name: "Sontronics",
            slug: "sontronics",
          },
          {
            id: 113,
            name: "Telefunken",
            slug: "telefunken",
          },
          {
            id: 114,
            name: "Universal Audio",
            slug: "universal-audio",
          },
          {
            id: 115,
            name: "Lemon Drums",
            slug: "lemon-drums",
          },
          {
            id: 116,
            name: "Lizard Spit",
            slug: "lizard-spit",
          },
          {
            id: 117,
            name: "Mono Creators",
            slug: "mono-creators",
          },
          {
            id: 118,
            name: "SPL",
            slug: "spl",
          },
          {
            id: 119,
            name: "Tegeler Audio",
            slug: "tegeler-audio",
          },
          {
            id: 120,
            name: "BluGuitar",
            slug: "bluguitar",
          },
          {
            id: 121,
            name: "Cable Wrangler",
            slug: "cable-wrangler",
          },
          {
            id: 122,
            name: "Cympad",
            slug: "cympad",
          },
          {
            id: 123,
            name: "Dexibell",
            slug: "dexibell",
          },
          {
            id: 124,
            name: "Drop Strap",
            slug: "drop-strap",
          },
          {
            id: 125,
            name: "EF Note",
            slug: "ef-note",
          },
          {
            id: 126,
            name: "VanGuard Audio",
            slug: "vanguard-audio",
          },
          {
            id: 127,
            name: "Wavebone",
            slug: "wavebone",
          },
          {
            id: 128,
            name: "Ashdown",
            slug: "ashdown",
          },
          {
            id: 129,
            name: "ASM",
            slug: "asm",
          },
          {
            id: 131,
            name: "Music Nomad",
            slug: "music-nomad",
          },
          {
            id: 132,
            name: "Nord",
            slug: "nord",
          },
          {
            id: 133,
            name: "Rombo Picks",
            slug: "rombo-picks",
          },
          {
            id: 134,
            name: "Sequential",
            slug: "sequential",
          },
          {
            id: 135,
            name: "Source Audio",
            slug: "source-audio",
          },
          {
            id: 136,
            name: "Stay Music",
            slug: "stay-music",
          },
          {
            id: 137,
            name: "SlapKlatz",
            slug: "slapklatz",
          },
          {
            id: 138,
            name: "Synergy",
            slug: "synergy",
          },
          {
            id: 139,
            name: "Tamburo",
            slug: "tamburo",
          },
          {
            id: 141,
            name: "VegaTrem",
            slug: "vegatrem",
          },
          {
            id: 142,
            name: "Gallien-Krueger",
            slug: "gallien-krueger",
          },
          {
            id: 143,
            name: "Gruv Gear",
            slug: "gruv-gear",
          },
          {
            id: 144,
            name: "PRS",
            slug: "prs",
          },
          {
            id: 145,
            name: "Parkwood",
            slug: "parkwood",
          },
          {
            id: 146,
            name: "BROMO",
            slug: "bromo",
          },
          {
            id: 276,
            name: "Di Marzio",
            slug: "di-marzio",
          },
          {
            id: 277,
            name: "D'Angelico",
            slug: "dangelico",
          },
          {
            id: 278,
            name: "DV Mark",
            slug: "dv-mark",
          },
          {
            id: 279,
            name: "IA Stands",
            slug: "ia-stands",
          },
          {
            id: 284,
            name: "Sire",
            slug: "sire",
          },
          {
            id: 30,
            name: "Alhambra",
            slug: "alhambra",
          },
          {
            id: 1,
            name: "Yamaha",
            slug: "yamaha",
          },
          {
            id: 22,
            name: "Korg",
            slug: "korg",
          },
          {
            id: 13,
            name: "Roland",
            slug: "roland",
          },
          {
            id: 23,
            name: "Casio",
            slug: "casio",
          },
          {
            id: 16,
            name: "Boston",
            slug: "boston",
          },
          {
            id: 17,
            name: "Essex",
            slug: "essex",
          },
          {
            id: 21,
            name: "B.Steiner",
            slug: "bsteiner",
          },
          {
            id: 18,
            name: "Kayserburg",
            slug: "kayserburg",
          },
          {
            id: 19,
            name: "Pearl River",
            slug: "pearl-river",
          },
          {
            id: 20,
            name: "Ritmuller",
            slug: "ritmuller",
          },
          {
            id: 37,
            name: "Fender",
            slug: "fender",
          },
          {
            id: 46,
            name: "Ibanez",
            slug: "ibanez",
          },
          {
            id: 32,
            name: "Cort",
            slug: "cort",
          },
          {
            id: 34,
            name: "ESP",
            slug: "esp",
          },
          {
            id: 40,
            name: "Alvarez",
            slug: "alvarez",
          },
          {
            id: 61,
            name: "D Addario",
            slug: "d-addario",
          },
          {
            id: 7,
            name: "Tama",
            slug: "tama",
          },
          {
            id: 4,
            name: "Mapex",
            slug: "mapex",
          },
          {
            id: 12,
            name: "Pearl",
            slug: "pearl",
          },
          {
            id: 6,
            name: "PDP",
            slug: "pdp",
          },
          {
            id: 28,
            name: "Zildjian",
            slug: "zildjian",
          },
          {
            id: 15,
            name: "Meinl",
            slug: "meinl",
          },
          {
            id: 10,
            name: "Chancellor",
            slug: "chancellor",
          },
          {
            id: 73,
            name: "Aroma",
            slug: "aroma",
          },
          {
            id: 26,
            name: "Savarez",
            slug: "savarez",
          },
          {
            id: 27,
            name: "KNA",
            slug: "kna",
          },
          {
            id: 68,
            name: "Tombo",
            slug: "tombo",
          },
          {
            id: 33,
            name: "Score",
            slug: "score",
          },
          {
            id: 69,
            name: "Lee Oskar",
            slug: "lee-oskar",
          },
          {
            id: 70,
            name: "Hohner",
            slug: "hohner",
          },
          {
            id: 41,
            name: "Chateau",
            slug: "chateau",
          },
          {
            id: 45,
            name: "Furch",
            slug: "furch",
          },
          {
            id: 8,
            name: "Alesis",
            slug: "alesis",
          },
          {
            id: 9,
            name: "Carlsbro",
            slug: "carlsbro",
          },
          {
            id: 3,
            name: "Hercules",
            slug: "hercules",
          },
          {
            id: 2,
            name: "Gator",
            slug: "gator",
          },
          {
            id: 44,
            name: "Epiphone",
            slug: "epiphone",
          },
          {
            id: 39,
            name: "Tanglewood",
            slug: "tanglewood",
          },
          {
            id: 38,
            name: "Givson",
            slug: "givson",
          },
          {
            id: 42,
            name: "Clayton",
            slug: "clayton",
          },
          {
            id: 47,
            name: "Audio Technica",
            slug: "audio-technica",
          },
          {
            id: 49,
            name: "Konig & Meyer",
            slug: "konig-meyer",
          },
          {
            id: 52,
            name: "Sennheiser",
            slug: "sennheiser",
          },
          {
            id: 48,
            name: "Behringer",
            slug: "behringer",
          },
          {
            id: 53,
            name: "Shure",
            slug: "shure",
          },
          {
            id: 54,
            name: "AKG",
            slug: "akg",
          },
          {
            id: 58,
            name: "Rode",
            slug: "rode",
          },
          {
            id: 59,
            name: "Stagg",
            slug: "stagg",
          },
          {
            id: 64,
            name: "Faber Music",
            slug: "faber-music",
          },
          {
            id: 57,
            name: "TC Helicon",
            slug: "tc-helicon",
          },
          {
            id: 60,
            name: "Trinity College of London (TCL)",
            slug: "trinity-college-of-london-tcl",
          },
          {
            id: 62,
            name: "Music Sales",
            slug: "music-sales",
          },
          {
            id: 66,
            name: "International Music Publications",
            slug: "international-music-publications",
          },
          {
            id: 63,
            name: "Alfred",
            slug: "alfred",
          },
          {
            id: 24,
            name: "Bespeco",
            slug: "bespeco",
          },
          {
            id: 25,
            name: "Armour",
            slug: "armour",
          },
          {
            id: 140,
            name: "Two Notes",
            slug: "two-notes",
          },
          {
            id: 74,
            name: "Hofner",
            slug: "hofner",
          },
          {
            id: 75,
            name: "Musee",
            slug: "musee",
          },
          {
            id: 76,
            name: "Karuna",
            slug: "karuna",
          },
          {
            id: 296,
            name: "Liverpool",
            slug: "liverpool",
          },
          {
            id: 244,
            name: "Mahalo",
            slug: "mahalo",
          },
          {
            id: 229,
            name: "Blackstar",
            slug: "blackstar",
          },
          {
            id: 206,
            name: "VANDOREN",
            slug: "vandoren",
          },
          {
            id: 227,
            name: "Walden",
            slug: "walden",
          },
          {
            id: 209,
            name: "ZOOM",
            slug: "zoom",
          },
          {
            id: 89,
            name: "Sabian",
            slug: "sabian",
          },
          {
            id: 90,
            name: "Granada",
            slug: "granada",
          },
          {
            id: 295,
            name: "Dolphin",
            slug: "dolphin",
          },
          {
            id: 130,
            name: "Mooer",
            slug: "mooer",
          },
          {
            id: 94,
            name: "Aston",
            slug: "aston",
          },
          {
            id: 83,
            name: "Jackson",
            slug: "jackson",
          },
          {
            id: 91,
            name: "Vic Firth",
            slug: "vic-firth",
          },
          {
            id: 291,
            name: "MStudio",
            slug: "mstudio",
          },
          {
            id: 293,
            name: "Kaps",
            slug: "kaps",
          },
          {
            id: 95,
            name: "Audix",
            slug: "audix",
          },
          {
            id: 78,
            name: "Fluid Audio",
            slug: "fluid-audio",
          },
          {
            id: 79,
            name: "Focusrite",
            slug: "focusrite",
          },
          {
            id: 81,
            name: "Novation",
            slug: "novation",
          },
          {
            id: 82,
            name: "Dunlop",
            slug: "dunlop",
          },
          {
            id: 84,
            name: "Line 6",
            slug: "line-6",
          },
          {
            id: 85,
            name: "Remo",
            slug: "remo",
          },
          {
            id: 86,
            name: "CHARVEL",
            slug: "charvel",
          },
          {
            id: 87,
            name: "EVH",
            slug: "evh",
          },
          {
            id: 88,
            name: "Gretsch",
            slug: "gretsch",
          },
          {
            id: 147,
            name: "Alice",
            slug: "alice",
          },
          {
            id: 148,
            name: "Trinity",
            slug: "trinity",
          },
          {
            id: 149,
            name: "Apogee",
            slug: "apogee",
          },
          {
            id: 150,
            name: "AUBERT",
            slug: "aubert",
          },
          {
            id: 151,
            name: "GBA",
            slug: "gba",
          },
          {
            id: 154,
            name: "Boss",
            slug: "boss",
          },
          {
            id: 155,
            name: "B Steinner",
            slug: "b steinner",
          },
          {
            id: 156,
            name: "CHERUB",
            slug: "cherub",
          },
          {
            id: 157,
            name: "jupiter",
            slug: "jupiter",
          },
          {
            id: 159,
            name: "PAISTE",
            slug: "paiste",
          },
          {
            id: 160,
            name: "DIGITECH",
            slug: "digitech",
          },
          {
            id: 161,
            name: "ASHTON",
            slug: "ashton",
          },
          {
            id: 162,
            name: "Ernieball",
            slug: "ernieball",
          },
          {
            id: 163,
            name: "Evans",
            slug: "evans",
          },
          {
            id: 164,
            name: "GB&A",
            slug: "gb&a",
          },
          {
            id: 165,
            name: "Gibraltar",
            slug: "gibraltar",
          },
          {
            id: 166,
            name: "GIBSON",
            slug: "gibson",
          },
          {
            id: 168,
            name: "Godin",
            slug: "godin",
          },
          {
            id: 171,
            name: "HANNABACH",
            slug: "hannabach",
          },
          {
            id: 172,
            name: "Hidersine",
            slug: "hidersine",
          },
          {
            id: 173,
            name: "IA Stand",
            slug: "ia stand",
          },
          {
            id: 174,
            name: "Joyo",
            slug: "joyo",
          },
          {
            id: 175,
            name: "LANEY",
            slug: "laney",
          },
          {
            id: 176,
            name: "Levys",
            slug: "levys",
          },
          {
            id: 177,
            name: "LP",
            slug: "lp",
          },
          {
            id: 178,
            name: "MAGNUM",
            slug: "magnum",
          },
          {
            id: 179,
            name: "Mark bass",
            slug: "mark bass",
          },
          {
            id: 180,
            name: "MARSHALL",
            slug: "marshall",
          },
          {
            id: 181,
            name: "Mugo",
            slug: "mugo",
          },
          {
            id: 182,
            name: "musedo",
            slug: "musedo",
          },
          {
            id: 183,
            name: "Nadirali",
            slug: "nadirali",
          },
          {
            id: 184,
            name: "Nova",
            slug: "nova",
          },
          {
            id: 185,
            name: "PIRASTRO",
            slug: "pirastro",
          },
          {
            id: 186,
            name: "PLANET WAVES",
            slug: "planet waves",
          },
          {
            id: 187,
            name: "Pluse",
            slug: "pluse",
          },
          {
            id: 188,
            name: "PLUTO",
            slug: "pluto",
          },
          {
            id: 189,
            name: "Promark",
            slug: "promark",
          },
          {
            id: 190,
            name: "RICO",
            slug: "rico",
          },
          {
            id: 191,
            name: "Ritter",
            slug: "ritter",
          },
          {
            id: 192,
            name: "Rivertone",
            slug: "rivertone",
          },
          {
            id: 193,
            name: "Rock Bag",
            slug: "rock bag",
          },
          {
            id: 194,
            name: "Rock Stand",
            slug: "rock stand",
          },
          {
            id: 195,
            name: "Rock Case",
            slug: "rock case",
          },
          {
            id: 196,
            name: "samick",
            slug: "samick",
          },
          {
            id: 197,
            name: "Samson",
            slug: "samson",
          },
          {
            id: 198,
            name: "Sandner",
            slug: "sandner",
          },
          {
            id: 200,
            name: "Steinburg",
            slug: "steinburg",
          },
          {
            id: 201,
            name: "STRANGER",
            slug: "stranger",
          },
          {
            id: 202,
            name: "Suzuki",
            slug: "suzuki",
          },
          {
            id: 203,
            name: "TC Electronic",
            slug: "tc electronic",
          },
          {
            id: 204,
            name: "Thomastik",
            slug: "thomastik",
          },
          {
            id: 205,
            name: "toca",
            slug: "toca",
          },
          {
            id: 207,
            name: "VOX",
            slug: "vox",
          },
          {
            id: 208,
            name: "Wolf",
            slug: "wolf",
          },
          {
            id: 210,
            name: "SUPREME",
            slug: "supreme",
          },
          {
            id: 211,
            name: "RADEL",
            slug: "radel",
          },
          {
            id: 212,
            name: "MACKIE",
            slug: "mackie",
          },
          {
            id: 213,
            name: "Planetwaves",
            slug: "planetwaves",
          },
          {
            id: 214,
            name: "Volt",
            slug: "volt",
          },
          {
            id: 215,
            name: "Markbass",
            slug: "markbass",
          },
          {
            id: 216,
            name: "Rockstand",
            slug: "rockstand",
          },
          {
            id: 220,
            name: "Fishman",
            slug: "fishman",
          },
          {
            id: 221,
            name: "M audio",
            slug: "m audio",
          },
          {
            id: 222,
            name: "RIGHTON STRAPS",
            slug: "righton straps",
          },
          {
            id: 223,
            name: "Ragini",
            slug: "ragini",
          },
          {
            id: 224,
            name: "Procraft",
            slug: "procraft",
          },
          {
            id: 225,
            name: "IA",
            slug: "ia",
          },
          {
            id: 228,
            name: "Hartke",
            slug: "hartke",
          },
          {
            id: 230,
            name: "Richtone",
            slug: "richtone",
          },
          {
            id: 231,
            name: "Breedlove",
            slug: "breedlove",
          },
          {
            id: 233,
            name: "enya",
            slug: "enya",
          },
          {
            id: 234,
            name: "Claytone",
            slug: "claytone",
          },
          {
            id: 235,
            name: "B STEINER",
            slug: "b steiner",
          },
          {
            id: 236,
            name: "KALA",
            slug: "kala",
          },
          {
            id: 237,
            name: "CORELLI",
            slug: "corelli",
          },
          {
            id: 238,
            name: "CLAPBOX",
            slug: "clapbox",
          },
          {
            id: 240,
            name: "CROSS ROCK",
            slug: "cross rock",
          },
          {
            id: 241,
            name: "KONIG & MAYER",
            slug: "konig & mayer",
          },
          {
            id: 242,
            name: "Alto",
            slug: "alto",
          },
          {
            id: 243,
            name: "Sela",
            slug: "sela",
          },
          {
            id: 245,
            name: "Studiomaster",
            slug: "studiomaster",
          },
          {
            id: 246,
            name: "Schecter",
            slug: "schecter",
          },
          {
            id: 247,
            name: "Elixir",
            slug: "elixir",
          },
          {
            id: 248,
            name: "Akai",
            slug: "akai",
          },
          {
            id: 250,
            name: "QSC",
            slug: "qsc",
          },
          {
            id: 253,
            name: "KEPMA",
            slug: "kepma",
          },
          {
            id: 254,
            name: "NUX",
            slug: "nux",
          },
          {
            id: 255,
            name: "Drum Craft",
            slug: "drum craft",
          },
          {
            id: 256,
            name: "Nektar",
            slug: "nektar",
          },
          {
            id: 283,
            name: "Seydel",
            slug: "seydel",
          },
          {
            id: 258,
            name: "KRK",
            slug: "krk",
          },
        ],
      },
  ];
  return (
    <>
      <section id="footer">
        <div className="footer bg-ik_blue">
          <CustomContainer>
            <Grid container className="py-5">
              <Grid item xs={6} sm={6} md={2}>
                <div>
                  <p className="text-ik_pink-foreground font-medium text-[13px] text-white mb-2">
                    Services
                  </p>
                  <ul className="list-group">
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Artists</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Studio/Venues</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Shows</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Music Instrument Repair</Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <div>
                  <p className="text-ik_pink-foreground font-medium text-[13px] text-white mb-2">
                    Support
                  </p>
                  <ul className="list-group">
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Return / Cancellation</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Privacy Policy</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/">Terms &amp; Conditions</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/buy/faq">FAQ</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/" target="_blank">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <div>
                  <p className="text-f12 text-ik_pink-foreground font-medium text-[13px] text-white mb-2">
                    About Us
                  </p>
                  <ul className="list-group">
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/buy/who-is-iktaraa">Who is Iktaraa</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/buy/about-us">About Iktaraa</Link>
                    </li>
                    <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                      <Link href="/buy/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <p className="text-ik_pink-foreground font-medium text-[13px] text-white mb-2">
                  Sign Up for our Newsletter
                </p>
                <ul className="list-group">
                  <li className="text-f12 text-ik_pink-foreground font-normal py-2">
                    Stay tuned to the latest musical trends
                  </li>
                </ul>
                <form className="footer-sign-section flex gap-[5px]">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email ID"
                    className="max-h-[36px] w-full border-none outline-none text-[11px] p-[13px_9px_12px_9px] rounded-[4px] bg-white text-black"
                  />
                  <CustomButton
                    variant="task"
                    label={"SignUp"}
                    className="text-f12 font-semibold text-ik_pink-foreground"
                  />
                </form>
              </Grid>
            </Grid>
          </CustomContainer>
          <hr className="footerline-item mb-7" />
          <CustomContainer>
            <div className="row g-2">
              <div className="new-design-div-footer">
                {menus?.map((data: any, index: number) => {
                  return (
                    <Box
                      key={index}
                      onClick={(e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const path: any = {};
                        if (data.slug === "shop-by-brand") {
                          path.pathname = "/buy";
                        } else {
                          path.pathname = "/buy/category/" + data.slug;
                        }
                        router.push(path);
                      }}
                      className="flex flex-wrap divider-style footer-pointer items-center"
                    >
                      <span className="text-f12 text-ik_pink-foreground opacity-50">
                        {data.name}
                      </span>
                      {data.child?.map(
                        (child: any, childIndex: number, arr: any) => {
                          return (
                            <Fragment key={childIndex}>
                              <Box
                                className="flex items-center footer-pointer-new text-ik_pink-foreground opacity-20"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (data.slug === "shop-by-brand") {
                                    router.replace(`/buy/brands/` + child.slug);
                                  } else {
                                    router.replace(
                                      `/buy/category/` +
                                        data.slug +
                                        "/" +
                                        child.slug
                                    );
                                  }
                                }}
                              >
                                <span className="footer-category-child py-px px-1.5 text-f12">
                                  {child.name}
                                </span>
                                {childIndex !== arr.length - 1 && "/"}
                              </Box>
                              {child.innerchild?.map(
                                (arr: any, ChildIndex: number) => {
                                  return (
                                    <div
                                      key={ChildIndex}
                                      className="flex items-center footer-pointer py-px pl-1.5 text-ik_pink-foreground opacity-20"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        router.replace(
                                          `/buy/category/` +
                                            data.slug +
                                            "/" +
                                            child.slug +
                                            "/" +
                                            arr.slug
                                        );
                                      }}
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="footer-category-child text-f12">
                                          {arr.name}
                                        </span>
                                        <Divider
                                          orientation="vertical"
                                          flexItem
                                          className=" w-[2px] bg-white"
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </Fragment>
                          );
                        }
                      )}
                    </Box>
                  );
                })}
              </div>
            </div>
          </CustomContainer>
        </div>

        <div className="footer-bottom bg-ik_blue">
          <div className="container">
            <div className="col text-center text-light">
              <p className="text-ik_pink-foreground opacity-50 text-f12 py-5">
                Iktaraa Copyrights @ 2024 | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;

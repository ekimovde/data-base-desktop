import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ruLang from "vuetify/lib/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  lang: { locales: { ruLang }, current: ruLang },
  theme: {
    dark: false,
    options: { customProperties: true, variations: false },
    themes: {
      light: {
        "primary-background-1": "#EEEEEE",
        "primary-background-2": "#FDFDFD",
        "primary-background-3": "#EFF0F0",
        "primary-background-4": "#DDDCDD",

        "primary-text-1": "#AAAAA9",
        "primary-text-2": "#666766",
        "primary-text-3": "#000000",

        "primary-white-1": "#FFFFFF",
        "primary-black-1": "#000000",
        "primary-green-1": "#07BD60",
        "primary-green-2": "#007F61",
        "primary-green-3": "#00AC98",
        "primary-green-4": "#111F17",
        "primary-red-1": "#F64343",
        "primary-red-2": "#622626",
        "primary-red-3": "#51292C",
        "primary-red-4": "#462E30",
        "primary-blue-1": "#2A72FE",
        "primary-blue-2": "#016E90",
        "primary-blue-3": "#27A7CF",
        "primary-blue-4": "#0F1929",
        "primary-blue-5": "#243349",
        "primary-violet-1": "#3D378F",
        "primary-violet-2": "#8ca1e9",
        "primary-yellow-1": "#FFB039",
        "primary-yellow-2": "#513826",
      },
    },
  },
});

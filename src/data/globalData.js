// react-icons
import { GiSugarCane } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaIdeal } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

//// components

export const information = {
  pages: [],
  components: [
    {
      TopSectionHome: [
        { icon: GiSugarCane, title: "גני אירועים", link: "EventsGardens" },
        {
          icon: GiGlassCelebration,
          title: "אולמות אירועים",
          link: "EventHall",
        },
        { icon: GiAmpleDress, title: "שמלות כלה", link: "WeddingDress" },
        {
          icon: FaCameraRetro,
          title: "צילום אירועים",
          link: "EventsPhotography",
        },
        { icon: FiMusic, title: "די ג'יי", link: "Dj" },
        { icon: MdOutlineRestaurant, title: "קייטרינג", link: "Catering" },
        { icon: FaIdeal, title: "מבצעים", link: "WeddingDeals" },
        { icon: BsStar, title: "מיוחדים", link: "Stills" },
      ],
    },
  ],
  categoryFilters: [
    { title: "אני רוצה..", category1: "אולם", category2: "גן" },
    {
      title: "איפה ",
      category1: "איזור המרכז",
      category2: "איזור השרון",
      category3: "איזור הדרום",
      category4: "איזור הצפון",
      category5: "איזור ירושלים",
    },

    {
      title: "כמה מוזמנים",
      category1: "150-200",
      category2: "200-250",
      category3: "250-300",
      category4: "350-400",
      category5: "450-500",
    },
    { title: "מתי", category1: "קיץ", category2: "חורף" },
    {
      title: "כשרות",
      category1: "כשר",
      category2: "כשר למהדרין",
      category3: "לא כשר",
    },
  ],
};

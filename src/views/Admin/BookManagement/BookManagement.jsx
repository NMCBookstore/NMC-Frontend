import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";
import { useGetAllProductQuery } from "../../../services/productAPIs";

import { Typography } from "@mui/material";

const imgURL =
  "https://cdn0.fahasa.com/media/catalog/product/i/m/image_208370.jpg";

const datatableData = [
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe YYY",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
];

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function BookManagement() {
  const classes = useStyles();
  const { data: allProduct } = useGetAllProductQuery({
    page_id: 1,
    page_size: 24,
  });

  let testData = [
    {
        "id": 5,
        "name": "Think Again: The Power Of Knowing What You Don't Know",
        "price": 314000,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_235236.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_7-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_9-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_10-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_11-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/think_again_the_power_of_knowing_what_you_dont_know/2021_08_02_11_06_55_12-390x510.jpg"
        ],
        "description": "Think Again: The Power Of Knowing What You Don't Know\\nInstant #1 New York Times Bestseller\\nDiscover how rethinking can lead to excellence at work and wisdom in life\\nIntelligence is usually seen as the ability to think and learn, but in a rapidly changing world it might matter more that we can rethink and unlearn.\\nOrganizational psychologist Adam Grant is an expert on opening other people's minds-and our own. As Wharton's top-rated professor and the bestselling author of Originals and Give and Take, he tries to argue like he's right but listen like he's wrong.\", ''",
        "author": "Adam Grant",
        "publisher": "WH Allen",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 58,
        "name": "What Tech Calls Thinking: An Inquiry Into The Intellectual Bedrock Of Silicon Valley",
        "price": 248900,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_234029.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_7-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_9-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/what_tech_calls_thinking_an_inquiry_into_the_intellectual_bedrock_of_silicon_valley/2021_08_02_13_39_56_10-390x510.jpg"
        ],
        "description": "What Tech Calls Thinking: Inquiry Into The Intellectual Bedrock Of Silicon Valley\\nA New York Times Book Review Editors\\' Choice\\n\"In Daub’s hands the founding concepts of Silicon Valley don’t make money; they fall apart.\" --The New York Times Book Review\\nFrom FSGO x Logic: a Stanford professor\\'s spirited dismantling of Silicon Valley\\'s intellectual origins\\nAdrian Daub’s What Tech Calls Thinking is a lively dismantling of the ideas that form the intellectual bedrock of Silicon Valley. Equally important to Silicon Valley’s world-altering innovation are the language and ideas it uses to explain and justify itself. And often, those fancy new ideas are simply old motifs playing dress-up in a hoodie. From the myth of dropping out to the war cry of “disruption,” Daub locates the Valley’s supposedly original, radical thinking in the ideas of Heidegger and Ayn Rand, the New Age Esalen Foundation in Big Sur, and American traditions from the tent revival to predestination. Written with verve and imagination,  is an intellectual refutation of Silicon Valley\\'s ethos, pulling back the curtain on the self-aggrandizing myths the Valley tells about itself.', ''",
        "author": "Adrian Daub",
        "publisher": "FSG Originals",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 67,
        "name": "One Step Ahead",
        "price": 298300,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_234657.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_7-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_9-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_10-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_11-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_12-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_13-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_14-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_step_ahead/2021_08_02_13_58_31_15-390x510.jpg"
        ],
        "description": "One Step Ahead\\nThere's been a revolution in negotiating tactics.\\nThe world's best negotiators have moved beyond How to Win Friends & Influence People and Getting to Yes. For over twenty years. David Sally has been teaching the art of negotiation at leading business schools and to executives at top companies. Now, he delivers the proven, clear, actionable insights you need to stay competitive in an ever-changing marketplace.\\ Step Ahead offers the fundamental wisdom that elevates the sophisticated negotiator above everyone else. Readers will gain the advantage in everything from determining when to negotiate and deciphering a game strategically, to understanding which personality traits matter, why emotions are not necessarily to be avoided, and how to be tough and fair. You'll learn to be round on the outside and square on the inside, how to command the idiom, why to avoid bumping into the furniture, and how to achieve mastery of the word and the number. While all of life is not a negotiation, Sally says, a negotiation incorporates all of life-One Step Ahead is for anyone and everyone who bargains, parents, manages, buys, sells, emotes, and engages.\", ''",
        "author": "David Sally",
        "publisher": "St. Martin's Publishing Group",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 136,
        "name": "Tomorrow's Capitalist: My Search For The Soul Of Business",
        "price": 529150,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781541789081.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_7-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_9-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_10-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_11-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tomorrows_capitalist_my_search_for_the_soul_of_business/2022_09_16_11_53_15_12-390x510.jpg"
        ],
        "description": "Tomorrow's Capitalist: My Search For The Soul Of Business\\nIn an era of political and cultural extremism, America’s corporate leaders have emerged as the pragmatic center of a movement for social and economic progress.\\nThe core tenets of a capitalist system that dominated the world for more than a century are being challenged as never before. Narratives about the failures of capitalism, the greed of the 1 percent, and the blindness of corporations to public need have made their mark and are driving change. These aren’t the superficial cosmetic fixes that generated so much cynicism in the past, but a revolution in the way corporations are imagined and run. \", ''",
        "author": "Alan Murray, Catherine Whitney",
        "publisher": "PublicAffairs",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 159,
        "name": "Conquering the Seven Summits of Sales: From Everest to Every Business, Achieving Peak Performance",
        "price": 385700,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_26967.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_11-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_12-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_13-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_14-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/conquering_the_seven_summits_of_sales_from_everest_to_every_business__achieving_peak_performance/2022_11_04_16_53_51_15-390x510.jpg"
        ],
        "description": "Conquering the Seven Summits of Sales: From Everest to Every Business, Achieving Peak Performance\\nTwo experts who have summited the tallest mountains on each of the seven continents—and scaled the highest peaks in corporate sales—examine what it takes to achieve sales success, drawing on the techniques and determination it takes to climb the world’s highest peaks.\\nWhen Susan Ershler and John Waechter each made the grueling journey to the top of Mount Everest, they were motivated by the desire to join the elite group of climbers that had conquered the Seven Summits, the highest peaks on each of the seven continents. It was this same determination that made them star performers in corporate sales, one of the toughest jobs in global business. They both cherish the deep satisfaction that only comes from attaining a seemingly impossible goal through focus, determination, and persistence.', ''",
        "author": "Susan Ershler, John Waechter",
        "publisher": "Harper Business",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 166,
        "name": "You're It: Crisis, Change, And How To Lead When It Matters Most",
        "price": 328700,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781541768048.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_11-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_12-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_13-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_14-390x510.png"
        ],
        "description": "You're It: Crisis, Change, And How To Lead When It Matters Most\\nThe faculty of the National Preparedness Leadership Initiative at Harvard University distill their extensive research and experience to teach you how to become a better leader every day, while giving you the tools to handle the inevitable crises that come your way.\", ''",
        "author": "Leonard J. Marcus, Eric J. McNulty, Joseph M. Henderson, Barry C. Dorn",
        "publisher": "PublicAffairs",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 256,
        "name": "You're It: Crisis, Change, And How To Lead When It Matters Most",
        "price": 328700,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781541768048.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_11-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_12-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_13-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/youre_it_crisis__change__and_how_to_lead_when_it_matters_most/2022_09_15_14_22_45_14-390x510.png"
        ],
        "description": "You're It: Crisis, Change, And How To Lead When It Matters Most\\nThe faculty of the National Preparedness Leadership Initiative at Harvard University distill their extensive research and experience to teach you how to become a better leader every day, while giving you the tools to handle the inevitable crises that come your way.\", ''",
        "author": "Leonard J. Marcus, Eric J. McNulty, Joseph M. Henderson, Barry C. Dorn",
        "publisher": "PublicAffairs",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 258,
        "name": "The Best Business Books Ever",
        "price": 309700,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780465022366.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_03_09_32_37_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_best_business_books_ever/2022_11_04_17_03_33_10-390x510.png"
        ],
        "description": "The Best Business Books Ever\\nEvery manager could benefit from a solid grounding in the history and evolution of business thinking. The Best Business Books Ever is a uniquely organized guide and an illuminating collection of key ideas from the 130 most influential business books of all time. It places both historical and contemporary works in context and draws fascinating parallels and points of connection. Now fully revised and more than 30 percent bigger, this one book highlights the information you need to know and why it's important to know it, and does it all in a succinct, time-saving fashion. Business moves faster than ever these days. For the businessperson who has a growing list of tomes that they can never quite seem to get to, The Best Business Books Ever is a must-have.\", ''",
        "author": "Basic Books",
        "publisher": "Basic Books",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 283,
        "name": "Diary Of A Wimpy Kid: Diper Överlöde (Book 17)",
        "price": 280250,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780241583081.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_11-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_12-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/diary_of_a_wimpy_kid_diper_verlde_book_17/2022_11_09_15_11_42_13-390x510.png"
        ],
        "description": "Diary Of A Wimpy Kid: Diper Överlöde (Book 17)', ''",
        "author": "Jeff Kinney",
        "publisher": "Penguin Random House Children's UK",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 5
    },
    {
        "id": 303,
        "name": "My Little Book Of Animal Stories",
        "price": 60800,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780709728085.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/y/my_little_book_of_animal_stories_1_2020_12_17_16_11_57.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/y/my_little_book_of_animal_stories_2_2020_12_17_16_11_57.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/y/my_little_book_of_animal_stories_3_2020_12_17_16_11_57.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/y/my_little_book_of_animal_stories_4_2020_12_17_16_11_57.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/y/my_little_book_of_animal_stories_5_2020_12_17_16_11_57.jpg"
        ],
        "description": "My Little Book Of Animal Stories\\nThe colourful illustrations work along side the text and encourage word recognition. These books are invaluable tools for you and your child to learn to read together.', ''",
        "author": "Brown Watson",
        "publisher": "Brown Watson",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 329,
        "name": "Peppa Pig: Little Library",
        "price": 124450,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_173829.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/peppa_pig_little_library/2021_12_14_15_21_56_7-390x510.jpg"
        ],
        "description": "Little piglets will adore the Peppa Pig Little Library. The Peppa Pig Little Library is a charming collection of six chunky mini books, based on your favourite characters from Peppa Pig and presented in a beautiful slipcase box. The perfect gift for pre-school children and fans of the show. The backs of the six books make a jigsaw, which is perfect for little hands to play with. The Peppa Pig range of books are fun, interactive and educational, ideal for encouraging children to start to read by themselves. Titles available from Ladybird include: Peppa Pig Fairy Tale Little Library, Peppa Goes Camping, Peppa Goes Swimming and Peppa's Space Trip.\", ''",
        "author": "Ladybird",
        "publisher": "Penguin Books Ltd",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 330,
        "name": "Pocket Edition 100 Facts Oceans",
        "price": 55100,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_13386.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pocket_edition_100_facts_oceans_1_2022_11_16_16_36_12.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pocket_edition_100_facts_oceans_2_2022_11_16_16_36_12.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pocket_edition_100_facts_oceans_3_2022_11_16_16_36_12.jpg"
        ],
        "description": "Pocket Edition 100 Facts Oceans\\nDive into our awesome blue planet with this handy pocket-sized book thats bursting with giant facts. From rocky shorelines to the deep sea floor, explore the vastness of oceans why the tide comes in and out, life beneath the waves and how humans use oceans for resources and travel. Exactly 100 numbered facts will challenge children alongside absorbing images and projects that make this the perfect introduction to this truly fascinating topic.', ''",
        "author": "Clare Oliver",
        "publisher": "Miles Kelly Publishing Ltd",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 338,
        "name": "The Boy in the Striped Pyjamas",
        "price": 169100,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_25610.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781862305274-1.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_35975.jpg"
        ],
        "description": "Lines may divide us, but hope will unite us ...Nine-year-old Bruno knows nothing of the Final Solution and the Holocaust. He is oblivious to the appalling cruelties being inflicted on the people of Europe by his country. All he knows is that he has been moved from a comfortable home in Berlin to a house in a desolate area where there is nothing to do and no one to play with. Until he meets Shmuel, a boy who lives a strange parallel existence on the other side of the adjoining wire fence and who, like the other people there, wears a uniform of striped pyjamas. Bruno's friendship with Shmuel will take him from innocence to revelation. And in exploring what he is unwittingly a part of, he will inevitably become subsumed by the terrible process.\", ''",
        "author": "John Boyne",
        "publisher": "Definitions",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 368,
        "name": "Wild Animals Sound Book (Usborne Sound Books)",
        "price": 286900,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781474991803.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/w/i/wild_animals_sound_book_usborne_sound_books_1_2022_10_21_14_11_16.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/w/i/wild_animals_sound_book_usborne_sound_books_2_2022_10_21_14_11_16.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/w/i/wild_animals_sound_book_usborne_sound_books_3_2022_10_21_14_11_16.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/w/i/wild_animals_sound_book_usborne_sound_books_4_2022_10_21_14_11_16.jpg"
        ],
        "description": "Wild Animals Sound Book (Usborne Sound Books)\\nFrom a wolf howling on a remote mountaintop to a macaw squawking in the deepest jungle, this engrossing sound book takes children on a journey to some of the wildest places on Earth and lets them hear the amazing animals who live there. There are ten different wild animals to hear, including a hippo, a camel, a tapir, a meerkat and a reindeer. Holes in the pages and finger trails to follow create a tactile world for little children to explore while they're listening.\", ''",
        "author": "Sam Taplin",
        "publisher": "Usborne",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 374,
        "name": "Earn It!: Learn Simple Money Lessons (A Moneybunny Book)",
        "price": 170050,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780241527498.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/e/a/earn_it_learn_simple_money_lessons_a_moneybunny_book_1_2022_06_01_14_21_47.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/e/a/earn_it_learn_simple_money_lessons_a_moneybunny_book_2_2022_06_01_14_21_47.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/e/a/earn_it_learn_simple_money_lessons_a_moneybunny_book_3_2022_06_01_14_21_47.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/e/a/earn_it_learn_simple_money_lessons_a_moneybunny_book_4_2022_06_01_14_21_47.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/e/a/earn_it_learn_simple_money_lessons_a_moneybunny_book_5_2022_06_01_14_21_47.jpg"
        ],
        "description": "Earn It!: Learn Simple Money Lessons (A Moneybunny Book)', ''",
        "author": "Cinders McLeod",
        "publisher": "Ladybird",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 376,
        "name": "The Wild West (100 Facts)",
        "price": 55100,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_23754.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781848102408-1.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781848102408-2.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_1_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_2_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_3_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_4_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_5_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_6_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_7_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_8_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_9_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_10_2018_11_07_11_04_01.JPG",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_1_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_2_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_3_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_4_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_5_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_6_2018_11_20_23_10_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_7_2018_11_20_23_10_19.png",
            "https://cdn0.fahasa.com/media/catalog/product/t/h/the_wild_west_100_facts_8_2018_11_20_23_10_19.jpg"
        ],
        "description": "100 Facts The Wild West is bursting with awesome facts, images and fun activities to help children learn all about life on the American Frontier.\\nKids learn more easily with bitesized information\\nPhotographs and artworks aid children who learn through visual prompts\\nActivities allow children to put what they have learned into practice\\n100 Facts The Wild West contains key topics about the history of this American territory in concise, interesting numbered facts. Information is accompanied by amazing illustrations and photographs that put unbelievable facts into context for young learners.\\n  Pages: 48\\nAge: 7+\\nSize: 297 x 228 mm', ''",
        "author": "Andrew Langley",
        "publisher": "Miles Kelly Publishing",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 383,
        "name": "Diary of a Wimpy Kid: Old School (Diary of a Wimpy Kid 10)",
        "price": 145350,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780141377094-2.jpg",
            "https://www.youtube.com/watch?v=VKhCPUa-glo",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9780141377094-1.jpg"
        ],
        "description": "Life was better in the old days. Or was it?\\nThat's the question Greg Heffley is asking as his town voluntarily unplugs and goes electronics-free. But modern life has its conveniences, and Greg isn't cut out for an old-fashioned world.\\nWith tension building inside and outside the Heffley home, will Greg find a way to survive? Or is going 'old school' just too hard for a kid like Greg?\\nPraise for Jeff Kinney:\", ''",
        "author": "Jeff Kinney",
        "publisher": "Puffin",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 389,
        "name": "Archie: Modern Classics Magic",
        "price": 159600,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781645769071.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_6-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_7-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_8-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_9-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_10-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_11-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_12-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/archie_modern_classics_magic/2022_09_19_16_32_47_13-390x510.jpg"
        ],
        "description": "Archie: Modern Classics Magic', ''",
        "author": "Archie Superstars",
        "publisher": "Archie Comics",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 405,
        "name": "Usborne English Readers Starter Level: The Enormous Turnip",
        "price": 154850,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781474983792.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/u/s/usborne_english_readers_starter_level_the_enormous_turnip_1_2022_09_09_11_09_58.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/u/s/usborne_english_readers_starter_level_the_enormous_turnip_2_2022_09_09_11_09_58.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/u/s/usborne_english_readers_starter_level_the_enormous_turnip_3_2022_09_09_11_09_58.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/u/s/usborne_english_readers_starter_level_the_enormous_turnip_4_2022_09_09_11_09_58.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/u/s/usborne_english_readers_starter_level_the_enormous_turnip_5_2022_09_09_11_09_58.jpg"
        ],
        "description": "Usborne English Readers Starter Level: The Enormous Turnip\\nA popular European folktale retold for young English language learners, with bright, appealing illustrations packed with detail. Sara loves visiting her grandparents and helping in her grandmother's magnificent kitchen garden. When Grandmother tries to harvest one prodigiously huge turnip, she needs all the help she can get... A delightful cumulative story, originally from Russia. With fun activities after the story, and online audio in both British English and American English.\", ''",
        "author": "Mackinnon Mairi",
        "publisher": "Usborne",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 413,
        "name": "Pop-Up Peekaboo! Space",
        "price": 154850,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_1_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_2_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_3_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_4_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_5_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_6_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_7_2020_01_14_08_26_19.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/p/o/pop_up_peekaboo_space_8_2020_01_14_08_26_19.jpg"
        ],
        "description": "Pop-Up Peekaboo! Space\\nTake an intergalactic and interactive ride with Pop Up Peekaboo! Space... Fly to the Moon with your little one in this lift-the-flap baby book with pictures that pop off the page! This imaginative pop-up peekaboo picture book follows two little astronauts, Daisy and Danny, who are rocketing into space, past the stars and planets, and heading for their first Moon landing. Babies and toddlers can lift the flaps and see surprises pop up from every page. From the space rocket launching, to a funny alien spaceship, finishing with Daisy, Danny, and their robot landing on the Moon, and planting a flag with a friendly message from Planet Earth. The lively, read-aloud rhymes encourage literacy and early learning, while the pop-up space scenes hold the attention of curious preschoolers. With the help of parents and caregivers, toddlers will have fun turning the sturdy board book pages, guessing what's hiding under each flap, and then lifting the flaps to find the space characters and play peekaboo! Ideal for interactive preschool play, Pop-up Peekaboo! Space will appeal to both parents and children and is certain to keep little ones entertained time and time again!\", ''",
        "author": "DK",
        "publisher": "DK Children",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 447,
        "name": "Mummies (100 Facts)",
        "price": 55100,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_23752.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781848101067-1.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781848101067-2.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_1_2018_11_20_23_08_02.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_2_2018_11_20_23_08_02.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_3_2018_11_20_23_08_02.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_4_2018_11_20_23_08_02.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_5_2018_11_20_23_08_02.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_6_2018_11_20_23_08_02.png",
            "https://cdn0.fahasa.com/media/catalog/product/m/u/mummies_100_facts_7_2018_11_20_23_08_02.jpg"
        ],
        "description": "100 Facts Mummies is a bursting with fascinating facts, unbelievable images and fun activities to help children learn everything they need to know about mummies.\\nKids learn more easily with bitesized information\\nPhotographs and artworks aid children who learn through visual prompts\\nActivities allow children to put what they have learned into practice\\n100 Facts Mummies includes key topics about the ancient practice of mummification in simple numbered facts. Every page is covered in fantastic illustrations and photographs that support a child's understanding of the text. This mummy book for kids covers the rituals and history of ancient Egypt, Peru, Asia and North America.\\n  Pages: 48\\nAge: 7+\\nSize: 297 x 228 mm\", ''",
        "author": "John Malam",
        "publisher": "Miles Kelly Publishing",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 473,
        "name": "The Owl Who Was Afraid Of The Dark",
        "price": 132050,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781405201773.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_1-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_2-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_3-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_4-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_5-390x510.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_owl_who_was_afraid_of_the_dark/2022_08_22_15_38_12_6-390x510.jpg"
        ],
        "description": "The Owl Who Was Afraid Of The Dark\\nA gorgeously illustrated picture book edition of the beloved classic children's story about overcoming fears.\\nHRH the Duchess of Cambridge will be reading The Owl Who Was Afraid of the Dark on CBeebies Bedtime Stories on Sunday 13th February as part of Children’s Mental Health Week.\\nPlop, the baby owl, is like every barn owl there ever was, except for one thing – he is afraid of the dark . . .\", ''",
        "author": "Jill Tomlinson, Paul Howard",
        "publisher": "Farshore",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 480,
        "name": "Lego Star Wars: Build Your Own Adventure",
        "price": 402800,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_1_2019_01_02_15_48_06.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_2_2019_01_02_15_48_06.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_3_2019_01_02_15_48_06.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_4_2019_01_02_15_48_06.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_5_2019_01_02_15_48_06.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/l/e/lego_star_wars_build_your_own_adventure_6_2019_01_02_15_48_06.jpg"
        ],
        "description": "This awesome LEGO® Star Wars™ book combines more than 50 inspirational LEGO building ideas with enthralling story starters. Get inspired to build, then play out your own adventures using your LEGO bricks. Comes with a rebel pilot minifigure and LEGO bricks to build an exclusive Y-wing starfighter model that features in the book.\\nFrom a podrace on Tatooine to a jailbreak on Bespin each chapter of LEGO Star Wars Build your Own Adventure is packed with inspirational model ideas ideal for all ages and building abilities, with a mix of easy, medium and harder models.\\nLEGO, the LEGO logo, the Brick and Knob configurations and the Minifigure are trademarks of the LEGO Group. ©2016 The LEGO Group. All rights reserved. \\nProduced by DK Publishing under license from the LEGO Group.', ''",
        "author": "DK,Daniel Lipkowitz",
        "publisher": "Dorling Kindersley Ltd",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 512,
        "name": "The Rema Chronicles #1: Realm Of The Blue Mist: A Graphic Novel",
        "price": 224200,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781338115130.jpg",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_1-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_2-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_3-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_4-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_5-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_6-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_7-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_8-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_9-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_10-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_11-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_12-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_13-390x510.png",
            "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/the_rema_chronicles__1_realm_of_the_blue_mist_a_graphic_novel/2022_12_28_11_19_34_14-390x510.png"
        ],
        "description": "The Rema Chronicles #1: Realm Of The Blue Mist: A Graphic Novel\\nEnter the rich and fantastical world of Rema in the first installment of this middle-grade graphic novel series with sweeping adventure and light romance!\\nTabby Simon is determined to learn what happened to her father, who was found dead after researching a tree that leaks a mysterious mist in her neighborhood. She is unexpectedly led to Rema, a distant world of magic and beauty that is periodically invaded by a nearby planet desperate for resources. While Tabby searches for the truth surrounding her father's death, she meets a handsome blue-haired boy named Philip. He has his own dangerous secrets, but has promised to help Tabby get home. As she learns more about this strange world, Tabby discovers that she is destined for something far greater than she ever could have imagined.\", ''",
        "author": "Amy Kim Kibuishi",
        "publisher": "Scholastic US",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    },
    {
        "id": 534,
        "name": "100 Children's Crosswords: Holiday",
        "price": 110200,
        "image": [
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9781474997966.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/1/0/100_childrens_crosswords_holiday_1_2022_09_12_10_26_23.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/1/0/100_childrens_crosswords_holiday_2_2022_09_12_10_26_23.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/1/0/100_childrens_crosswords_holiday_3_2022_09_12_10_26_23.jpg",
            "https://cdn0.fahasa.com/media/catalog/product/1/0/100_childrens_crosswords_holiday_4_2022_09_12_10_26_23.jpg"
        ],
        "description": "100 Children's Crosswords: Holiday\\nTest your knowledge with over 100 holiday-themed crosswords, covering everything from camping and cities to tropical islands and famous landmarks. The crosswords gradually get harder throughout the book, and are perfect for popping in a suitcase, for long journeys and playing with friends and family. All the answers are at the back of the book.\", ''",
        "author": "Phillip Clarke, Pope Twins",
        "publisher": "Usborne",
        "quantity": 100,
        "created_at": "2023-04-23T15:30:52.491404Z",
        "rating": 0
    }
]

  const columns = [
    {
      name: "id",
      label: " ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: " Book name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "author",
      label: "Author",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "publisher",
      label: "Publisher",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      console.log("Row clicked:", rowData);
    },
    serverSide: true
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" my={3}>
            List of book
          </Typography>
          <MUIDataTable
            title="Book Data List"
            data={allProduct}
            onRowClick={() => console.log("this clicked")}
            columns={columns}
            options={
              //   filterType: "checkbox",
              options
            }
          />
        </Grid>
      </Grid>
    </>
  );
}

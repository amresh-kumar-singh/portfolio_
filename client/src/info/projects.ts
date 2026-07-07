export default [
  {
    name: "URL Shortner",
    shortDetail: "Full Stack MERN SPA",
    details:
      "URL Shortner generates a unique Base 58 Short URL. NodeJs server continuously checks if a URL is not used for a long time then it removes it from the Mongo database. Users can save their URLs by logging in. Users also have a limit on the number of URLs they can shorten in a specific period of time. ",
    pic: "url",
    repo: "https://github.com/akmr-me/url-shortner.git",
    demo: "https://www.akmr.me",
  },
  {
    name: "Plug-n-Play Workflow Builder",
    shortDetail: "Custom automation platform",
    details:
      "A visual workflow automation platform that allows users to create, manage, and schedule tasks using a node-based interface. Built with Next.js, FastAPI, PostgreSQL, and LangGraph, this SaaS supports triggers, background scheduling, API/webhook integration, error handling, credential management, and real-time execution.",
    pic: "plugnplay", // update image asset accordingly
    repo: "https://github.com/akmr-me/plugnplay", // change to actual repo if public
    demo: "https://plugnplay.cc/", // change to actual domain
  },
  {
    name: "Formly",
    shortDetail: "Typeform-style form builder",
    details:
      "A block-based form builder with draft/publish snapshots and a one-question-per-page submission experience. Includes a visual builder with live preview, JWT auth, owner dashboard with CSV export, and production deployment via Docker Compose and Nginx. Built with Next.js 15, React 19, Express 5, PostgreSQL, Prisma, and Kysely.",
    pic: "formly.png",
    repo: "https://github.com/akmr-me/Formly",
    demo: "https://formly.akmr.me",
  },
  {
    name: "29 Playing Card Game",
    shortDetail: "",
    details:
      "Played in a group of four people, 29 is a strategic game that tests players' ability to think ahead of time and make the right decision. In this app, a single player can play with the bot. This app is also a PWA and can be installed for a better gaming experience.",
    pic: "29",
    repo: "https://github.com/akmr-me/29",
    demo: "https://game.akmr.me",
  },
];

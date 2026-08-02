import { getCurrentPage } from "./state.js";

import { Hero } from "../components/Hero/Hero.js";
import { About } from "../components/About/About.js";
import { Resume } from "../components/Resume/Resume.js";
import { Timeline } from "../components/Timeline/Timeline.js";
import { Gallery } from "../components/Gallery/Gallery.js";
import { Family } from "../components/Family/Family.js";
import { Contact } from "../components/Contact/Contact.js";
import { Achievements } from "../components/Achievements/Achievements.js";
import { Projects } from "../components/Projects/Projects.js";

export function renderCurrentPage() {

    const page = getCurrentPage();

    switch (page) {

        case "home":
            return Hero();

        case "about":
            return About();

        case "experience":
            return Timeline();

        case "projects":
            return Achievements();

        case "resume":
            return Resume();

        case "gallery":
            return Gallery();

        case "family":
            return Family();

        case "contact":
            return Contact();

        case "projects":
            return Projects();

        default:
            return Hero();

    }

}
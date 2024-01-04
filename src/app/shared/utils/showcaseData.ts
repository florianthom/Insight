import { Showcase } from "../models/Showcase"

const topnotch: Showcase = {
    title: "Topnotch: Worlds state of the art - Whats your take?",
    description: "Web application to get an overview about worlds state of the art across various global domains, providing insights into the cutting- edge technologies, innovations, and trends shaping the contemporary world. You ever wanted whats the best bike for tracking or whats the best family car and why - here you are at the right place.",
    imagePath: "/static/images/topnotch-logo.png",
}

const lebenserinnerungen: Showcase = {
    title: "Verein zur Förderung lebensgeschichtlichen Erinnerns und biografischen Erzählens e.V.",
    description: "Promotion of personal, verbal storytelling and providing suitable formats, methods, storytelling occasions, and educational offerings. Storytelling builds bridges and connects. Stories are the threads that bring people from different worlds and times together.",
    imagePath: "/static/images/lebenserinnerungen.png",
}

const cloudTemplate: Showcase = {
    title: "Cloud Architecture Solution Template",
    description: "Cloud Architecture Solution Template: A starting point for cloud applications with terraform and ansible. AWS cluster solution utilizing aws eks with focus on secrurity and scalability.",
    imagePath: "/static/images/infra-aws.png",
}

const ptolemy: Showcase = {
    title: "Ptolomy Venture",
    description: "Exploring an array of map visualizations crafted using diverse tools not only illustrates the breadth of available cartographic techniques but also highlights the nuanced ways geographical data can be portrayed and analyzed.",
    imagePath: "/static/images/map-visualization.png",
}

interface ShowcaseData {
    topnotch: Showcase,
    lebenserinnerungen: Showcase,
    cloudTemplate: Showcase,
    ptolemy: Showcase,
}
export const showcaseData: ShowcaseData = {
    topnotch,
    lebenserinnerungen,
    cloudTemplate,
    ptolemy
}

import Leo from "leo";

import CurriculumVitae from "curriculum-vitae"

import { translateCurriculum } from "../utils/localization";

export default LeonardoCunhaCV = (😄) => {

const {🏀, 🎮, 💻} = 😄;

const 🦁 = new Leo(🏀, 🎮, 💻);

const 🎨 = 🦁.getFrontendSkills();

const 🚚 = 🦁.getBackendSkills();

const 📄 = 🦁.getPastProjects();

const 📦 = translateCurriculum("PT-BR", {🦁, 🎨, 🚚, 📄});
return new CurriculumVitae(...📦);

}

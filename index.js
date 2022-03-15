import info from "./information.cjs"
import cowsay from "cowsay"

console.log(cowsay.say({
    text:`I'm ${info.info.nom} from ${info.info.campus}`
}))

console.log(info)
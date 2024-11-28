import Image from "next/image";
import PreEnem from "/public/img/preenem.jpg"
import "./goal.css";

export default function Goal() {
    return(
      <div className="p-12 flex">
        <div>
            <Image
            className="w-card h-card object-cover rounded-lg	"
            src={PreEnem}
            alt="Pre Enem"
            />
        </div>
        <div>
            <h1>Nossa Missão</h1>

            <div className="container">
            <div>
            <h2>1</h2> 
            <h2>Empoderamento</h2> 
            <h3>Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.</h3>
            </div>

            <div>
            <h2>2</h2> 
            <h2>Empoderamento</h2> 
            <h3>Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.</h3>
            </div>

            <div>
            <h2>3</h2> 
            <h2>Empoderamento</h2> 
            <h3>Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.</h3>
            </div>
            </div>
        </div>
      </div>
    )
}
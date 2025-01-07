import "./goal.css";

export default function Goal() {
  return (
    <div className="p-12 flex">
      <div className="goal">
        <h1 className="font-extrabold text-5xl">Nossa Missão</h1>

        <div className="container pl-24">
          <div className="max-w-48">
            <div className="flex py-4 items-center">
              <h2 className="detail-border rounded-lg font-black	">1</h2>
              <h2 className="pl-4 font-extrabold">Empoderamento</h2>
            </div>
            <h3>Capacitar indivíduos e famílias a alcançarem sua independência e prosperidade.</h3>
          </div>

          <div>
            <div className="flex py-4 items-center">
              <h2 className="detail-border rounded-lg font-black">2</h2>
              <h2 className="pl-4 font-extrabold">Impacto Sustentável</h2>
            </div>
            <h3 className="max-w-56">Criar soluções duradouras que gerem transformações positivas na comunidade.</h3>
          </div>

          <div className="thirtgrid">
            <div className="flex py-4 items-center">
              <h2 className="detail-border rounded-lg font-black">3</h2>
              <h2 className="pl-4 font-extrabold">Conexão Social</h2>
            </div>
            <h3>Fortalecer os laços e a coesão social, promovendo a inclusão e o pertencimento.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function places() {
    return (
        <div className="w-full text-white p-12 place flex background">
            <div className="flex flex-col justify-center h-full w-full">
                <h1 className="font-bold pb-16 text-5xl	max-w-xl">Conheça nosso espaço</h1>
                <div className="flex justify-between">
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="pb-12">Rua Quinquim do Mandú, 480 - Guanabara</h2>
                        <h2 className="pb-12">Rua Cruzeiro do Sul, 775 - Novo Progresso</h2>
                        <h2 className="pb-12">Rua Cruzeiro do Sul, 775 - Novo Progresso</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex pb-4">
                            <div className="tour-input flex">
                                <input className="w-24 h-10 secondary-color rounded-l-full" type="button" value="Tour" />
                            </div>
                            <div className="border"></div>
                            <input className="w-24 h-10 secondary-color rounded-r-full" type="button" value="Mapa" />
                        </div>
                        <iframe src="https://app.lapentor.com/sphere/teste-1731297351" frameBorder="0" className="virtual-tour rounded-lg relative" allow="vr,gyroscope,accelerometer" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}
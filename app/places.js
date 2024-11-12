'use client'
export default function places() {
    function turnToTour() {
     const tour = document.getElementById("tour");
     tour.style.display = "flex";

     const map = document.getElementById("map");
     map.style.display = "none";
    }
    function turnToMap() {
        const map = document.getElementById("map");
    map.style.display = "flex";

    const tour = document.getElementById("tour");
    tour.style.display = "none";
    }
    

    return (
        <div className="w-full text-white p-12 place flex background">
            <div className="flex flex-col justify-center h-full w-full">
                <h1 className="font-bold pb-16 text-5xl pt-8 max-w-xl">Conheça nosso espaço</h1>
                <div className="flex justify-between">
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="pb-12">Rua Quinquim do Mandú, 480 - Guanabara</h2>
                        <h2 className="pb-12">Rua Cruzeiro do Sul, 775 - Novo Progresso</h2>
                        <h2 className="pb-12">Rua Bragança, 197 - Novo Progresso</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex pb-4">
                            <div className="tour-input flex">
                                <input className="w-24 h-10 secondary-color rounded-l-full" id="tour-button" onClick={turnToTour} type="button" value="Tour" />
                            </div>
                            <div className="border"></div>
                            <input className="w-24 h-10 secondary-color rounded-r-full" id="map-button" onClick={turnToMap} type="button" value="Mapa" />
                        </div>
                        <div className="flex">
                        <iframe className="virtual-tour rounded-lg relative tour" id="tour" src="https://app.lapentor.com/sphere/teste-1731297351" frameBorder="0" allow="vr,gyroscope,accelerometer" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
                        <iframe className="virtual-tour rounded-lg relative map" id="map" src="https://www.openstreetmap.org/export/embed.html?bbox=-44.03257548809052%2C-19.88752736805444%2C-44.02969211339951%2C-19.88609220245527&amp;layer=mapnik&amp;marker=-19.886809786880335%2C-44.03113380074501" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
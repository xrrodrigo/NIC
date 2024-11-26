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
                        <h2 className="pb-12">Rua Bragança, 197 - Novo Progresso</h2>
                        <h2 className="pb-12">Rua Cruzeiro do Sul, 775 - Novo Progresso</h2>
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
                        <iframe
                        className="virtual-tour rounded-lg relative map"
                        id="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8881356422435!2d-44.0338279238863!3d-19.88694493697109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6940f2fd3ebd5%3A0x15979d3932af02e3!2sR.%20Quinquim%20do%20Mand%C3%BA%2C%20480%20-%20Guanabara%2C%20Contagem%20-%20MG%2C%2032145-560!5e0!3m2!1spt-BR!2sbr!4v1731949397423!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
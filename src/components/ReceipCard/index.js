import { Link } from "react-router-dom";


function ReceipCardView(props) {
    return (
        <Link to={`/receita/${props.id}`} className="flex w-full h-full items-center justify-center">
            <div className="flex items-center w-3/12 h-full justify-start">
                <div className="flex flex-row h-full w-1/12 items-start justify-start text-2xl">
                    {props.id}
                </div>
                <div>
                    <img className="rounded-2xl" src={props.imagem} width={300} height={300} alt="Imagem da comida" />
                </div>
            </div>
            <div className="flex flex-row pl-10 w-2/12 items-center justify-start gap-3 font-semibold text-lg">
                {props.nome}
            </div>
        </Link>
    );
}

export default ReceipCardView;

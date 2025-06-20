import { ChessPieces } from "../ChessPiece";
import Image from "next/image";
import { Vector2 } from "../Vector";

export enum ChessSquareColor {
    BLACK,
    WHITE,
}

export default function ChessSquare({ color, position, /*setCurrentPos,*/ gamePos }: { color: ChessSquareColor, position: Vector2, /*setCurrentPos: (pos: Vector2) => void,*/ gamePos: string }) {
    return (
        <div className={`chess_square chess_square_${color == ChessSquareColor.BLACK ? "black" : "white"}`} style={{
            // backgroundColor: color == ChessSquareColor.BLACK ? "#8A2D3B" : "#FBDB93",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }} /*onClick={onClick}*/
        /*onMouseMove={(event) => {
            setCurrentPos(position);
        }}*/
        >
            {/* {piece == ChessPieces.PAWN ? <img src="/pawn-w.svg" draggable="false" style={{
                width: "100%",
                height: "100%",
            }} /> : ""} */}
        {position.x}{position.y}
        <br/>
        {gamePos}
        </div>
    );
}
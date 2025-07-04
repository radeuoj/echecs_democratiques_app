import { createContext, useContext } from "react";
import { Vector2 } from "./components/Vector";

interface ChessPieceContextData {
    getCurrentPos: () => Vector2, 
    getBoundingClientRect: () => DOMRect,
    playingAsWhite: boolean,
    requestMove: (from: Vector2, to: Vector2) => boolean,
    setActivePiece: (pos: Vector2) => void,
}

export const ChessPieceContext = createContext<ChessPieceContextData | undefined>(undefined);

export function useChessPieceContext(): ChessPieceContextData {
    const chessPieceContext = useContext(ChessPieceContext);

    if (chessPieceContext == undefined) {
        throw new Error("ChessPieceContext is undefined!!!!");
    }

    return chessPieceContext;
}
import React from "react";
import Modal from "../Modal/Modal";

export default function AboutModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h1>About Gomoku</h1>

            <h2>What You Need to Play Gomoku</h2>
            <p>
                In Europe, Five in a Row is usually played with pencil and paper. In many other parts of the world,
                it is played with Go stones (black and white pieces) on a Go board. The board is typically 15 × 15,
                17 × 17, or 19 × 19 squares.
            </p>

            <h2>Rules</h2>
            <p>
                Players take turns placing their pieces on the board. The first player to get five pieces in a row
                vertically, horizontally, or diagonally wins the game. Pieces are never removed, and if the board
                becomes completely filled without a winner, the game ends in a draw.
            </p>
        </Modal>
    );
}
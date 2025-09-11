import Header from "./Header";

export default {
    title: "Components/Header",
    component: Header,
};

export const Default = {
    args: {
        currentPlayer: "X", 
    },
};

export const O = {
    args: {
        currentPlayer: "O", 
    },
};

export const Winner = {
    args: {
        currentPlayer: "🎉 Spelare X vann!",
    },
}; 



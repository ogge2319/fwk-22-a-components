import AboutModal from "./AboutModal";

export default {
    title: "Components/AboutModal",
    component: AboutModal,
};

export const Default = {
    args: {
        isOpen: true,
        onClose: () => console.log("About modal closed"),
    },
};

export const Closed = {
    args: {
        isOpen: false,
        onClose: () => console.log("About modal closed"),
    },
};
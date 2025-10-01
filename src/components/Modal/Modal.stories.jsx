import Modal from "./Modal";

export default {
    title: "Components/Modal",
    component: Modal,
};

export const Default = {
    args: {
        isOpen: true,
        onClose: () => console.log("Modal closed"),
        children: (
            <div>
                <h1>Modal Title</h1>
                <p>This is the modal content. You can put any content here.</p>
                <p>Click the X button or outside the modal to close it.</p>
            </div>
        ),
    },
};

export const WithLongContent = {
    args: {
        isOpen: true,
        onClose: () => console.log("Modal closed"),
        children: (
            <div>
                <h1>Long Content Modal</h1>
                <p>This modal demonstrates how long content is handled with scrolling.</p>
                {Array.from({ length: 20 }, (_, i) => (
                    <p key={i}>
                        This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                ))}
            </div>
        ),
    },
};
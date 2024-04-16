import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export type Props = {
    onClick: () => void;
}

export const ChatModal = () => {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button style={{ position: 'fixed', bottom: '20px', right: '20px', borderRadius: '50%', width: '60px', height: '60px' }}>
                        Chat
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', inset: 0 }} />
                    <Dialog.Content style={{ position: 'fixed', bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)', backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
                        <Dialog.Title>Chat with Us</Dialog.Title>
                        <Dialog.Description>
                            This is our chat window. Ask us anything!
                        </Dialog.Description>
                        <Dialog.Close asChild>
                            <button>Close</button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            <p>Component works</p>
        </>
    );
};

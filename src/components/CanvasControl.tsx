
import { HiCheckCircle, HiTrash } from 'react-icons/hi';

interface canvasType {
    clearCanvas: () => void;
    color: string;
    setColor: (color: string) => void;
}

export default function CanvasControl({ clearCanvas, color, setColor }: canvasType) {
    const colors = [
        'rgba(99, 102, 241, 0.6)',
        'rgba(168, 85, 247, 0.6)',
        'rgba(236, 72, 153, 0.6)',
    ];
    return (
        <div className='md:fixed w-fit left-0 top-0 md:h-[100dvh] items-center flex md:px-8 cursor-none pointer-events-none z-30'>
            <div className='flex h-fit w-fit p-2 bg-gray-200 dark:bg-slate-800 rounded-full z-40 pointer-events-auto'>
                <div className='flex md:flex-col space-1'>
                    {colors.map((data, key) => {
                        return (
                            <button
                                onClick={() => setColor(data)}
                                className='w-8 h-8 rounded-full'
                                style={{ backgroundColor: data }}
                                key={key}
                                aria-label='Change Brush Color'
                            >
                                {color === data && <HiCheckCircle className='mx-auto text-xl' />}
                            </button>
                        );
                    })}

                    <button
                        className='w-8 h-8 rounded-full bg-gray-300 dark:bg-black'
                        onClick={() => {
                            clearCanvas();
                        }}
                        aria-label='Clear Canvas'
                    >
                        <HiTrash className='mx-auto' />
                    </button>
                </div>
            </div>
        </div>
    )
}

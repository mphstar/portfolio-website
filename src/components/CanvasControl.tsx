
import { HiCheckCircle, HiTrash } from 'react-icons/hi';

interface canvasType {
    clearCanvas: () => void;
    color: string;
    setColor: (color: string) => void;
}

export default function CanvasControl({ clearCanvas, color, setColor }: canvasType ) {
    const colors = [
        'rgba(99, 102, 241, 0.6)',
        'rgba(168, 85, 247, 0.6)',
        'rgba(236, 72, 153, 0.6)',
    ];
    return (
        <div className='fixed transition left-5 p-2 bg-gray-200 dark:bg-slate-800 rounded-full translate-y-56 z-40'>
            <div className='flex flex-col space-y-1'>
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
    )
}

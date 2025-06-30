// components/MinSpendCard.tsx
import React from 'react';

interface MinSpendCardProps {
  amount: string;
  itemsEstimate?: string;
  variant?: 'default' | 'corner' | 'diagonal' | 'scooped';
}

const MinSpendCard: React.FC<MinSpendCardProps> = ({
  amount = '$550',
  itemsEstimate = '~ 4 items',
  variant = 'default',
}) => {
  // Variant styles
  const variants = {
    default: (
      <div className="relative w-48 h-24 bg-indigo-600 text-white p-4 rounded-lg">
        <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 clip-corner"></div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-sm font-medium opacity-80">Min. spend</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold">{amount}</p>
            {itemsEstimate && <p className="text-xs opacity-70">{itemsEstimate}</p>}
          </div>
        </div>
      </div>
    ),
    corner: (
      <div className="relative w-48 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
        <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 clip-corner"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/20 clip-corner-br"></div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-xs font-medium tracking-wider">MINIMUM SPEND</p>
          <div>
            <p className="text-3xl font-bold">{amount}</p>
            {itemsEstimate && <p className="text-xs mt-1 opacity-80">Approx. {itemsEstimate.replace('~ ', '')}</p>}
          </div>
        </div>
      </div>
    ),
    diagonal: (
      <div className="relative w-56 h-16 bg-emerald-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-emerald-700" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
        ></div>
        <div className="relative h-full flex items-center px-4">
          <div>
            <p className="text-xs font-medium">Min. spend</p>
            <p className="text-xl font-bold">
              {amount}
              {itemsEstimate && <span className="text-sm font-normal opacity-80 ml-2">{itemsEstimate}</span>}
            </p>
          </div>
        </div>
      </div>
    ),
    scooped: (
      <div className="relative w-48 h-24 bg-rose-600 text-white p-4 rounded-lg">
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-white/20"></div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-sm font-medium">Minimum Spend</p>
          <div>
            <p className="text-2xl font-bold">{amount}</p>
            {itemsEstimate && <p className="text-xs opacity-80">Approx. {itemsEstimate.replace('~ ', '')}</p>}
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      {variants[variant]}
      <style jsx global>{`
        .clip-corner {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        .clip-corner-br {
          clip-path: polygon(100% 100%, 0 100%, 0 0);
        }
      `}</style>
    </>
  );
};

export default MinSpendCard;
import React, { useState } from 'react';
import { Heart, Cat, Stars, Sparkles, Gift } from 'lucide-react';

function FloatingIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute animate-float text-pink-400 ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isHoveringNo, setIsHoveringNo] = useState(false);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  // Exponential growth for more dramatic size increase
  const yesButtonSize = Math.min(16 + Math.pow(noCount, 2), 75);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 flex items-center justify-center overflow-hidden relative">
      {/* Decorative floating icons */}
      <FloatingIcon className="top-10 left-[10%]"><Heart size={24} fill="currentColor" /></FloatingIcon>
      <FloatingIcon className="top-20 right-[15%]"><Cat size={28} /></FloatingIcon>
      <FloatingIcon className="bottom-20 left-[20%]"><Stars size={24} /></FloatingIcon>
      <FloatingIcon className="top-32 left-[30%]"><Gift size={24} /></FloatingIcon>
      <FloatingIcon className="bottom-40 right-[25%]"><Heart size={20} fill="currentColor" /></FloatingIcon>
      <FloatingIcon className="top-1/2 right-[10%]"><Sparkles size={24} /></FloatingIcon>
      <FloatingIcon className="bottom-24 left-[40%]"><Cat size={24} /></FloatingIcon>
      <FloatingIcon className="top-40 right-[35%]"><Heart size={28} fill="currentColor" /></FloatingIcon>

      <div className="max-w-4xl w-full px-4 relative">
        {!yesPressed ? (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="relative inline-block">
                <img
                  src="../ValentinesHero.jpg"
                  alt="Valentine's Day"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl border-4 border-pink-400 animate-float"
                />
                <Heart 
                  className="absolute -top-4 -right-4 text-pink-500 animate-bounce" 
                  size={32} 
                  fill="currentColor"
                />
                <Heart 
                  className="absolute -bottom-4 -left-4 text-pink-500 animate-bounce-delayed" 
                  size={32} 
                  fill="currentColor"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-pink-600 tracking-wide animate-pulse-slow">
                Will you be my Valentine?
              </h1>
              <p className="text-xl text-pink-500 animate-fade-in-delayed">
                Every "No" makes my heart grow fonder! 💖
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <button
                onClick={handleYesClick}
                style={{ fontSize: `${yesButtonSize}px` }}
                className={`
                  bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700
                  text-white font-bold py-3 px-6 rounded-full
                  transition-all duration-300 transform hover:scale-110 shadow-lg
                  flex items-center gap-2 animate-pulse-slow
                `}
              >
                <Heart className="animate-beat" size={yesButtonSize} fill="currentColor" />
                Yes
              </button>
              
              <button
                onClick={handleNoClick}
                onMouseEnter={() => setIsHoveringNo(true)}
                onMouseLeave={() => setIsHoveringNo(false)}
                className={`
                  bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full
                  transition-all duration-200 shadow-lg relative
                  ${isHoveringNo ? 'animate-shake' : ''}
                `}
              >
                No
                <Cat className="absolute -top-3 -right-3 text-gray-400 animate-bounce" size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-bounce-in">
            <div className="space-y-4">
              <div className="relative inline-block">
                <Heart className="mx-auto text-red-500 animate-beat" size={120} fill="currentColor" />
                <Stars className="absolute top-0 right-0 text-yellow-400 animate-spin-slow" size={40} />
                <Sparkles className="absolute bottom-0 left-0 text-yellow-400 animate-pulse" size={40} />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-pink-600 animate-bounce-delayed">
                Thank you for being my Valentine! ❤️
              </h2>
              <div className='flex gap-2 justify-center'>
                <p className="text-2xl text-pink-500 animate-fade-in-delayed">
                  I love you baby!
                </p><Heart className="text-pink-500 animate-beat" size={32} fill="currentColor" />
              </div>
              <p className="text-2xl text-pink-500 animate-fade-in-delayed">
                You've made my heart so happy! 
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Cat className="text-pink-400 animate-float" size={32} />
                <Heart className="text-pink-500 animate-beat" size={32} fill="currentColor" />
                <Stars className="text-yellow-400 animate-spin-slow" size={32} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
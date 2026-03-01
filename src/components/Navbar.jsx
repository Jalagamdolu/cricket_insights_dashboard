import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Cricket Insights
                </h1>
            </div>
            <div className="hidden md:flex gap-6 text-slate-400 font-medium">
                <a href="#" className="hover:text-white transition-colors">Match Center</a>
                <a href="#" className="hover:text-white transition-colors">Team Stats</a>
                <a href="#" className="hover:text-white transition-colors">Player Registry</a>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
                    Live Feed
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

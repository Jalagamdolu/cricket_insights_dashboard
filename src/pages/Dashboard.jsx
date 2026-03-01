import React from 'react';
import Navbar from '../components/Navbar';
import SummaryCards from '../components/SummaryCards';
import ManhattanChart from '../components/ManhattanChart';
import ScorecardTable from '../components/ScorecardTable';
import { matchData } from '../data/matchData';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">Match Overview</h1>
                        <p className="text-slate-400 mt-1">ICC World Cup 2024 • Final • {matchData.summary.teamA.name} vs {matchData.summary.teamB.name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded-full border border-red-500/20 uppercase tracking-wider animate-pulse">
                            Final Result
                        </span>
                        <span className="text-slate-500 text-sm">Feb 27, 2026</span>
                    </div>
                </header>

                <SummaryCards summary={matchData.summary} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <ManhattanChart data={matchData.inningsProgress} />
                        <ScorecardTable
                            title={`${matchData.summary.teamA.name} Batting`}
                            data={matchData.battingScorecard}
                            type="batting"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-red-400 rounded-full"></span>
                                Team Comparison
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">{matchData.summary.teamA.name}</span>
                                    <span className="font-bold text-xl">{matchData.summary.teamA.score} ({matchData.summary.teamA.overs})</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: '100%' }}></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">{matchData.summary.teamB.name}</span>
                                    <span className="font-bold text-xl">{matchData.summary.teamB.score} ({matchData.summary.teamB.overs})</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500" style={{ width: '87%' }}></div>
                                </div>
                            </div>
                        </div>

                        <ScorecardTable
                            title={`${matchData.summary.teamB.name} Bowling`}
                            data={matchData.bowlingScorecard}
                            type="bowling"
                        />

                        <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 p-6 rounded-xl backdrop-blur-sm">
                            <h4 className="text-white font-bold mb-2">Key Highlight</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Virat Kohli's masterclass 120(110) anchored the Indian innings, setting up a formidable total that the Australian batters found difficult to chase under pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-12 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
                &copy; 2026 Cricket Insights Dashboard • Built with React & Tailwind
            </footer>
        </div>
    );
};

export default Dashboard;

import React from 'react';

const ScorecardTable = ({ title, data, type }) => {
    if (type === 'batting') {
        return (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-700 bg-slate-800/80">
                    <h3 className="font-bold text-slate-100">{title}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-400 text-xs uppercase bg-slate-900/50">
                                <th className="px-4 py-3">Batter</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">R</th>
                                <th className="px-4 py-3 text-right">B</th>
                                <th className="px-4 py-3 text-right">4s</th>
                                <th className="px-4 py-3 text-right">6s</th>
                                <th className="px-4 py-3 text-right">SR</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/50">
                            {data.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                                    <td className="px-4 py-3 font-semibold text-blue-400">{row.player}</td>
                                    <td className="px-4 py-3 text-slate-400 text-sm italic">{row.status}</td>
                                    <td className="px-4 py-3 text-right font-bold text-slate-200">{row.runs}</td>
                                    <td className="px-4 py-3 text-right text-slate-400">{row.balls}</td>
                                    <td className="px-4 py-3 text-right text-slate-400">{row.fours}</td>
                                    <td className="px-4 py-3 text-right text-slate-400">{row.sixes}</td>
                                    <td className="px-4 py-3 text-right text-slate-500 font-mono text-xs">{row.sr}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-slate-700 bg-slate-800/80">
                <h3 className="font-bold text-slate-100">{title}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-xs uppercase bg-slate-900/50">
                            <th className="px-4 py-3">Bowler</th>
                            <th className="px-4 py-3 text-right">O</th>
                            <th className="px-4 py-3 text-right">M</th>
                            <th className="px-4 py-3 text-right">R</th>
                            <th className="px-4 py-3 text-right">W</th>
                            <th className="px-4 py-3 text-right">Econ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                                <td className="px-4 py-3 font-semibold text-emerald-400">{row.bowler}</td>
                                <td className="px-4 py-3 text-right text-slate-200">{row.overs}</td>
                                <td className="px-4 py-3 text-right text-slate-400">{row.maidens}</td>
                                <td className="px-4 py-3 text-right text-slate-200">{row.runs}</td>
                                <td className="px-4 py-3 text-right font-bold text-red-400">{row.wickets}</td>
                                <td className="px-4 py-3 text-right text-slate-500 font-mono text-xs">{row.econ}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScorecardTable;

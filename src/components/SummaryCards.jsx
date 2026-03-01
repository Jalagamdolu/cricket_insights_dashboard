import React from 'react';

const SummaryCards = ({ summary }) => {
    const cards = [
        { label: 'Result', value: summary.result, icon: '🏆', color: 'bg-emerald-500/10 text-emerald-500' },
        { label: 'Player of Match', value: summary.playerOfMatch, icon: '👤', color: 'bg-blue-500/10 text-blue-500' },
        { label: 'Winning Margin', value: summary.winningMargin, icon: '📈', color: 'bg-amber-500/10 text-amber-500' },
        { label: 'Total Runs (Ind)', value: summary.totalRuns, icon: '🏏', color: 'bg-violet-500/10 text-violet-500' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cards.map((card, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm hover:border-slate-600 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm font-medium">{card.label}</span>
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${card.color} group-hover:scale-110 transition-transform`}>
                            {card.icon}
                        </span>
                    </div>
                    <div className="text-xl font-bold text-slate-100">{card.value}</div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;

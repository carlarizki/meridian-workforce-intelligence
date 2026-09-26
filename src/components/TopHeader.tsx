import React from 'react';
import { ChevronRight, Layers, Sparkles } from 'lucide-react';
import { NavTab } from '../types/meridian';

interface TopHeaderProps {
  activeTab: NavTab;
  setActiveTab?: (tab: NavTab) => void;
}

const TAB_TITLES: Record<
  NavTab,
  { title: string; subtitle: string; category: string; screenNum: number }
> = {
  overview: {
    category: 'Ringkasan',
    title: 'Overview',
    subtitle: 'Titik awal: masalah, pilihan, dan dampaknya.',
    screenNum: 0,
  },
  workforce: {
    category: 'Populasi',
    title: 'Workforce',
    subtitle: '6.000 staf lapangan yang pekerjaannya berubah.',
    screenNum: 1,
  },
  exposure: {
    category: 'Otomasi',
    title: 'AI Exposure',
    subtitle: 'Seberapa besar tugas harian tergantikan mesin.',
    screenNum: 2,
  },
  jobs: {
    category: 'Taksonomi',
    title: 'Job Architecture',
    subtitle: 'Peta jabatan, peran, dan tugasnya.',
    screenNum: 3,
  },
  capabilities: {
    category: 'Kompetensi',
    title: 'Capability Library',
    subtitle: 'Kemampuan nyata staf dan tingkatannya.',
    screenNum: 4,
  },
  people: {
    category: 'Direktori',
    title: 'Employee Directory',
    subtitle: 'Profil per orang beserta bukti kompetensinya.',
    screenNum: 5,
  },
  'future-roles': {
    category: 'Transisi',
    title: 'Future Roles',
    subtitle: 'Peran baru yang siap menampung mereka.',
    screenNum: 6,
  },
  redeployment: {
    category: 'Mobilitas',
    title: 'Mobility & Redeployment',
    subtitle: 'Mencocokkan orang dengan peran barunya.',
    screenNum: 7,
  },
  learning: {
    category: 'Skill',
    title: 'Learning Plan',
    subtitle: 'Pelatihan 4-12 minggu, Rp9,0 jt per orang.',
    screenNum: 8,
  },
  decision: {
    category: 'Keputusan',
    title: 'Decision Engine',
    subtitle: 'Lima jalur transisi, satu per satu bisa ditelusuri.',
    screenNum: 9,
  },
  impact: {
    category: 'Finansial',
    title: 'Impact & ROI',
    subtitle: 'Hemat bersih Rp170,6 M dibanding jalur PHK.',
    screenNum: 10,
  },
  roadmap: {
    category: 'Implementasi',
    title: '90-Day Plan',
    subtitle: '12 minggu pertama: dialog serikat dan pilot wilayah.',
    screenNum: 11,
  },
};

export const TopHeader: React.FC<TopHeaderProps> = ({ activeTab }) => {
  const current = TAB_TITLES[activeTab] || TAB_TITLES.workforce;

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>Project Meridian</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-500">{current.title}</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          {current.title}
        </h1>
        <p className="text-sm text-slate-500 line-clamp-1">
          {current.subtitle}
        </p>
      </div>

      {/* Subtle indicator tag */}
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 rounded-full text-[11px] text-slate-500 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Executive Prototype</span>
        </div>
      </div>
    </header>
  );
};

/**
 * EduKit — Video Tutorial Apps
 * ============================================
 * CARA KEMASKINI VIDEO:
 * 1. Upload video ke YouTube
 * 2. Ambil ID video dari URL: youtube.com/watch?v=XXXXX
 * 3. Gantikan 'GANTI_ID_XXXXX' dengan ID sebenar
 * ============================================
 */

const EDUKIT_VIDEOS = {

  // ── PAKEJ GURU (10 Apps) ──────────────────────────────────
  eduassign: {
    nama: 'GuruKits',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '📋',
    ringkasan: 'Agih dan pantau beban tugas guru mengikut bidang',
    ytId: 'GANTI_ID_EDUASSIGN_PRO',
    ytUrl: '',  // Auto-generated
    thumbnail: '',  // Auto-generated
  },
  spin: {
    nama: 'SPIn Analytics',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '📈',
    ringkasan: 'Analitik prestasi pelajar OTR vs AR dan carta kemajuan',
    ytId: 'GANTI_ID_SPIN_ANALYTICS',
    ytUrl: '',
    thumbnail: '',
  },
  spinpro: {
    nama: 'Dashboard SPIn Pro',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '📊',
    ringkasan: 'Dashboard visual prestasi pelajar yang komprehensif',
    ytId: 'GANTI_ID_DASHBOARD_SPIN_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  gantt: {
    nama: 'GanttPro',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '📅',
    ringkasan: 'Carta Gantt digital untuk perancangan projek sekolah',
    ytId: 'GANTI_ID_GANTT_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  kokum: {
    nama: 'KokurikulumTrack',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '🏅',
    ringkasan: 'Rekod kehadiran kokurikulum — persatuan, sukan, beruniform',
    ytId: 'GANTI_ID_KOKURIKULUM_TRACK',
    ytUrl: '',
    thumbnail: '',
  },
  moodradar: {
    nama: 'Mood Radar Pro',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '🌡️',
    ringkasan: 'Kesan mood dan emosi pelajar dalam kelas dengan QR code',
    ytId: 'GANTI_ID_MOOD_RADAR_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  orgchart: {
    nama: 'OrgChart Pro',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '🗂️',
    ringkasan: 'Jana carta organisasi digital sekolah, masjid atau JKK',
    ytId: 'GANTI_ID_ORGCHART_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  rph: {
    nama: 'RPH Fleksi KSSR Pro',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '📝',
    ringkasan: 'Rancangan Pengajaran Harian dengan Standard Kandungan dan Objektif',
    ytId: 'GANTI_ID_RPH_FLEKSI',
    ytUrl: '',
    thumbnail: '',
  },
  senarai: {
    nama: 'Senarai Semak Ultimate',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '✅',
    ringkasan: 'Senarai semak tugas sekolah mengikut bidang, kategori dan status',
    ytId: 'GANTI_ID_SENARAI_SEMAK',
    ytUrl: '',
    thumbnail: '',
  },
  gamekelas: {
    nama: 'GameKelas',
    pakej: 'guru',
    pakejLabel: 'Pakej Guru',
    ikon: '🎮',
    ringkasan: 'Cipta game interaktif kelas — MCQ, betul/salah, isi kosong, kad kilat',
    ytId: 'GANTI_ID_GAME_KELAS',
    ytUrl: '',
    thumbnail: '',
  },

  // ── PAKEJ PENTADBIR (8 Apps) ─────────────────────────────
  edudash: {
    nama: 'EduDash Pro',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '🏫',
    ringkasan: 'Dashboard sekolah lengkap — kehadiran, BMI, disiplin, PAJSK, kewangan',
    ytId: 'GANTI_ID_EDUDASH_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  headcount: {
    nama: 'H2 Headcount 2.0',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '🎯',
    ringkasan: 'Pemantauan progres pelajar OTR vs AR per kelas secara visual',
    ytId: 'GANTI_ID_H2_HEADCOUNT',
    ytUrl: '',
    thumbnail: '',
  },
  stafftrack: {
    nama: 'StaffTrack Pro',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '👥',
    ringkasan: 'Sistem kehadiran digital staf — import CSV, trend harian, laporan',
    ytId: 'GANTI_ID_STAFFTRACK_PRO',
    ytUrl: '',
    thumbnail: '',
  },
  kokum2: {
    nama: 'Rekod Kehadiran Kokurikulum',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '🏅',
    ringkasan: 'Pandangan pentadbir ke atas kehadiran kokurikulum seluruh sekolah',
    ytId: 'GANTI_ID_REKOD_KOKURIKULUM',
    ytUrl: '',
    thumbnail: '',
  },
  pencerapan: {
    nama: 'SK@S — Pencerapan',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '🔍',
    ringkasan: 'Cerapan guru Standard 4 SKPMg2 — isi rubrik, jana borang PDF rasmi',
    ytId: 'GANTI_ID_SKAS_PENCERAPAN',
    ytUrl: '',
    thumbnail: '',
  },
  guruganti: {
    nama: 'Sistem Guru Ganti Pro',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '🔄',
    ringkasan: 'Urus guru ganti, rekod ketidakhadiran, analisis kekerapan bulanan',
    ytId: 'GANTI_ID_GURU_GANTI',
    ytUrl: '',
    thumbnail: '',
  },
  skpm: {
    nama: 'SKPM Pro',
    pakej: 'pentadbir',
    pakejLabel: 'Pakej Pentadbir',
    ikon: '⭐',
    ringkasan: 'Kualiti pengurusan sekolah — IKS, Standard 1–5, jana laporan PDF',
    ytId: 'GANTI_ID_SKPM_PRO',
    ytUrl: '',
    thumbnail: '',
  },
};

// Auto-generate YouTube URLs dan thumbnails
Object.keys(EDUKIT_VIDEOS).forEach(key => {
  const v = EDUKIT_VIDEOS[key];
  const id = v.ytId;
  const isPlaceholder = id.startsWith('GANTI_');
  v.ytUrl = isPlaceholder ? '' : `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  v.thumbnail = isPlaceholder ? '' : `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  v.hasVideo = !isPlaceholder;
});

// Helper — dapatkan semua apps mengikut pakej
function getVideosByPakej(pakej) {
  return Object.entries(EDUKIT_VIDEOS)
    .filter(([, v]) => v.pakej === pakej)
    .map(([key, v]) => ({ key, ...v }));
}

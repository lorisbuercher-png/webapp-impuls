export type Job = { id: string; title: string; location: string; workload: string; salary: string; description: string; active: boolean; };
export const jobs: Job[] = [
  { id: '1', title: 'Produktionsmitarbeiter/in', location: 'Zürich', workload: '100%', salary: 'CHF 4’500 – 5’200', description: 'Temporäre Stelle in moderner Produktion mit sofortigem Start.', active: true },
  { id: '2', title: 'Logistiker/in EFZ', location: 'Basel', workload: '80–100%', salary: 'CHF 5’000 – 5’800', description: 'Wareneingang, Kommissionierung und Staplerarbeiten.', active: true },
  { id: '3', title: 'Sachbearbeiter/in Administration', location: 'Bern', workload: '60–100%', salary: 'CHF 5’200 – 6’300', description: 'Administrative Unterstützung für Kunden und Personalberater.', active: true },
];

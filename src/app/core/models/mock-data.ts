import {
  ClassificationSection,
  ClassificationClass,
  ClassificationSubclass,
  ClassificationGroup,
  SectionCode,
} from './classification.model';

export const SECTIONS: ClassificationSection[] = [
  { code: 'A', title: 'Human Necessities', description: 'Agriculture, foodstuffs, personal and domestic articles, health, amusements.', color: '#2e7d32', subclassCount: 487 },
  { code: 'B', title: 'Performing Operations; Transporting', description: 'Separating, mixing, shaping, printing, transporting, packaging.', color: '#1565c0', subclassCount: 612 },
  { code: 'C', title: 'Chemistry; Metallurgy', description: 'Inorganic/organic chemistry, compositions, metallurgy, glass, ceramics.', color: '#6a1b9a', subclassCount: 743 },
  { code: 'D', title: 'Textiles; Paper', description: 'Fibre treatment, yarn, weaving, knitting, non-wovens, paper.', color: '#e65100', subclassCount: 134 },
  { code: 'E', title: 'Fixed Constructions', description: 'Building, earth drilling, mining, roads, dams, locks.', color: '#795548', subclassCount: 98 },
  { code: 'F', title: 'Mechanical Engineering', description: 'Engines, pumps, lighting, heating, weapons, blasting.', color: '#37474f', subclassCount: 321 },
  { code: 'G', title: 'Physics', description: 'Instruments, optics, measuring, testing, computing, information storage.', color: '#00695c', subclassCount: 523 },
  { code: 'H', title: 'Electricity', description: 'Basic electric elements, electric techniques, electronic circuitry.', color: '#c62828', subclassCount: 418 },
];

export const CLASSES: ClassificationClass[] = [
  { code: 'A01', sectionCode: 'A', title: 'Agriculture; Forestry; Animal Husbandry; Hunting; Trapping; Fishing', description: 'Tillage, cultivation, harvesting, animal husbandry methods and apparatus.', subclassCount: 12 },
  { code: 'A21', sectionCode: 'A', title: 'Baking; Equipment for Making or Processing Doughs', description: 'Dough preparation, baking apparatus, baked products.', subclassCount: 4 },
  { code: 'A61', sectionCode: 'A', title: 'Medical or Veterinary Science; Hygiene', description: 'Diagnosis, surgery, medical devices, pharmaceuticals, sanitation.', subclassCount: 38 },
  { code: 'A63', sectionCode: 'A', title: 'Sports; Games; Amusements', description: 'Athletic apparatus, indoor and outdoor games, fairground amusements.', subclassCount: 11 },
  { code: 'B01', sectionCode: 'B', title: 'Physical or Chemical Processes and Apparatus', description: 'Mixing, filtering, centrifuging, distilling, ion exchange.', subclassCount: 14 },
  { code: 'B60', sectionCode: 'B', title: 'Vehicles in General', description: 'Vehicles, vehicle fittings, vehicle components.', subclassCount: 24 },
  { code: 'B64', sectionCode: 'B', title: 'Aircraft; Aviation; Cosmonautics', description: 'Aeroplanes, helicopters, space vehicles, parachutes.', subclassCount: 7 },
  { code: 'C07', sectionCode: 'C', title: 'Organic Chemistry', description: 'Acyclic, carbocyclic, heterocyclic compounds; natural resins; dyes; vitamins.', subclassCount: 9 },
  { code: 'C12', sectionCode: 'C', title: 'Biochemistry; Beer; Spirits; Wine; Vinegar; Microbiology; Enzymology', description: 'Fermentation, enzymes, micro-organisms, mutation, genetic engineering.', subclassCount: 10 },
  { code: 'G01', sectionCode: 'G', title: 'Measuring; Testing', description: 'Measuring length, volume, speed, force, temperature, radiation; testing.', subclassCount: 41 },
  { code: 'G06', sectionCode: 'G', title: 'Computing; Calculating; Counting', description: 'Data processing, image processing, recognition, neural networks.', subclassCount: 18 },
  { code: 'G16', sectionCode: 'G', title: 'Information and Communication Technology', description: 'ICT specially adapted for specific application fields, health informatics.', subclassCount: 5 },
  { code: 'H01', sectionCode: 'H', title: 'Basic Electric Elements', description: 'Electrodes, batteries, capacitors, resistors, coils, switches, connectors.', subclassCount: 51 },
  { code: 'H04', sectionCode: 'H', title: 'Electric Communication Technique', description: 'Transmission, multiplex, telephony, broadcasting, networks, wireless.', subclassCount: 24 },
];

export const SUBCLASSES: ClassificationSubclass[] = [
  { code: 'A01B', classCode: 'A01', sectionCode: 'A', title: 'Soil Working in Agriculture or Forestry', description: 'Ploughs, cultivators, harrows, ridgers.', groupCount: 89, recentFilings: 412 },
  { code: 'A01C', classCode: 'A01', sectionCode: 'A', title: 'Planting; Sowing; Fertilising', description: 'Machines and implements for planting seeds or plants.', groupCount: 23, recentFilings: 287 },
  { code: 'A01D', classCode: 'A01', sectionCode: 'A', title: 'Harvesting; Mowing', description: 'Mowers, reapers, combines, threshers, hay-making machines.', groupCount: 115, recentFilings: 631 },
  { code: 'A01G', classCode: 'A01', sectionCode: 'A', title: 'Horticulture; Cultivation of Vegetables', description: 'Working the soil, transplanting, growing conditions.', groupCount: 55, recentFilings: 893 },
  { code: 'A61B', classCode: 'A61', sectionCode: 'A', title: 'Diagnosis; Surgery; Identification', description: 'Surgical instruments, medical imaging, biopsy, endoscopy.', groupCount: 340, recentFilings: 14820 },
  { code: 'A61K', classCode: 'A61', sectionCode: 'A', title: 'Preparations for Medical, Dental, or Toilet Purposes', description: 'Medicinal preparations, dental preparations, biocides.', groupCount: 512, recentFilings: 22410 },
  { code: 'A61P', classCode: 'A61', sectionCode: 'A', title: 'Specific Therapeutic Activity of Chemical Compounds', description: 'Drugs for cardiovascular, neurological, antiinfective use.', groupCount: 43, recentFilings: 18900 },
  { code: 'G06F', classCode: 'G06', sectionCode: 'G', title: 'Electric Digital Data Processing', description: 'Processors, memory, I/O, data processing methods.', groupCount: 1240, recentFilings: 89430 },
  { code: 'G06N', classCode: 'G06', sectionCode: 'G', title: 'Computing Arrangements Based on Biological Models', description: 'Neural networks, machine learning, fuzzy logic, genetic algorithms.', groupCount: 98, recentFilings: 62180 },
  { code: 'G06T', classCode: 'G06', sectionCode: 'G', title: 'Image Data Processing or Generation', description: 'Image analysis, compression, synthesis, rendering, 3D.', groupCount: 420, recentFilings: 43200 },
  { code: 'G06V', classCode: 'G06', sectionCode: 'G', title: 'Image or Video Recognition or Understanding', description: 'Pattern recognition, object detection, gesture recognition.', groupCount: 144, recentFilings: 31700 },
  { code: 'H04L', classCode: 'H04', sectionCode: 'H', title: 'Transmission of Digital Information', description: 'Data networks, protocols, error detection, cryptography.', groupCount: 890, recentFilings: 78430 },
  { code: 'H04W', classCode: 'H04', sectionCode: 'H', title: 'Wireless Communication Networks', description: 'Mobile networks, access control, handover, 5G, IoT.', groupCount: 740, recentFilings: 95210 },
  { code: 'H04N', classCode: 'H04', sectionCode: 'H', title: 'Pictorial Communication (Television)', description: 'TV systems, image communication, facsimile, video.', groupCount: 512, recentFilings: 34890 },
];

export const GROUPS_BY_SUBCLASS: Record<string, ClassificationGroup[]> = {
  'G06N': [
    { code: 'G06N 3/00', subclassCode: 'G06N', title: 'Computing Arrangements Inspired by the Brain', isMainGroup: true },
    { code: 'G06N 3/02', subclassCode: 'G06N', title: 'Neural Networks', isMainGroup: false },
    { code: 'G06N 3/04', subclassCode: 'G06N', title: 'Architecture, e.g. Interconnection Topology', isMainGroup: false },
    { code: 'G06N 3/08', subclassCode: 'G06N', title: 'Learning Methods', isMainGroup: false },
    { code: 'G06N 3/084', subclassCode: 'G06N', title: 'Backpropagation', isMainGroup: false },
    { code: 'G06N 20/00', subclassCode: 'G06N', title: 'Machine Learning', isMainGroup: true },
    { code: 'G06N 20/10', subclassCode: 'G06N', title: 'Machine Learning using Kernel Methods (SVM)', isMainGroup: false },
    { code: 'G06N 20/20', subclassCode: 'G06N', title: 'Ensemble Methods', isMainGroup: false },
    { code: 'G06N 5/00', subclassCode: 'G06N', title: 'Knowledge-Based Models', isMainGroup: true },
    { code: 'G06N 5/04', subclassCode: 'G06N', title: 'Inference or Reasoning Models', isMainGroup: false },
  ],
  'H04W': [
    { code: 'H04W 4/00', subclassCode: 'H04W', title: 'Services or Facilities Specially Adapted for Wireless Networks', isMainGroup: true },
    { code: 'H04W 4/06', subclassCode: 'H04W', title: 'Multicasting or Broadcasting', isMainGroup: false },
    { code: 'H04W 4/70', subclassCode: 'H04W', title: 'Machine-to-Machine (IoT) Services', isMainGroup: false },
    { code: 'H04W 12/00', subclassCode: 'H04W', title: 'Security', isMainGroup: true },
    { code: 'H04W 12/06', subclassCode: 'H04W', title: 'Authentication', isMainGroup: false },
    { code: 'H04W 12/08', subclassCode: 'H04W', title: 'Access Control', isMainGroup: false },
    { code: 'H04W 36/00', subclassCode: 'H04W', title: 'Handoff or Reselection', isMainGroup: true },
    { code: 'H04W 72/00', subclassCode: 'H04W', title: 'Radio Resource Allocation', isMainGroup: true },
    { code: 'H04W 84/00', subclassCode: 'H04W', title: 'Network Topologies', isMainGroup: true },
    { code: 'H04W 84/04', subclassCode: 'H04W', title: 'Grid or Mesh Networks', isMainGroup: false },
  ],
  'A61B': [
    { code: 'A61B 5/00', subclassCode: 'A61B', title: 'Measuring Human Body or Parts', isMainGroup: true },
    { code: 'A61B 5/024', subclassCode: 'A61B', title: 'Measuring Pulse Rate or Blood Pressure', isMainGroup: false },
    { code: 'A61B 5/055', subclassCode: 'A61B', title: 'Magnetic Resonance Imaging', isMainGroup: false },
    { code: 'A61B 17/00', subclassCode: 'A61B', title: 'Surgical Instruments', isMainGroup: true },
    { code: 'A61B 17/04', subclassCode: 'A61B', title: 'Stitching; Ligation', isMainGroup: false },
    { code: 'A61B 34/00', subclassCode: 'A61B', title: 'Computer-Aided Surgery', isMainGroup: true },
    { code: 'A61B 34/20', subclassCode: 'A61B', title: 'Surgical Robots', isMainGroup: false },
  ],
};

export function getClassesBySection(sectionCode: SectionCode): ClassificationClass[] {
  return CLASSES.filter(c => c.sectionCode === sectionCode);
}

export function getSubclassesByClass(classCode: string): ClassificationSubclass[] {
  return SUBCLASSES.filter(s => s.classCode === classCode);
}

export function getGroupsBySubclass(subclassCode: string): ClassificationGroup[] {
  return GROUPS_BY_SUBCLASS[subclassCode] ?? [];
}

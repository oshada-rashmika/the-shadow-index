export interface Targets {
    id: string;
    alias: string;

    threatLevel: 'S' | 'A' | 'B';
    status: 'active' | 'eliminated' | 'unknown';

    description: string;
}
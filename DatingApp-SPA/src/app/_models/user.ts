import { Photo } from './photo';

export interface User {
id: number;
userName: string;
KnownAs: string;
age: number;
gender: string;
created: Date;
lastActive: Date;
photoUrl: string;
city: string;
countary : string;
// country: string;
intersts?: string;
// interstests?: string;
introduction?: string;
lookingFor?: string;
photos?: Photo[];


}

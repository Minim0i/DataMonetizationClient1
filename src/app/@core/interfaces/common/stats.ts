
import { Observable } from 'rxjs';

export interface CompanyByLegalName {
    legalName: string;
    nbMat: string;
}

export interface CompanyByDescription {
    nbMat: string;
    codeDesc: string;
}

export interface CompanyByPublication {
    nbMat: string;
    publicationDesc: string;
}

export abstract class Stats {
    abstract getByLegalName(): Observable<CompanyByLegalName[]>;
    abstract getByDescription(): Observable<CompanyByDescription[]>;
    abstract getByPublication(): Observable<CompanyByPublication[]>;
}

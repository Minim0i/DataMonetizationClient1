
import { Observable } from 'rxjs';

export interface CompanyInfoModel {
    matricule: string;
    registrationAt: string;
    corporateName: string;
    name: string;
}

export abstract class Companies {
    abstract get(): Observable<CompanyInfoModel[]>;
}

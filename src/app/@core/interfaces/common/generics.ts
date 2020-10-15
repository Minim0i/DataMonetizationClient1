
import { Observable } from 'rxjs';

export interface ResultGlobalSearch {
    property: string;
    value: string;
}

export abstract class Generics {
    abstract get(paramValue: string): Observable<ResultGlobalSearch[]>;
}

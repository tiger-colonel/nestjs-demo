import { Role } from '@/common/enum/role.enum';
export declare class UserEntity {
    id?: number;
    name?: string;
    fullname?: string;
    dep?: string;
    email?: string;
    phone: string;
    no?: string;
    role?: Role;
    create_date: Date;
    update_date: Date;
}

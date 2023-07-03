import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    info(query: {
        id: number;
    }): Promise<import("./user.entity").UserEntity>;
    list(query: {
        name: string;
    }): Promise<import("./user.entity").UserEntity[]>;
    deleteUser(id: string, user: any): Promise<boolean>;
}
